import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home/Home.js';
import DashBoard from './pages/Dashboard/index.js';
import About from './pages/About/index.js';
import Services from './pages/Services/index.js';
import {getPatients} from './API/Patients.js';
import AppHome from './pages/AppHome/AppHome.jsx';
import Login from './pages/Login/index.js';
import Register from './pages/Register/index.js';
import AuthMessage from './pages/AuthMessage/index.js';
import PatientsList from './pages/PatientsList/index.js';
import DoctorsList from './pages/DoctorsList/DoctorsList.jsx';
import HospitalsList from './pages/HospitalsList/HospitalsList.jsx';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import { getDoctors } from './API/Doctors';
import { getHospitals } from './API/Hospitals';



class App extends Component {


  constructor(props) {
    super(props)
    this.state = {
      admin: {
        firstName: '',
        lastName: '',
        email: '',
      },
     
      patientsData:[],
      doctorsData:[],
      hospitalsData:[],
    }
  }

  // Function to set the Patients Data 
  setPatientsData = (data) => {
    this.setState({ patientsData: data });
  }

// method to update the Data state to an array of patients data  
  requestPatientsData = async () => { 
 
     let  {admin} = this.state;
     let firstName = admin.firstName || localStorage.getItem('Admin');
    
    if(firstName !== ''|| firstName !== undefined){
      getPatients().then( results =>{
            this.setState({ patientsData: results.patients});
          
          }
      );
    } 

}

// Function to set the Doctors Data 
  setDoctorsData = (data) => {
    this.setState({ doctorsData: data });
  }

  // method to update the Data state to an array of patients data  
  requestDoctorsData = async () => {

    let { admin } = this.state;
    let firstName = admin.firstName || localStorage.getItem('Admin');

    if (firstName !== '' || firstName !== undefined) {
          getDoctors().then(results => {
            this.setDoctorsData(results.doctors);
          }
      );
    }
  }



  // Function to set the Hospitals  Data 
  setHospitalsData = (data) => {
    this.setState({ hospitalData: data });
  }

  // method to update the Data state to an array of patients data  
  requestHospitalsData = async () => {

    let { admin } = this.state;
    let firstName = admin.firstName || localStorage.getItem('Admin');

    if (firstName !== '' || firstName !== undefined) {
          getHospitals().then(results => {
            this.setHospitalsData(results.hospitals);
          }
      );
    }
  }


// Function to set the Admin state 
 setAdmin = (admin) => {

      let firstName = JSON.stringify(admin.firstName)
      
      localStorage.setItem('Admin',firstName);

        this.setState({
          admin
        })
  }


  render(){

    const {doctorsData,hospitalsData,patientsData,admin} = this.state;


    let firstName = localStorage.getItem('Admin');

    return (
                  <Router>
                        <Routes>
                          <Route path='/' index element={<Home />} />
                          <Route path='about' index element={<About />} /> 
                          <Route path='dashboard' index element={<DashBoard />} >
                                     {
                                      ((firstName &&
                                        <Route path='dashboard' element={
                                          <AppHome
                                             title={"Patients Analytics"}
                                             dataKey={"Patients Registered"}
                                          />
                                        } />) ||
                                      <Route path='dashboard' element = {   
                                        <AuthMessage />
                                      } />)
                                    }
                                    {
                                      ((firstName &&
                                        <Route path='patients' element={
                                          <PatientsList
                                            data={patientsData}
                                            requestPatientsData={this.requestPatientsData}
                                            admin={admin}
                                          />
                                        } />) ||
                                      <Route path='patients' element = {   
                                        <AuthMessage />
                                      } /> )
                                    }
                                    {
                                      ((firstName &&
                                        <Route path='doctors' element={
                                          <DoctorsList
                                            data={doctorsData}
                                            requestDoctorsData={this.requestDoctorsData}
                                            admin={admin}
                                          />
                                        } />) ||
                                      <Route path='doctors' element={
                                        <AuthMessage />
                                      } /> )
                                    }
                                      {
                                        ((firstName &&
                                          <Route path='hospitals' element={
                                            <HospitalsList
                                              data={hospitalsData}
                                              requestHospitalsData={this.requestHospitalsData}
                                              admin={admin}
                                            />
                                          } />) ||
                                          <Route path='hospitals' element={
                                            <AuthMessage />
                                          } />)
                                      }
                          </Route>
                          <Route path='services' index element={<Services/>} />
                          <Route path='login' element={
                            <Login
                              setAdmin={this.setAdmin}
                              requestPatientsData={this.requestPatientsData}
                            />
                          } />
                          <Route path='register' element={
                            <Register/>
                          }
                          />
                        </Routes>
                  </Router>      
      )
  }
}

export default App;

