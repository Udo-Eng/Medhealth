import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home/Home.js';
import About from './pages/About/index.js';
import Services from './pages/Services/index.js';
import { SubmitContactInfo,createPatient, deletePatient, updatePatient, createAdmin, LogInAdmin ,getPatients} from './API/index.js';
import Login from './pages/Login/index.js';
import Register from './pages/Register/index.js';
import AuthMessage from './pages/AuthMessage/index.js';
import PatientsList from './pages/PatientsList/index.js';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';




class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      admin: {
        firstName: '',
        lastName: '',
        email: '',
      },
     
      data:[],
    }
  }

  

// method to update the Data state to an array of patients data  
  requestPatientsData = async () => { 
 
     let  {admin} = this.state;
     let firstName = admin.firstName || localStorage.getItem('Admin');
    
    if(firstName !== ''|| firstName !== undefined){
      getPatients().then(ServerData =>{
            this.setState({ data: ServerData.patients});
          
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


  // Function to create Patient
  createPatientHandler = async (patientData) => {
        try{
                let response =  await createPatient(patientData);

                    if(response.sucess){
                      this.requestPatientsData();
                    }

                      return response;
                
                }catch(err){
                  throw err;
                }
  }
    

// function to update patient
  updatePatientHandler = async (patientId,patientData) => {
      try{
          let response = await updatePatient(patientId , patientData);

          if(response.sucess){
            this.requestPatientsData();
          }

          return response;

        }catch(err){
                throw err
        }
}


  // function to delete Patient
deletePatientHandler = async (patientId) => {

    let response = await deletePatient(patientId);

    if(response.sucess){
      this.setState({data : response.patients});
    }
  }



  render() {

    const { data, admin} = this.state;

    let firstName = localStorage.getItem('Admin')

    return (
                  <Router>
                        <Routes>
                          <Route path='/' index element={<Home />} />
                          <Route path='about' index element={<About />} />
                          <Route path='services' index element={<Services
                            SubmitContactInfo={SubmitContactInfo}
                          />} />
                          <Route path='login' element={
                            <Login
                              createAdmin={createAdmin}
                              LogInAdmin={LogInAdmin}
                              setAdmin={this.setAdmin}
                              requestPatientsData={this.requestPatientsData}

                            />
                          } />
                          {
                            ( firstName &&  
                                <Route path='patients' element={
                                  <PatientsList
                                    data={data}
                                    requestPatientsData={this.requestPatientsData}
                                    admin={admin}
                                    createPatientHandler={this.createPatientHandler}
                                    deletePatientHandler={this.deletePatientHandler}
                                    updatePatientHandler={this.updatePatientHandler}
                                  />
                                } /> )|| 
                                <Route path='patients' element={
                                 <AuthMessage />
                                } />
                     }
                          <Route path='register' element={
                            <Register
                              createAdmin={createAdmin}
                            />
                          }
                          />
                        </Routes>
                  </Router>      
      )
  }
}


export default App;

