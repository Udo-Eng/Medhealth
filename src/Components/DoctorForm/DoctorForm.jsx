import React,{Component} from 'react';
import Loading from '../Loading/index.js';
import './doctorform.css';


class DoctorForm  extends Component {
constructor(props){
    super(props);

    this.state = {
        firstName: "",
        lastName: "",
        middleName: "",
        email: "",
        gender: "",
        phoneNumber: "",
        ID: "",
        specializtion: "",
        errorMessage: "",
        formClass: '',
        isLoading: false
    }
}

// function to set the value of Loading component 
setIsLoading = (value) => {
  this.setState({isLoading: value})
}
    // function to handle change in input parameters 
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    //function to validate the result 
    validateResponse = (response) => {
        if (response.sucess) {
            this.setIsLoading(false);
            this.setState({ errorMessage: null });
        } else {
            this.setIsLoading(false);
            this.setState({ errorMessage: response.message });
        }
    }

    // Function to handle the form submission 
    onSubmitHandler = async (event) => {
            event.preventDefault();

            const {
                firstName,
                lastName,
                middleName,
                email,
                phoneNumber,
                ID,
                specializtion
            } = this.state;

        this.setIsLoading(true);

        let {createDoctorHandler,updateDoctorHandler,Data,createDoctorState,closeForm} = this.props;

        event.preventDefault();

        if (!this.form.checkValidity()) {

            this.setIsLoading(false);
            this.setState({ formClass: 'was-validated' });

        }
        else{

            this.setState({ formClass: '' });

            let doctorInfo = {
                firstName,
                lastName,
                middleName,
                email,
                phoneNumber,
                ID,
                specializtion
            }


            try {
                if (createDoctorState) {
                    let response = await createDoctorHandler(doctorInfo);

                    this.validateResponse(response);
                } else {
                    let id = Data._id;
                    let response = await updateDoctorHandler(id,doctorInfo);

                    this.validateResponse(response);
                   
                }
            } catch (err) {
                this.setState({ errorMessage: 'No internet connection' });
                this.setIsLoading(false);
            }

            // function to close form;
            closeForm();
        }

    }

    render(){
        const { headerDisplay,btnDisplay, closeForm} = this.props;

        const { 
            firstName,
            lastName,
            middleName,
            email,
            phoneNumber,
            ID,
            specializtion,
            formClass,
            errorMessage,
            isLoading
            } = this.state;

        if (isLoading) return <Loading />

        return (
            <div className="docFormContainer">
                {
                    errorMessage ? <div className='message-error'>{errorMessage}</div> : <div></div>
                } 
                <h1 className='mb-3 header' >{headerDisplay}</h1>
                <form className={formClass} ref={(el) => this.form = el}>
                    <div className='mb-3'>
                        <div className='row g-3'>
                            <div className='col-md-4'>
                                <label
                                    htmlFor='firstName'
                                    className='form-label'
                                >
                                    First name
                                </label>
                                <input
                                    name='firstName'
                                    id='firstName'
                                    type='text'
                                    placeholder='Enter First name'
                                    className='form-control'
                                    value={firstName}
                                    onChange={this.handleChange}
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please enter first name
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <label
                                    htmlFor='lastname'
                                    className='form-label'>
                                    Middle name
                                </label>
                                <input
                                    name='middleName'
                                    id='middlename'
                                    type='text'
                                    placeholder='Enter Middle name'
                                    className='form-control'
                                    value={middleName}
                                    onChange={this.handleChange}
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please enter middle name
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <label
                                    htmlFor='lastname'
                                    className='form-label'>
                                    Last name
                                </label>
                                <input
                                    name='lastName'
                                    id='lastname'
                                    type='text'
                                    placeholder='Enter last name'
                                    className='form-control'
                                    value={lastName}
                                    onChange={this.handleChange}
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please enter last name
                                </div>
                            </div>
                        </div>
                  </div>
                    <div className='mb-3'>
                        <div className='row g-3'>
                            <div className='col-md-6'>
                                <label
                                    htmlFor='email'
                                    className='form-label'>
                                    Email
                                </label>
                                <input
                                    name='email'
                                    id='email'
                                    type='email'
                                    placeholder='Enter doctor email'
                                    className='form-control'
                                    value={email}
                                    onChange={this.handleChange}
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please enter email
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <label
                                    htmlFor='phoneNumber'
                                    className='form-label'>
                                    Age
                                </label>
                                <input
                                    name='phoneNumber'
                                    id='phoneNumber'
                                    type='text'
                                    placeholder="Enter phone number"
                                    className='form-control'
                                    value={phoneNumber}
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please enter phone number
                                </div>
                            </div>
                        </div>
                 </div>
                    <div className='mb-3'>
                        <div className='row g-3'>
                            <div className='col-md-6'>
                                <label
                                    htmlFor='ID'
                                    className='form-label'>
                                    Doctor ID
                                </label>
                                <input
                                    name='ID'
                                    id='ID'
                                    type='text'
                                    placeholder="Enter Doctor's ID "
                                    className='form-control'
                                    value={ID}
                                    onChange={this.handleChange}
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please enter Doctor's ID 
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <label
                                    htmlFor='specialization'
                                    className='form-label'>
                                    Age
                                </label>
                                <input
                                    name='specialization'
                                    id= 'specialization'
                                    type='text'
                                    placeholder="area of specialization"
                                    className='form-control'
                                    value={specializtion}
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please enter area of specialization
                                </div>
                            </div>
                        </div>
                    </div>
                    <div >
                        <button
                            type='submit'
                            className='btn btn-lg bg-green mb-3'
                        >
                            {btnDisplay}
                        </button>
                        <button
                            type='button'
                            className='btn btn-lg btn-danger mb-3 mx-4'
                            onClick={closeForm}
                        >
                            cancel
                        </button>
                    </div>
            </form>

         </div>
        )
    }
  
}


export default DoctorForm;