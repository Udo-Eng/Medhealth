import React, { useState } from 'react';
import './hospitalslist.css';
import HospitalForm from '../../Components/HospitalForm/HospitalForm.jsx';
import DeleteItem from '../../Components/DeleteItem/index.js';
import { createHospital, deleteHospital, updateHospital } from '../../API/Hospitals.js';



// BEGINING OF Hospitals List React  COMPONENT 
const HospitalsList = ({ requestHospitalsData,hospitalsData,setHospitalsData}) => {


    const [createHospitalState, setCreateHospital] = useState(false);
    const [updateHospitalData, setUpdateHospital] = useState(null);
    const [hospitalId, setHospitalId] = useState('');
    const [isUpdateOpen, setIsUpdateOpen] = useState(false);
    const [isOpen, setOpen] = useState(false);
    



    // function to create a new Hospital
    const createHospitalHandler = async (hospitalData) => {
        try {
            let response = await createHospital(hospitalData);

            if (response.sucess) {
                requestHospitalsData();
            }

            return response;

        } catch (err) {
            throw err;
        }
    }


    // function to update patient
    const updateHospitalHandler = async (hospitalId, hospitalData) => {
        try {
            let response = await updateHospital(hospitalId,hospitalData);

            if (response.sucess) {
                requestHospitalsData();
            }

            return response;

        } catch (err) {
            throw err
        }
    }


    // function to delete Patient
    const deleteHospitalHandler = async (hospitalId) => {

        let response = await deleteHospital(hospitalId);

        if (response.sucess) {
            setHospitalsData(response.hospitals);
        }
    }



    // function to display the create patient form 
    const OnClickCreateHospitalHandler = () => {
        setCreateHospital(true);
    }


    // function to display the update patient form 
    const OnClickUpdateHospitalHandler = (Hospital) => () => {
        setIsUpdateOpen(true);
        setUpdateHospital(Hospital);
    }


    // function to display the delete  Patient modal  
    const OnClickDeleteHospitalHandler = (Hospital) => () => {
        setOpen(true);
        setHospitalId(Hospital._id);
    }

    // function to handle the delete patient functionality 
    const deleteHospitalHandlerFunction = (hospitalId) => () => {
        setOpen(false);
        deleteHospitalHandler(hospitalId);
    }

    if (!hospitalsData.length) {
        requestHospitalsData();
    }


    return (
        createHospital ? <HospitalForm
            closeForm={() => setCreateHospital(false)}
            btnDisplay="Create Hospital"
            headerDisplay="Hospital Registration"
            createHospitalState={createHospitalState}
            HospitalHandler={createHospitalHandler}
        /> :
            <>
                {
                    isUpdateOpen ?
                        <HospitalForm
                            closeForm={() => setIsUpdateOpen(false)}
                            Data={updateHospitalData}
                            headerDisplay="Update Hospital"
                            btnDisplay="Update Hospital"
                            updateHospitalHandler={updateHospitalHandler}
                        /> :
                        <>
                            <DeleteItem
                                Id={hospitalId}
                                isOpen={isOpen}
                                Close={() => setOpen(false)}
                                deleteHandlerFunction={deleteHospitalHandlerFunction}
                            />
                            <header className="d-flex header-bg">
                                <h1 style={{ textAlign: 'center' }}>
                                    Hospital's  Registration 
                                </h1>
                            </header>
                            <table className='table table-hover '>
                                <thead className='header-bg'>
                                    <tr className='text-center'>
                                        <th scope='col'>S/N</th>
                                        <th scope='col'> Name</th>
                                        <th scope='col'>ID</th>
                                        <th scope='col'>email</th>
                                        <th scope='col'>Edit Hospital</th>
                                        <th scope='col'>Delete Hospital</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {hospitalsData.map((Hospital, index) => {
                                        // Increment the value of index and set it as S/N value 
                                        let SN = ++index;

                                        return (
                                            <tr className='text-center' key={Hospital._id}>
                                                <th scope='row'>
                                                    {SN}
                                                </th>
                                                <td>
                                                    {Hospital.Name}
                                                </td>
                    
                                                <td>
                                                    {Hospital._id}
                                                </td>
                                                <td>
                                                    {Hospital.contactEmail}
                                                </td>
                                                <td>
                                                    <button
                                                        className='btn bg-green btn-sm'
                                                        onClick={OnClickUpdateHospitalHandler(Hospital)}>
                                                        <i className="fa fa-edit"></i>
                                                    </button>
                                                </td>
                                                <td>
                                                    <button className='btn bg-green btn-sm '
                                                        onClick={OnClickDeleteHospitalHandler(Hospital)}
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
                                onClick={OnClickCreateHospitalHandler}
                            >
                                <i className="fa fa-plus"></i>
                            </button>
                        </>
                }
            </>
    )
}


export default HospitalsList;

