import React from 'react';
import './topbar.css';
import {NotificationsNone,Settings} from '@mui/icons-material';


const TopBar = () => {
    

    return (
        <div className ="topBar">
            <div className="topBarWrapper">
                <div className="topBarLeft">
                   <h3 className="topBarLogo">MED HEALTH </h3>
                </div>
                <div  className="topBarRight">
                        <div className="IconContainer">
                        <NotificationsNone />
                        <span className="NotificationIconBadge">2</span>
                        </div>
                    <div className="IconContainer">
                        <Settings />
                    </div>
                        <img src="https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg" alt="Admin Profile" className="avatarImg" />
                    
                </div>
                
            </div>

        </div>
    )
}


export default TopBar