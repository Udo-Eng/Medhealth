import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home.js'
import { createPatient, deletePatient, updatePatient, createAdmin, LogInAdmin ,getPatients} from './Components/API/index.js';
import Login from './Components/Login/index.js';
import PatientsList from './Components/PatientsList/index.js';



// let dumData = [
//   {
//     firstName: 'Udochukwu',
//     lastName: 'Abazie',
//     phoneNumber: 8045692920,
//     email: 'udo@gmail.com',
//   },
//   {
//     firstName: 'lily',
//     lastName: 'Abazie',
//     phoneNumber: 8045692450,
//     email: 'lily@gmail.com',
//   },
//   {
//     firstName: 'otito',
//     lastName: 'Abazie',
//     phoneNumber: 804569460,
//     email: 'otito@gmail.com',
//   },
//   {
//     firstName: 'anurichi',
//     lastName: 'Abazie',
//     phoneNumber: 8037868236,
//     email: 'anuri@gmail.com',
//   }
// ]

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
      logIn: false,
      register: false,
    }

    this.setAdmin = this.setAdmin.bind(this);
    this.setLogIn = this.setLogIn.bind(this);
    this.setRegister = this.setRegister.bind(this);
  }




// method to update the Data state to an array of patients 
  requestPatientsData = async () => { 
    const {register} = this.state;
    
    if(register){
      getPatients().then(ServerData =>
        this.setState({ data: ServerData.patients })
      );
    } 

}

// Function to set the Admin state 
  setAdmin(admin) {
    this.setState({
      admin
    })
  }

  // Function to set the logIn state for routing 
  setLogIn(logIn) {
    this.setState({
      logIn
    })
  }


 // Function to set the Register state for routing 
  setRegister(register) {
    this.setState({
      register
    })
  }

  // Function to create Patient
  createPatientHandler = async (patientData) => {

     let newData =  await createPatient(patientData);

     this.setState({data: newData});

      return newData;
  }

// function to update patient
  updatePatientHandler = async (patientId,patientData) => {

    let newData = await updatePatient(patientId , patientData);

    this.setState({ data: newData });

  }


  // function to delete Patient
deletePatientHandler = async (patientId) => {

    let newData = await deletePatient(patientId);

    this.setState({ data: newData });

  }

  render() {

    const { logIn, register, data, admin } = this.state;

    if (logIn) {
      return <Login
        createAdmin={createAdmin}
        LogInAdmin={LogInAdmin}
        setAdmin={this.setAdmin}
        setRegister={this.setRegister}
        setLogIn={this.setLogIn}
        requestPatientsData={this.requestPatientsData}
      />
    } else if (register) {
      return <PatientsList
       data={data} 
       admin={admin}
        createPatientHandler={this.createPatientHandler}
        deletePatientHandler={this.deletePatientHandler}
        updatePatientHandler={this.updatePatientHandler}
       />
    } else {
      return (
        <div>
          <Home setLogIn={this.setLogIn}  />
        </div>
      )
    }
  }
}


export default App;

