import React  from 'react';
import {Link}  from 'react-router-dom';
import './index.css';


const AuthMessage = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="auth-content" style ={{width:"600px",height:"500px"}}>
                <div className='card-inner-content'>
                    <h1 className="card-title text-center mb-5">
                        Protected page
                    </h1>
                    <div>
                    <h4 className="mb-5">
                        Please Login  or Register to acesss this page content.

                    </h4>
                    </div>
                   
                    <Link to='/login'><button className="btn  btn-lg bg-green"> Login </button></Link>
                </div>
                
            </div>
        </div>
    )
}


export default AuthMessage;