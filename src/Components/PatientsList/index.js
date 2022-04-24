import React,{useState} from 'react';
import './index.css'
import PatientForm from '../PatientForm/index.js'
import DeletePatient from '../DeletePatient/index.js'



const PatientsList = ({data,createPatientHandler,deletePatientHandler,updatePatientHandler}) => {

   

    const [createPatient,setCreatePatient] = useState(false);
    const [updatePatient,setUpdatePatient] = useState(null);
    const [deletePatient,setDeletePatient] = useState('');
    const [isUpdateOpen,setIsUpdateOpen] = useState(false);
    const [isOpen,setOpen] = useState(false);
   

// function to display the create patient form 
    const createPatientHandler  = (event) => {
      setCreatePatient(true);
    }
     


    return (
        createPatient ? <PatientForm  
        closeForm={()=> setCreatePatient(false)}
         btnDisplay="Create Patient"
          headerDisplay="Patient Registration"
         PatientHandler={createPatientHandler}
          /> :
        <>
                { 
                isUpdateOpen ? 
                <PatientForm 
                closeForm = {() => setIsUpdateOpen(false)} 
                btnDisplay="Update Patient" 
                Data={updatePatient} 
                headerDisplay="Update Patient"
                PatientHandler={updatePatientHandler}
                /> : 
             <>
                    <DeletePatient
                        deletePatient={deletePatient}
                        isOpen={isOpen}
                        Close={() => setOpen(false)}
                        deletePatientHandler={deletePatientHandler}
                    />
                    <h1 className='header-bg' style={{ textAlign: 'center' }}> Patients Records</h1>
                    <table className='table table-hover' >

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
                                let SN = ++index;

                                return (
                                    <tr className='text-center' key={SN}>
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
                                                onClick={() => { setIsUpdateOpen(true); setUpdatePatient(Patient)}}>
                                                 <i className="fa fa-edit"></i>
                                            </button>
                                        </td>
                                        <td>
                                            <button className='btn bg-green btn-sm '
                                                onClick={() => { setOpen(true); setDeletePatient(Patient.email) }}
                                            >
                                                <i
                                                    className="fa fa-trash" >

                                                </i>
                                            </button>
                                        </td>
                                    </tr>)
                            })}
                        </tbody>
                    </table>
                    <button
                        className='btn btn-danger btn-lg float'
                        onClick={createPatientHandler}
                    >
                        <i className="fa fa-plus"></i>
                    </button>
             </>   
}
        </>
                        
    )
}



export default PatientsList;





 // // function to filter the View data 
    // const filterPatient = (email) => {
         
    //   setOpen(false);

    // let NewData = data.filter((patient) => email !== patient.email ).map(patient => patient);
   
    // setData(NewData);

    // }

    // const deletePatientHandler = (email) => () => {
    //     filterPatient(email);
    // }


// const [filtereddata, setData] = useState(data)