import React  from 'react';
import './index.css'
import  SideBar from '../../Components/sidebar/SideBar';
import  TopBar from '../../Components/topbar/TopBar';
// import PatientsList from '../PatientsList/index.js';




const DashBoard = () => {
    return (
        <div className="dashBoard">
                <TopBar />
                  <div className="dashBoardContainer">
                      <SideBar />
                      <div className="other">
                          <p>Other</p>
                      </div>
                         {/* <PatientsList /> */}

                  </div>

        </div>

    )
}


export default  DashBoard;