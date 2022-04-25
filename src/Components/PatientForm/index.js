import React  from 'react';
import './index.css'





// Declaring global variables 
let  closeFormFunction = null;
let  updatePatientData = null;


// Begining of Form Component
class  PatientForm  extends React.Component{
    constructor(props){
        super(props);
        this.state ={
           id:"",
           hospital: "",
           firstName: "",
           lastName: "",
           middleName: "",
           email: "",
           gender: "",
           status: "",
           nationality: "",
           age: "",
           dob: "",
           phoneNumber: "",
           state: "",
           resdentialAddress: "",
           kinFirstName: "",
           kinLastName: "",
           kinPhonenumber: "",
           kinRelationship: "",
           kinResidentialAddress: "",
           errorMessage: "",
           formClass : 'formwidth',
           UpdatePatient:false
        }
    }

// function to handle change in input parameters 
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name] : value});
    }


    // Set Patient id when patient is created 
    setPatientId = (id) => {
        this.setState({id});
    }

// Function to handle form submission 
    onSubmitHandler = async (e) => {

        let { PatientHandler,createPatient,updatePatientHandler} = this.props;
        let id = this.state.id;

                 e.preventDefault();

                if(!this.form.checkValidity()) {
                 

                    console.error('Invalid Form');
                    this.setState({ formClass : 'formwidth was-validated'});
                    
                }else{
                    
                    this.setState({ formClass : 'formwidth'});

                    console.info('Valid Form');

                    
                    let patientInfo = Object.assign({},this.state);

                    // Declare the response variable 
                    let response;
                    if (createPatient){
                       response = await PatientHandler(patientInfo);
                       
                        let patientId =  response.patients[0]._id 
                       
                        this.setPatientId(patientId);

                    }else{
                       response = await updatePatientHandler(id,patientInfo); 
                    } 

                    // function to close form;
                    closeFormFunction();

                    if (response.sucess) {
                        this.setState({ errorMessage: null });
                        console.log('User registered sucessfully ');
                    } else {
                        this.setState({errorMessage:response.message});
                    }

                }
     
    }

    // Function to handle update functionality 
    UpdateFormHandler = (updatePatientData) => {
        console.log(updatePatientData);
        if(updatePatientData !== null){
            this.setState(updatePatientData);
        }
    }

    componentDidMount(){
        if (updatePatientData) {
            this.UpdateFormHandler(updatePatientData);
        }   
    }

    render(){
      const { closeForm,btnDisplay,Data,headerDisplay} = this.props;

        // Setting Global Variables to update state
        updatePatientData = Data
        closeFormFunction = closeForm;


        const { hospital,
            firstName,
            lastName,
            middleName,
            email,
            gender,
            status,
            nationality,
            age,
            dob,
            phoneNumber,
            state,
            resdentialAddress,
            kinFirstName,
            kinLastName,
            kinPhoneNumber,
            kinRelationship,
            kinResidentialAddress,
            formClass,
            errorMessage
        }  = this.state;

        return (
            <div className='reg-container '>
                {
                errorMessage ? <div className='error'>{errorMessage}</div> : <div></div>
            }
                <h1 className='mb-3 header' >{headerDisplay}</h1>
                <form onSubmit={ this.onSubmitHandler} className={formClass} id="reg-form" ref={el => this.form = el} noValidate>

                    <fieldset className="border rounded-3 p-3 mb-3">
                        <legend className="float-none w-auto px-3">Hospital</legend>
                        <div className='mb-3'>
                            <select
                                name='hospital'
                                id='hospital'
                                placeholder='Select a hospital'
                                className='form-select'
                                value={hospital}
                                onChange={this.handleChange}
                                required
                            >
                                <option>
                                    Select a hospital
                                </option>
                                <option value="health Care">
                                    Health care Hospital
                                </option>
                                <option value="Med Plus">
                                    Med Plus  Hospital
                                </option>
                                <option value="Forever">
                                    Forever Hospital
                                </option>
                            </select>
                            <div className="invalid-feedback">
                                Please Select a hospital
                            </div>
                        </div>
                    </fieldset>

                    {/* BEGINING OF PERSONAL INFO  */}

                    <fieldset className="border rounded-3 p-3 mb-3">
                        <legend className="float-none  w-auto  px-3"> Personal Info</legend>
                        <div className='mb-3'>
                            <div className='row g-3'>
                                <div className='col-md-4'>
                                    <label
                                        htmlFor='validationCustom02'
                                        className='form-label'
                                    >
                                        First name
                                    </label>
                                    <input
                                        name='firstName'
                                        id='validationCustom02'
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
                                <div className='col-md-6 '>
                                    <label
                                        htmlFor='gender'
                                        className='form-label'>
                                        Gender
                                    </label>
                                    <select
                                        name='gender'
                                        id='gender'
                                        className='form-select'
                                        onChange={this.handleChange}
                                        value={gender}
                                        required
                                    >
                                        <option>
                                            Select a gender
                                        </option>
                                        <option value="Male">
                                            Male
                                        </option>
                                        <option value="Female">
                                            Female
                                        </option>
                                        <option value="Rather not say">
                                            Rather not say
                                        </option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a gender 
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <label
                                        htmlFor='status'
                                        className='form-label'>
                                        Maritial Status
                                    </label>
                                    <select
                                        name='status'
                                        id='status'
                                        className='form-select'
                                        onChange={this.handleChange}
                                        value={status}
                                        required
                                    >
                                        <option >
                                            Select  Maritial Status
                                        </option>
                                        <option value="Married">
                                            Married
                                        </option>
                                        <option value="Single">
                                            Single
                                        </option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select marital status
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <div className='row g-3'>
                                <div className='col-md-6'>
                                    <label
                                        htmlFor='DOB'
                                        className='form-label'>
                                        Date of Birth
                                    </label>
                                    <input
                                        name='dob'
                                        id ='DOB'
                                        type='date'
                                        placeholder='Select Date of Birth'
                                        className='form-control'
                                        value={dob}
                                        onChange={this.handleChange}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Please enter Date of Birth
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <label
                                        htmlFor='age'
                                        className='form-label'>
                                        Age
                                    </label>
                                    <input
                                        name='age'
                                        id='age'
                                        type='text'
                                        placeholder="Enter your  Age"
                                        className='form-control'
                                        value={age}
                                        onChange={this.handleChange}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Please enter age
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    {/*CONTACT INFO  BEGINS  */}

                    <fieldset className="border rounded-3 p-3 mb-3">
                        <legend className="float-none  w-auto  px-3">Contact Info</legend>
                        <div className='mb-3'>
                            <div className='row g-3'>
                                <div className='col-md-6'>
                                    <label
                                        htmlFor='email'
                                        className='form-label'
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        name='email'
                                        id='email'
                                        type='email'
                                        placeholder='Enter your email'
                                        className='form-control'
                                        value={email}
                                        onChange={this.handleChange}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Please enter valid email
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <label
                                        htmlFor='phone number'
                                        className='form-label'>
                                        Phone Number
                                    </label>
                                    <input
                                        name = 'phoneNumber'
                                        id='phone number'
                                        type='text'
                                        placeholder='Enter phone number'
                                        className='form-control'
                                        value = {phoneNumber}
                                        onChange = {this.handleChange}
                                        required
                                    />
                                    <div className = "invalid-feedback">
                                        Please enter phone number
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <div className='row g-3'>
                                <div className='col-md-6 '>
                                    <label
                                        htmlFor='nationality'
                                        className='form-label'>
                                        Nationality
                                    </label>
                                    <select
                                        name='nationality'
                                        id='nationality'
                                        className='form-select'
                                        onChange={this.handleChange}
                                        value={nationality}
                                        required
                                    >
                                        <option selected>
                                            Nationality
                                        </option>
                                        <option value="Nigerian">
                                            Nigerian
                                        </option>
                                        <option value="Ghananian">
                                            Ghananian
                                        </option>
                                        <option value="American">
                                            American
                                        </option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please  select nationality
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <label
                                        htmlFor='state'
                                        className='form-label'>
                                        State of Origin
                                    </label>
                                    <select
                                        name='state'
                                        id='state'
                                        className='form-select'
                                        onChange={this.handleChange}    
                                        value={state}
                                        required
                                    >
                                        <option selected>
                                            State of Origin
                                        </option>
                                        <option value="Abia">
                                            Abia State
                                        </option>
                                        <option value="Delta">
                                            Delta State
                                        </option>
                                        <option value="Lagos">
                                            Lagos State
                                        </option>
                                        <option value="Enugu">
                                            Enugu State
                                        </option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select  state
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label
                                htmlFor='resdentialAddress'
                                className='form-label'>
                                Residental Address
                            </label>
                            <textarea
                                name='resdentialAddress'
                                id='address'
                                placeholder='Enter your address'
                                className='form-control'
                                value={resdentialAddress}
                                onChange={this.handleChange}
                                required
                            >
                            </textarea>
                            <div className="invalid-feedback">
                                Please enter address
                            </div>
                        </div>
                    </fieldset>

                    {/* NEXT OF KIN INFO  BEGINS  */}
                    <fieldset className="border rounded-3 p-3">
                        <legend className="float-none  w-auto  px-3">Next of Kin Info</legend>
                        <div className='mb-3'>
                            <div className='row g-3'>
                                <div className='col-md-6'>
                                    <label
                                        htmlFor='kinFirstName'
                                        className='form-label'
                                    >
                                        Next of Kin First name
                                    </label>
                                    <input
                                        name='kinFirstName'
                                        id='kinFirstName'
                                        type='text'
                                        placeholder='Enter your next of kin first name'
                                        className='form-control'
                                        value={kinFirstName}
                                        onChange={this.handleChange}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Please enter next of kin first name
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <label
                                        htmlFor='kinLastName'
                                        className='form-label'
                                    >
                                        Next of Kin Last name
                                    </label>
                                    <input
                                        name='kinLastName'
                                        id='kinLastName'
                                        type='text' 
                                        placeholder='Enter your next of kin Last name'
                                        className='form-control'
                                        value={kinLastName}
                                        onChange={this.handleChange}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Please enter next of kin last name
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <div className='row g-3'>
                                <div className='col-md-6'>
                                    <label
                                        htmlFor='kin relationship'
                                        className='form-label'>
                                        Next of Kin Relationship
                                    </label>
                                    <input
                                        name='kinRelationship'
                                        id='kin relationship'
                                        type='text'
                                        placeholder='Enter next of Kin relationship'
                                        className='form-control'
                                        value={kinRelationship}
                                        onChange={this.handleChange}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Please enter next of kin relationship
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <label
                                        htmlFor='kinPhoneNumber'
                                        className='form-label'>
                                        Phone Number
                                    </label>
                                    <input
                                        name='kinPhoneNumber'
                                        id='phone number'
                                        type='text'
                                        placeholder='Enter phone number'
                                        className='form-control'
                                        value={kinPhoneNumber}
                                        onChange={this.handleChange}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        please enter next of kin phone number
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label
                                htmlFor='kinResidentialAddress'
                                className='form-label'>
                                  Next of Kin Address
                            </label>
                            <textarea
                                name='kinResidentialAddress'
                                id='kinaddress'
                                placeholder='Enter your Next of Kin Address'
                                className='form-control'
                                value={kinResidentialAddress}
                                onChange={this.handleChange}
                                required
                            >
                            </textarea>
                            <div className="invalid-feedback">
                                Please enter next of kin address
                            </div>
                        </div>
                    </fieldset>
                    <div >
                        <button
                            type='submit'
                            className='btn btn-lg bg-green mb-3'  
                        >
                            {btnDisplay}
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}



export default PatientForm;



// const createPatient = async (credentials) => {

//     return fetch('http://localhost:3030/patient/add', {
//         method: 'post',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(credentials)
//     }).then(response => response.json()).then(result => result)
//         .catch(err => console.log(err));
// }