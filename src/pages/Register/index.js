import React, { useState, useRef } from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import Loading from '../../Components/Loading/index.js';
import { useNavigate } from "react-router-dom";



// Begining of Register  component
const Register = ({createAdmin}) => {

    // Cal the useNavigate function to return a navigator function 
    let navigate = useNavigate();

    // Refrencing a dom element 
    const regForm = useRef(null);

    // Declaring the Register state
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formClass, setformClass] = useState('formwidth mb-3');
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    const onSubmitHandler = async (e) => {
        setIsLoading(true);
        e.preventDefault();

        const Admin = {
            lastName,
            firstName,
            email,
            password
        }

        if(!regForm.current.checkValidity()){

            setformClass(" was-validated formwidth mb-3");
            setIsLoading(false);

        }else{
            setformClass("formwidth mb-3");
            try{
                let result = await createAdmin(Admin);


                if (result.sucess) {
                    //Route to the  Patient List if authentication was successful  component 
                    // Todo this later 
                    setIsLoading(false);
                    navigate('/login');

                } else {
                    // Display and error message telling the person to re-fill the form and resgister again
                    setErrorMessage("Error registering Admin Please Try again");
                    setIsLoading(false);
                }

            }catch(err){
                setErrorMessage("No Internet connection");
                setIsLoading(false); 
            } 
        }

    }

    if(isLoading) return <Loading />   

    return (
        <div className='container '>
            
            <h1 className='header'>Register</h1>
            {errorMessage? <div className = 'message-error' >{errorMessage}</div> : <div></div>}
            <form
                className={formClass}
                onSubmit={onSubmitHandler}
                id="logIn-form"
                noValidate
                ref={regForm}
            >
                <div className='mb-3'>
                    <label
                        htmlFor='firstName'
                        className='form-label'
                    >
                        First name
                    </label>
                    <input
                        name='firstName'
                        id='firstName'
                        type='text'
                        placeholder='Enter your first name'
                        className='form-control'
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        required
                    />
                    <div className="invalid-feedback">
                        Please fill this field
                    </div>
                </div>
                <div className='mb-3'>
                    <label
                        htmlFor='lastName'
                        className='form-label'
                    >
                        Last name
                    </label>
                    <input
                        name='lastName'
                        id='lastName'
                        type='text'
                        placeholder='Enter your last name'
                        className='form-control'
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        required
                    />
                    <div className="invalid-feedback">
                        Please fill this field
                    </div>
                </div>
                <div className='mb-3'>
                    <label
                        htmlFor='email'
                        className='form-label'
                    >
                        Email
                    </label>
                    <input
                        name='email'
                        id='email'
                        type='email'
                        placeholder='Enter your email'
                        className='form-control'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <div className="invalid-feedback">
                        Please enter valid email
                    </div>
                </div>
                <div className='mb-3'>
                    <label
                        htmlFor='password'
                        className='form-label'
                    >
                        Password
                    </label>
                    <input
                        name='password'
                        id='password'
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder='Enter your password'
                        className='form-control'
                        required
                    />
                    <div className="invalid-feedback">
                        Please enter valid password
                    </div>
                </div>
                <div className="d-grid " >
                    <button
                        id="btn-log"
                        type='submit'
                        className='btn btn-lg bg-green mb-3'
                    >
                        Register Admin
                    </button>
                    <p>Have an account? <Link to='/login'><span id='pointer'>Login</span></Link></p>
                    <p ><Link to='/'><span id='pointer'>Back to Home</span></Link></p>
                </div>
            </form>
        </div>
    )
}

export default Register;
