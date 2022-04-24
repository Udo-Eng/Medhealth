import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home.js'
import { createPatient, deletePatient, updatePatient, createAdmin, LogInAdmin ,getPatients} from './Components/API/index.js';
import Login from './Components/Login/index.js';
import PatientsList from './Components/PatientsList/index.js';



let dumData = [
  {
    firstName: 'Udochukwu',
    lastName: 'Abazie',
    phoneNumber: 8045692920,
    email: 'udo@gmail.com',
  },
  {
    firstName: 'lily',
    lastName: 'Abazie',
    phoneNumber: 8045692450,
    email: 'lily@gmail.com',
  },
  {
    firstName: 'otito',
    lastName: 'Abazie',
    phoneNumber: 804569460,
    email: 'otito@gmail.com',
  },
  {
    firstName: 'anurichi',
    lastName: 'Abazie',
    phoneNumber: 8037868236,
    email: 'anuri@gmail.com',
  }
]

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      admin: {
        firstName: '',
        lastName: '',
        email: '',
      },
      data: dumData,
      logIn: false,
      register: false,
    }

    this.setAdmin = this.setAdmin.bind(this);
    this.setLogIn = this.setLogIn.bind(this);
    this.setRegister = this.setRegister.bind(this);
  }


//   componentDidMount() {

//     this.setState({ data: dumData });

//   }


//   componentDidUpdate(prevState){

// // Perform the application Logic 
//     if(prevState.register){
//      let  ServerData =  getPatients();

//       this.setState({ data: ServerData });
//     }
    
//   }

  setAdmin(admin) {
    this.setState({
      admin
    })
  }

  setLogIn(logIn) {
    this.setState({
      logIn
    })
  }
  setRegister(register) {
    this.setState({
      register
    })
  }

  render() {

    const { logIn, register, data, admin } = this.state;



    if (logIn) {
      return <Login
        createAdmin={createAdmin}
        LogInAdmin={LogInAdmin}
        setAdmin={this.setAdmin}
        setRegister={this.setRegister}
      />
    } else if (true) {
      return <PatientsList
       data={data} 
       admin={admin}
      //  createPatient={createPatient}
      //  deletePatient={deletePatient}
      //  updatePatient={updatePatient}
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

