import React, { useState } from 'react';
import './doctorslist.css';
import DoctorForm from '../../Components/DoctorForm/DoctorForm.jsx';
import DeleteItem from '../../Components/DeleteItem/index.js';
import { createDoctor, deleteDoctor, updateDoctor } from '../../API/Doctors.js';



// BEGINING OF DOCTORSLIST COMPONENT 
const DoctorsList = ({ requestDoctorsData,doctorsData,setDoctorsData}) => {


    const [createDoctorState, setCreateDoctor] = useState(false);
    const [updateDoctorData, setUpdateDoctor] = useState(null);
    const [doctorId, setDoctorId] = useState('');
    const [isUpdateOpen, setIsUpdateOpen] = useState(false);
    const [isOpen, setOpen] = useState(false);
    

    // function to create a new Doctor
    const createDoctorHandler = async (doctorData) => {
        try {
            let response = await createDoctor(doctorData);

            if (response.sucess) {
                requestDoctorsData();
            }

            return response;

        } catch (err) {
            throw err;
        }
    }


    // function to update patient
    const updateDoctorHandler = async (doctorId, doctorData) => {
        try {
            let response = await updateDoctor(doctorId,doctorData);

            if (response.sucess) {
                requestDoctorsData();
            }

            return response;

        } catch (err) {
            throw err
        }
    }


    // function to delete Patient
    const deleteDoctorHandler = async (doctorId) => {

        let response = await deleteDoctor(doctorId);

        if (response.sucess) {
            setDoctorsData(response.doctors);
        }
    }



    // function to display the create patient form 
    const OnClickCreateDoctorHandler = () => {
        setCreateDoctor(true);
    }


    // function to display the update patient form 
    const OnClickUpdateDoctorHandler = (Doctor) => () => {
        setIsUpdateOpen(true);
        setUpdateDoctor(Doctor);
    }


    // function to display the delete  Patient modal  
    const OnClickDeleteDoctorHandler = (Doctor) => () => {
        setOpen(true);
        setDoctorId(Doctor._id);
    }

    // function to handle the delete patient functionality 
    const deleteDoctorHandlerFunction = (doctorId) => () => {
        setOpen(false);
        deleteDoctorHandler(doctorId);
    }

    if (!doctorsData.length) {
        requestDoctorsData();
    }


    return (
        createDoctor ? <DoctorForm
            closeForm={() => setCreateDoctor(false)}
            btnDisplay="Create Doctor"
            headerDisplay="Doctor Registration"
            createDoctorState={createDoctorState}
            DoctorHandler={createDoctorHandler}
        /> :
            <>
                {
                    isUpdateOpen ?
                        <DoctorForm
                            closeForm={() => setIsUpdateOpen(false)}
                            Data={updateDoctorData}
                            headerDisplay="Update Doctor"
                            btnDisplay="Update Doctor"
                            updateDoctorHandler={updateDoctorHandler}
                        /> :
                        <>
                            <DeleteItem
                                Id={doctorId}
                                isOpen={isOpen}
                                Close={() => setOpen(false)}
                                deleteHandlerFunction={deleteDoctorHandlerFunction}
                            />
                            <header className="d-flex header-bg">
                                <h1 style={{ textAlign: 'center' }}>
                                    Doctor's  Records 
                                </h1>
                            </header>
                            <table className='table table-hover '>
                                <thead className='header-bg'>
                                    <tr className='text-center'>
                                        <th scope='col'>S/N</th>
                                        <th scope='col'> Name</th>
                                        <th scope='col'>ID</th>
                                        <th scope='col'>email</th>
                                        <th scope='col'>Edit Doctor</th>
                                        <th scope='col'>Delete Doctor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {doctorsData.map((Doctor, index) => {
                                        // Increment the value of index and set it as S/N value 
                                        let SN = ++index;

                                        return (
                                            <tr className='text-center' key={Doctor._id}>
                                                <th scope='row'>
                                                    {SN}
                                                </th>
                                                <td>
                                                    {Doctor.firstName +" " + Doctor.lastName}
                                                </td>
                    
                                                <td>
                                                    {Doctor._id}
                                                </td>
                                                <td>
                                                    {Doctor.email}
                                                </td>
                                                <td>
                                                    <button
                                                        className='btn bg-green btn-sm'
                                                        onClick={OnClickUpdateDoctorHandler(Doctor)}>
                                                        <i className="fa fa-edit"></i>
                                                    </button>
                                                </td>
                                                <td>
                                                    <button className='btn bg-green btn-sm '
                                                        onClick={OnClickDeleteDoctorHandler(Doctor)}
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
                                onClick={OnClickCreateDoctorHandler}
                            >
                                <i className="fa fa-plus"></i>
                            </button>
                        </>
                }
            </>
    )
}


export default DoctorsList;

