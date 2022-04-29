import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

const Header = (props) => {




    return (
        <header>        
            <p className="logo">Med-Health</p>
                <ul className="navbar-list">
                <li className="navbar-item"><p>Home</p></li>
                <li className="navbar-item"><p >About</p></li>
                <li className="navbar-item" ><p>Services</p></li>
                </ul> 
            <Link to='/login'><button className="cta">Login</button></Link>
        </header>
    )
}

export default  Header;