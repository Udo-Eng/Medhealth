import React,{Component} from 'react';
import Loading from '../Loading/index.js';
import './hospitalform.css';


class HospitalForm  extends Component {
constructor(props){
    super(props);

    this.state = {
        Name : "",
        email: "",
        Staff: "",
        phoneNumber: "",
        ID: "",
        errorMessage: "",
        formClass: "",
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

    //function to validate the result response 
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
                Name,
                email,
                phoneNumber,
                ID,
                Staff,
            } = this.state;

        this.setIsLoading(true);

        let {createHospitalHandler,updateHospitalHandler,Data,createHospitalState,closeForm} = this.props;

        event.preventDefault();

        if (!this.form.checkValidity()) {

            this.setIsLoading(false);
            this.setState({ formClass: 'was-validated' });

        }
        else{

            this.setState({ formClass: '' });

            let hospitalInfo = {
                Name,
                email,
                phoneNumber,
                ID,
                Staff,
                
            }

            try {
                if (createHospitalState) {
                    let response = await createHospitalHandler(hospitalInfo);

                    this.validateResponse(response);
                } else {
                    let id = Data._id;
                    let response = await updateHospitalHandler(id,hospitalInfo);

                    this.validateResponse(response);
                   
                }
            } catch (err) {
                this.setState({ errorMessage: 'No internet connection' });
                this.setIsLoading(false);
            }
            
            //function to close form;
            closeForm();
        }

    }

    render(){

        const { headerDisplay,btnDisplay, closeForm} = this.props;

        const { 
            Name,
            email,
            phoneNumber,
            ID,
            Staff,
            formClass,
            errorMessage,
            isLoading
            } = this.state;

        if (isLoading) return <Loading />

        return (
            <div className="hosFormContainer">
                {
                    errorMessage ? <div className='message-error'>{errorMessage}</div> : <div></div>
                } 
                <h1 className='mb-3 header' >{headerDisplay}</h1>
                <form className={formClass} ref={(el) => this.form = el}>
                    <div className='mb-3'>
                        <div className='row g-3'>
                            <div className='col-md-6'>
                                <label
                                    htmlFor='name'
                                    className='form-label'>
                                    Name
                                </label>
                                <input
                                    name='Name'
                                    id='name'
                                    type='text'
                                    placeholder='Enter Hospital name'
                                    className='form-control'
                                    value={Name}
                                    onChange={this.handleChange}
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please enter hospital name
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <label
                                    htmlFor='email'
                                    className='form-label'>
                                    contact email
                                </label>
                                <input
                                    name='email'
                                    id='email'
                                    type='text'
                                    placeholder='Enter contact email'
                                    className='form-control'
                                    value={email}
                                    onChange={this.handleChange}
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please enter email
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
                                    Hospital ID
                                </label>
                                <input
                                    name='ID'
                                    id='ID'
                                    type='text'
                                    placeholder="Enter Hospital's ID "
                                    className='form-control'
                                    value={ID}
                                    onChange={this.handleChange}
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please enter Hospital's ID
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <label
                                    htmlFor='phoneNumber'
                                    className='form-label'>
                                    tel 
                                </label>
                                <input
                                    name='phoneNumber'
                                    id='phoneNumber'
                                    type='text'
                                    placeholder="Enter  number"
                                    className='form-control'
                                    value={phoneNumber}
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please enter tel number
                                </div>
                            </div>
                        </div>
                 </div>
                    <div className='mb-3'>
                        <div className='row g-3'>
                            <div className='col-md-6'>
                                <label
                                    htmlFor='Staff'
                                    className='form-label'>
                                    Staff
                                </label>
                                <input
                                    name='Staff'
                                    id= 'Staff'
                                    type='text'
                                    placeholder="Enter no of Staff"
                                    className='form-control'
                                    value={Staff}
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please enter The no of Staff
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

export default HospitalForm;