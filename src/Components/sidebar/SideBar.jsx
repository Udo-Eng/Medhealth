import React from 'react';
import './sidebar.css';
import { Home, People, Person, Settings, LocalHospital, Medication } from '@mui/icons-material';



const SideBar = () => {


    return (
        <div className="sideBar">
                <div className="sideBarUp">
                    <div className="sideBarHeader">
                        <img src="https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg" alt="" className="sideBarImg" />
                        <h3 className="sideBarUserName">Abazie Udochukwu</h3>
                    </div>
                    <div className="sideBarContent">
                        <div className="sideBarContentTitle">
                            Dashboard
                        </div>
                        <ul className="sideBarList">
                            <li className="sideBarListItem">
                                <Home className="sideBarIcon" />
                                <span>Home</span>
                            </li>
                            <li className="sideBarListItem">
                                <Person className="sideBarIcon" />
                                <span>Profile</span>
                            </li>
                            <li className="sideBarListItem">
                                <People className="sideBarIcon" />
                                <span>Patients</span>
                            </li>
                            <li className="sideBarListItem">
                                <LocalHospital className="sideBarIcon" />
                                <span>Hospitals</span>
                            </li>
                            <li className="sideBarListItem">
                                <Medication className="sideBarIcon" />
                                <span>Doctors</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sideBarDown">
                    <Settings className="sideBarIcon" />
                    <span>Settings</span>
                </div>
           
        </div>
    )
}


export default SideBar