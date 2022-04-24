import React from 'react';
import './index.css'

const Header = (props) => {

    const {setLogIn} = props;

   const  onClickHandler = () =>{
        setLogIn(true);
    }

    return (
        <header>        
            <p className="logo">Med-Health</p>
                <ul className="navbar-list">
                <li className="navbar-item"><a  href='#'>Home</a></li>
                <li className="navbar-item"><a  href='#'>About</a></li>
                <li className="navbar-item" ><a href='#'>Services</a></li>
                </ul> 
            <button className="cta" onClick={onClickHandler}>Login</button>
        </header>
    )
}

export default  Header;