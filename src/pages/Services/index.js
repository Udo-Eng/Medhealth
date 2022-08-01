import React, { useState,useRef } from 'react';
import './index.css';
import Header from '../../Components/Header/index.js';
import Footer from '../../Components/Footer/index.js';
import { Link } from 'react-router-dom';
import ImageSource from '../../assets/Health-Professional-Image.jpg';
import Loading from '../../Components/Loading/index.js';
import { useNavigate } from "react-router-dom";
import { SubmitContactInfo } from '../../API/Home.js';





const Services = () => {

    const contactForm = useRef(null);

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [formClass,setFormClass] = useState(' ');
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    let navigate = useNavigate();

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const contactDetails = {
            email,
            phoneNumber,
            name
        };

        if (!contactForm.current.checkValidity()) {

            setFormClass(" was-validated ");
        } else {
            setFormClass(" ");
            try {
                const result = await SubmitContactInfo(contactDetails);

                if (result.sucess) {
                    // Set the register state  to route to Patients List 

                    //  Set Loading state to false and navigate to the patients Lists
                    setIsLoading(false);

                    // Navigate to the sucess page 
                    navigate('/sucess')
            

                } else {
                    setErrorMessage(result.message);
                     

                    setIsLoading(false);
                }

            } catch (err) {
                setErrorMessage("No internet connection");
                setIsLoading(false);
            }



        }


    }

    if (isLoading) return <Loading />

    return (
        <div>
            <Header />
            <div className="aboutContent">
                <div className="PageAboutContent"  >
                    <div className="innerAboutContent" >
                        <h3 className="aboutContentTitle">Our Services</h3>
                        <p className="aboutContentText">
                           We are a Dynamic and ever evolving company we offer our clients various experiences which includes infrastructure
                           Health records, and PACMS serviceswhile don't you register with us to get started.
                        </p>
                        <Link to='/register'><button className="aboutPageBtn">Register </button></Link>
                    </div>
                    <div className="aboutPageImg" id="aboutImg" >
                        <img src={ImageSource} alt="App illustration" className="pageMainImg" />
                    </div>
                </div>
                <div className="aboutContent">
                    <h3 className="contactFormTitle">
                        Still in doubt?  Contact us 
                    </h3>
                    {errorMessage ? <div className='message-error' >{errorMessage}</div> : <></>}
                    <div className="contactFormContainer">
                        <form className={formClass} onSubmit={onSubmitHandler}>
                            <div className='mb-3'>
                                <label
                                    htmlFor='name'
                                    className='form-label'
                                >
                                    Full Name
                                </label>
                                <input
                                    name='name'
                                    id='name'
                                    type='text'
                                    placeholder='Enter your full name'
                                    className='form-control'
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
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
                                />
                            </div>
                                <div className='mb-3'>
                                    <label
                                        htmlFor='phoneNumber'
                                        className='form-label'
                                    >
                                    Phone Number
                                    </label>
                                    <input
                                        name='phoneNumber'
                                        id='PhoneNumber'
                                        type='text'
                                        placeholder='Enter your phone number'
                                        className='form-control'
                                        value={phoneNumber}
                                        onChange={e => setPhoneNumber(e.target.value)}
                                    />
                                </div>
                                <div className="d-grid gap-2" >
                                    <button
                                        id="btn-log"
                                        type='submit'
                                        className='btn btn-lg bg-green mb-3'
                                    >
                                       Submit
                                    </button>
                                </div>
                            </form>
                            
                        </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Services;