import React, { useState,useRef } from 'react';
import Register from '../Register/index.js';
import './index.css';




// Begining of Login component
const Login = ({ LogInAdmin, setAdmin, createAdmin, setRegister, setLogIn,requestPatientsData}) => {

const logForm = useRef(null)

  // Declaring the Login state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const [isRegistered, setIsRegistered] = useState(false);
   const [formClass, setFormClass] = useState("formwidth mb-3");
   const [errorMessage, setErrorMessage] = useState("");


  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const  AdminDetails = {
      email,
      password
    }

    if (!logForm.current.checkValidity()) {
      console.log("Invalid Form ");

      setFormClass(" was-validated formwidth mb-3");
    } else {
      console.log("Valid Form ");

      setFormClass("formwidth mb-3");

      const result = await LogInAdmin(AdminDetails);

      if (result.sucess) {
        // Set the register state  to route to Patients List 
        setAdmin(result.Admin);
        setLogIn(false);
        setRegister(true);
        requestPatientsData();
      } else {
        setErrorMessage(result.message);
        setRegister(false);
        setLogIn(true);
      }

    }

  }


  const onClickHandler = (e) => {
    setIsRegistered(true);
  }

  return (
    isRegistered ? <Register setIsRegistered={setIsRegistered}  createAdmin={createAdmin}/> :
      <div className='container '>
      <h1 className=' header ' >Login</h1>
        {errorMessage ? <div className='message-error' >{errorMessage}</div> : <></>}
        <form 
        className={formClass} 
        onSubmit={onSubmitHandler} 
        id="logIn-form"
        ref={logForm} 
        >
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
          </div>
          <div className="d-grid gap-2" >
            <button
              id="btn-log"
              type='submit'
              className='btn btn-lg bg-green mb-3'
            >
              Login
            </button>
          </div>
        </form>
        <p >Have not Registered? <span  onClick={onClickHandler} className='pointer'>Register</span></p>
      </div>
  )
}

export default Login;
