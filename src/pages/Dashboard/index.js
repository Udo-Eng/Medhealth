import React  from 'react';
import './index.css'
import  SideBar from '../../Components/sidebar/SideBar';
import  TopBar from '../../Components/topbar/TopBar';
import {Outlet} from 'react-router-dom';




const DashBoard = () => {
    return (
        <div className="dashBoard">
                <TopBar />
                  <div className="dashBoardContainer">
                      <SideBar />
                      <div className="other">
                        <Outlet />
                      </div>     
                     </div>

        </div>

    )
}


export default  DashBoard;