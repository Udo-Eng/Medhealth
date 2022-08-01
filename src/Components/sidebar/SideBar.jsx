import React from 'react';
import './sidebar.css';
import { Home, People, Person, Settings, LocalHospital, Medication } from '@mui/icons-material';
import {Link} from 'react-router-dom';


const logOutAdmin = () => { localStorage.removeItem('Admin') };

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
                                <Link to ='/admin'>
                                <Home className="sideBarIcon" />
                                <span>Home</span>
                                </Link>
                            </li>
                            <li className="sideBarListItem">
                            <Link to='/profile'>
                                <Person className="sideBarIcon" />
                                <span>Profile</span>
                            </Link>
                            </li>
                            <li className="sideBarListItem">
                            <Link to='/patients'>
                                <People className="sideBarIcon" />
                                <span>Patients</span>
                            </Link>
                            </li>
                            <li className="sideBarListItem">
                                <Link to='/hospital'>
                                <LocalHospital className="sideBarIcon" />
                                <span>Hospitals</span>
                                </Link>
                            </li>
                            <li className="sideBarListItem">
                               <Link to='/doctors'>
                                <Medication className="sideBarIcon" />
                                <span>Doctors</span>
                                </Link>
                            </li>
                            <li className="sideBarListItem">
                              <Link to='/'>
                                  <button className="cta" onClick={logOutAdmin}>
                                      Logout
                                   </button>
                              </Link>
                            </li>
                        </ul>
                    </div>
                        <div className="sideBarDown">
                        <Settings className="sideBarIcon" />
                        <span className="sideBarDownText">Settings</span>
                        </div>
                </div>
        </div>
    )
}

export default SideBar