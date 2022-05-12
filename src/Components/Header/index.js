import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

const Header = () => {

    return (
        <header className="PageHeader"> 
            <div className="PageHeaderLeft">
                <Link to="/"><p className="PageHeaderLogo">Med-Health</p></Link> 
             </div>
             <div className="PageHeaderRight"> 
                <ul className="navbar-list">
                    <li className="navbar-item"><Link to="/"><span className="LinkInnerText">Home</span></Link></li>
                    <li className="navbar-item"><Link to="/about"><span className="LinkInnerText">About</span></Link></li>
                    <li className="navbar-item"><Link to="/services"><span className="LinkInnerText">Services</span></Link></li>
                  </ul> 
                <div className="PageHeaderBtn">
                    <Link to='/login'><button className="PageHeaderBtnCta">Login</button></Link>
                </div>
            </div>      
        </header>
    )
}

export default  Header;