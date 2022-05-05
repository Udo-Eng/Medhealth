import React, { useState,useRef } from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import Loading from '../Loading/index.js';
import { useNavigate } from "react-router-dom";




// Begining of Login component
const Login = ({ LogInAdmin, setAdmin,requestPatientsData}) => {



const logForm = useRef(null);

  // Declaring the Login state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const [formClass, setFormClass] = useState("formwidth mb-3");
   const [errorMessage, setErrorMessage] = useState("");
   const [isLoading, setIsLoading] = useState(false);

   let navigate = useNavigate();


  const onSubmitHandler = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    const  AdminDetails = {
      email,
      password
    };

    if (!logForm.current.checkValidity()) {
      

      setFormClass(" was-validated formwidth mb-3");
    } else {
      

      setFormClass("formwidth mb-3");
        try{
            const result = await LogInAdmin(AdminDetails);

          if (result.sucess) {
            // Set the register state  to route to Patients List 

            setAdmin(result.admin);

            // Request Patient Data an set the Loading state
            await requestPatientsData();

            //  Set Loading state to false and navigate to the patients Lists
            setIsLoading(false);
            navigate('/patients');


          } else {
            setErrorMessage(result.message);
            // comment out the functions performing routing 
           
            setIsLoading(false);
          }

        }catch(err){
          setErrorMessage("No internet connection");
          setIsLoading(false);
        }
            
    
      
    }

  }

if(isLoading) return <Loading/>

  return (
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
              autoComplete="true"
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
        {/* To Add a Link to the Register Component Here */}
      <p >Have not Registered? <Link to='/register'><span id='pointer'>Register</span></Link></p>
      <p ><Link to='/'><span id='pointer'>Back to Home</span></Link></p>
      </div>
  )
}

export default Login;
