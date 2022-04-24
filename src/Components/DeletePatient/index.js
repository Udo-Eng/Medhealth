import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const rootPortal = document.getElementById('rootPortal');

const DeletePatient  = (props) =>{

    const { isOpen, Close, deletePatientHandler, deletePatient } = props;


    // const  onDeleteHandler = (event) => {
    //     // Call the main App function to perform the request and delete the resource 
    // }

    if (!isOpen) return null;
    return (
        ReactDOM.createPortal(
        <div className="modal-container">
                    <div className="inner-body">
                        <div className="inner-header">
                            <h5 className="inner-title">Delete Patient</h5>
                            <button 
                            type="button" 
                             className="btn btn-warning"
                             onClick={Close}
                             >
                                     Cancel
                             </button>
                        </div>
                        <div className="text-content">
                              Are you sure you want to permanently  delete this patient 
                        </div>
                        <div className="actions">
                            <button 
                            type="button" 
                            onClick={Close}
                            className="btn btn-warning "
                             >
                                 No
                            </button>
                            <button
                             type="button"
                             onClick={deletePatientHandler(deletePatient)}
                            className="btn btn-danger"
                              >
                                Yes
                            </button>
                        </div>
                    </div>
        </div>
        ,rootPortal)
    )
}


export default DeletePatient;