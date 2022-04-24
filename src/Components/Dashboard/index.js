import React  from 'react';
import './index.css'
import AppHeader from './appHeader.js'
import AppSidePanel from './appSidePanel.js'



const DashBoard = () => {
    return (
        
    <header className="app-header fixed-top">	   	            
        <AppHeader />
        <AppSidePanel/>
    </header>

    )
}


export default  DashBoard;