import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const rootPortal = document.getElementById('rootPortal');

const DeleteItem = ({isOpen,Close,deleteHandlerFunction,Id,itemName}) => {


    if (!isOpen) return null;

    return (
        ReactDOM.createPortal(
        <div className="modal-container">
                    <div className="inner-body">
                        <div className="inner-header">
                        <h5 className="inner-title">{itemName}</h5>
                            <button 
                            type="button" 
                             className="btn btn-warning"
                             onClick={Close}
                             >
                                     Cancel
                             </button>
                        </div>
                        <div className="text-content">
                        Are you sure you want to permanently  delete this {itemName} data
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
                            onClick={deleteHandlerFunction(Id)}
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


export default DeleteItem;