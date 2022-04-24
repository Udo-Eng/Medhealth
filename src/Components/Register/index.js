import React, { useState, useRef } from 'react';
import './index.css';



// Begining of Register  component
const Register = ({ createAdmin , setIsRegistered }) => {


    const regForm = useRef(null);

    // Declaring the Register state
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formClass, setformClass] = useState('formwidth mb-3');
    const [errorMessage, setErrorMessage] = useState("");


    const onSubmitHandler = async (e) => {


        e.preventDefault();

        const Admin = {
            lastName,
            firstName,
            email,
            password
        }

        if(!regForm.current.checkValidity()){
            console.log("Invalid Form ");

            setformClass(" was-validated formwidth mb-3");
        }else{
            console.log("Valid Form ");

            setformClass("formwidth mb-3");

            const result = await createAdmin(Admin);

            if (result.sucess) {
                // Set the Login state is Registered to true and route to Login Form
                setIsRegistered(false); 
            } else {
                // Display and error message telling the person to Fillin the form and resgister again
                setIsRegistered(true)
                setErrorMessage("Error registering Admin Please Try again")

            }

        }

    }

    const onClickHandler = (e) => {
        setIsRegistered(false);
    }

    return (
        <div className='container '>
            {errorMessage? <div>{errorMessage}</div> : <div></div>}
            <h1 className='header'>Register</h1>
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
                 <p>Have an account? <span className='pointer' onClick={onClickHandler}> Login</span></p>
                </div>
            </form>
        </div>
    )
}

export default Register;
