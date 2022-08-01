import React,{useState} from 'react';
import './index.css';
import PatientForm from '../../Components/PatientForm/index.js';
import DeleteItem from '../../Components/DeleteItem/index.js';
import { createPatient, deletePatient, updatePatient } from '../../API/Patients.js';



// Function to create Patient
const createPatientHandler = async (patientData) => {
    try {
        let response = await createPatient(patientData);

        if (response.sucess) {
            this.requestPatientsData();
        }

        return response;

    } catch (err) {
        throw err;
    }
}


// function to update patient
const updatePatientHandler = async (patientId, patientData) => {
    try {
        let response = await updatePatient(patientId, patientData);

        if (response.sucess) {
            this.requestPatientsData();
        }

        return response;

    } catch (err) {
        throw err
    }
}


// function to delete Patient
const deletePatientHandler = async (patientId) => {

    let response = await deletePatient(patientId);

    if (response.sucess) {
        this.setState({ data: response.patients });
    }
}

// BEGINING OF PATIENT LIST COMPONENT 
const PatientsList = ({ data,requestPatientsData}) => {


    const [createPatient,setCreatePatient] = useState(false);
    const [updatePatient,setUpdatePatient] = useState(null);
    const [patientId,setPatientId] = useState('');
    const [isUpdateOpen,setIsUpdateOpen] = useState(false);
    const [isOpen,setOpen] = useState(false);
  
   

// function to display the create patient form 
    const OnClickCreatePatientHandler  = () => {
      setCreatePatient(true);
    }


// function to display the update patient form 
    const OnClickUpdatePatientHandler = (Patient) => () => { 
                                setIsUpdateOpen(true); 
                                setUpdatePatient(Patient); 
                            }


// function to display the delete  Patient modal  
    const OnClickDeletePatientHandler = (Patient) => () => { 
                                setOpen(true); 
                                setPatientId(Patient._id) 
                            }

// function to handle the delete patient functionality 
    const deletePatientHandlerFunction = (patientId) => () => {
         setOpen(false);
        deletePatientHandler(patientId);
    }
     
    if(!data.length){
        requestPatientsData();
    }


return (
        createPatient ? <PatientForm  
        closeForm={()=> setCreatePatient(false)}
        btnDisplay="Create Patient"
        headerDisplay="Patient Registration"
        createPatient={createPatient}
        PatientHandler={createPatientHandler}
        /> :
            <>
                { 
                        isUpdateOpen ? 
                                <PatientForm 
                                closeForm = {() => setIsUpdateOpen(false)} 
                                Data={updatePatient} 
                                headerDisplay="Update Patient"
                                btnDisplay="Update Patient"
                                updatePatientHandler={updatePatientHandler}
                        /> : 
                        <>
                                    <DeleteItem
                                        Id={patientId}
                                        isOpen={isOpen}
                                        Close={() => setOpen(false)}
                                        deleteHandlerFunction={deletePatientHandlerFunction}
                                    />
                                            <header className="d-flex header-bg">
                                                <h1 style={{ textAlign: 'center' }}>
                                                    Patients Records
                                                </h1>
                                    </header>
                        
                    <table className='table table-hover ' >
                        <thead className='header-bg'>
                            <tr className='text-center'>
                                <th scope='col'>S/N</th>
                                <th scope='col'>First Name</th>
                                <th scope='col'>Last Name</th>
                                <th scope='col'>Phone Number</th>
                                <th scope='col'>email</th>
                                <th scope='col'>Edit Patient</th>
                                <th scope='col'>Delete Patient</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((Patient, index) => {
                                            // Increment the value of index and set it as S/N value 
                                            let SN = ++index;

                                            return (
                                                <tr className='text-center' key={Patient._id}>
                                                    <th scope='row'>
                                                        {SN}
                                                    </th>
                                                    <td>
                                                        {Patient.firstName}
                                                    </td>
                                                    <td>
                                                        {Patient.lastName}
                                                    </td>
                                                    <td>
                                                        {Patient.phoneNumber}
                                                    </td>
                                                    <td>
                                                        {Patient.email}
                                                    </td>
                                                    <td>
                                                        <button
                                                            className='btn bg-green btn-sm'
                                                            onClick={OnClickUpdatePatientHandler(Patient)}>
                                                            <i className="fa fa-edit"></i>
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button className='btn bg-green btn-sm '
                                                            onClick={OnClickDeletePatientHandler(Patient)}
                                                        >
                                                            <i
                                                                className="fa fa-trash" >
                                                            </i>
                                                        </button>
                                                    </td>
                                                </tr>)
                                        })
                                }
                        
                        </tbody>
                    </table>
                    <button
                        className='btn btn-danger btn-lg float'
                                onClick={OnClickCreatePatientHandler}
                    >
                        <i className="fa fa-plus"></i>
                    </button>
                </>   
            }

        </>  
    )
}



export default PatientsList;

