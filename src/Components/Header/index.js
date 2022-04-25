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
                <li className="navbar-item"><p>Home</p></li>
                <li className="navbar-item"><p >About</p></li>
                <li className="navbar-item" ><p>Services</p></li>
                </ul> 
            <button className="cta" onClick={onClickHandler}>Login</button>
        </header>
    )
}

export default  Header;