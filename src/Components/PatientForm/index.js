import React  from 'react';
import './index.css';
import Loading from '../Loading/index.js';



// Declaring global variables 
let  updatePatientData = null;


// Helper function to convert Date from Database to string value  
function convertToYYYYMMDD(d) {
    let date = new Date(d);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();

    if (dt < 10) {
        dt = '0' + dt;
    }
    if (month < 10) {
        month = '0' + month;
    }
    return (year + '-' + month + '-' + dt);
}


// Begining of Form Component
class  PatientForm  extends React.Component{
    constructor(props){
        super(props);
        this.state ={
           hospital: "Med Plus  Hospital",
           firstName: "",
           lastName: "",
           middleName: "",
           email: "",
           gender: "",
           maritalStatus: "",
           nationality: "",
           age: "",
           dob: "",
           phoneNumber: "",
           stateOfOrigin: "",
           resdentialAddress: "",
           kinFirstName: "",
           kinLastName: "",
           kinPhoneNumber: "",
           kinRelationship: "",
           kinResidentialAddress: "",
           errorMessage: "",
           formClass : 'formwidth',
           isLoading: false
        }
    }

    // Function to set Loading State
    setIsLoading = (isLoading) => {
        this.setState({isLoading});
    }

// function to handle change in input parameters 
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name] : value});
    }

// Function to automatically set the date using the Dob 
    onChangeSetAge = (event) => {
        
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value });

        let currentDate = new Date();

        let personBirthAge = new Date(value);

        let age = currentDate.getFullYear() - personBirthAge.getFullYear();

        this.setState({age});

    }
// Function to handle form submission 
    onSubmitHandler = async (e) => {

        this.setIsLoading(true);
        let { PatientHandler,createPatient,updatePatientHandler,Data} = this.props;
        
                 e.preventDefault();

                    if(!this.form.checkValidity()) {
                    
                        this.setIsLoading(false);
                        this.setState({ formClass : 'formwidth was-validated'});
                        
            }
            else{
                        
                                this.setState({ formClass : 'formwidth'});

                                
                                let patientInfo = Object.assign({},this.state);

                
                        try{
                                if (createPatient) {
                                    let response = await PatientHandler(patientInfo);

                                    if (response.sucess) {
                                        this.setIsLoading(false);
                                        this.setState({ errorMessage: null });
                                    } else {
                                        this.setIsLoading(false);
                                        this.setState({ errorMessage: response.message });
                                    }
                                } else {
                                    let id = Data._id;
                                    let response = await updatePatientHandler(id, patientInfo);

                                    if (response.sucess) {
                                        this.setIsLoading(false);
                                        this.setState({ errorMessage: null });
                                    } else {
                                        this.setIsLoading(false);
                                        this.setState({ errorMessage: response.message });
                                    }
                                }
                            } catch(err){
                                this.setState({ errorMessage:'No internet connection'});
                                this.setIsLoading(false);
                            } 

                     // function to close form;
                        this.props.closeForm();  

                }
     
    }

    // Function to handle update functionality 
    UpdateFormHandler = (updatePatientData) => {
        if(updatePatientData !== null){

            let {dob} = updatePatientData;

            dob = convertToYYYYMMDD(dob); 

            this.setState({...updatePatientData,dob});
            
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
     


        const { hospital,
            firstName,
            lastName,
            middleName,
            email,
            gender,
            maritalStatus,
            nationality,
            age,
            dob,
            phoneNumber,
            stateOfOrigin,
            resdentialAddress,
            kinFirstName,
            kinLastName,
            kinPhoneNumber,
            kinRelationship,
            kinResidentialAddress,
            formClass,
            errorMessage,
            isLoading
        }  = this.state;

        

        if(isLoading) return <Loading/>

        return (
            <div className='reg-container '>
                {
                errorMessage ? <div className='message-error'>{errorMessage}</div> : <div></div>
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
                                <option value="Health care Hospital">
                                    Health care Hospital
                                </option>
                                <option value="Med Plus Hospital">
                                    Med Plus  Hospital
                                </option>
                                <option value="Forever Hospital">
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
                                        htmlFor='maritalStatus'
                                        className='form-label'>
                                        Maritial Status
                                    </label>
                                    <select
                                        name='maritalStatus'
                                        id='maritalStatus'
                                        className='form-select'
                                        onChange={this.handleChange}
                                        value={maritalStatus}
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
                                        onChange={this.onChangeSetAge}
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
                                        required
                                        readOnly={true}
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
                                        htmlFor= 'phoneNumber'
                                        className='form-label'>
                                        Phone Number
                                    </label>
                                    <input
                                        name = 'phoneNumber'
                                        id='phoneNumber'
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
                                        <option>
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
                                        htmlFor='stateOfOrigin'
                                        className='form-label'>
                                        State of Origin
                                    </label>
                                    <select
                                        name='stateOfOrigin'
                                        id='stateOfOrigin'
                                        className='form-select'
                                        onChange={this.handleChange}    
                                        value={stateOfOrigin}
                                        required
                                    >
                                        <option>
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
                                        id='kinPhoneNumber'
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


export default PatientForm;

