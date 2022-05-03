import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home.js';
import { createPatient, deletePatient, updatePatient, createAdmin, LogInAdmin ,getPatients} from './Components/API/index.js';
import Login from './Components/Login/index.js';
import Register from './Components/Register/index.js';
import PatientsList from './Components/PatientsList/index.js';
import { Routes, Route,BrowserRouter as Router } from 'react-router-dom';




// Working with HOC in React 
/* 
const withConditionalFeedback =
  ({ loadingFeedback, noDataFeedback, dataEmptyFeedback }) =>
    (Component) =>
      (props) => {
        if (props.isLoading)
          return <div>{loadingFeedback || 'Loading data.'}</div>;

        if (!props.data)
          return <div>{noDataFeedback || 'No data loaded yet.'}</div>;

        if (!props.data.length)
          return <div>{dataEmptyFeedback || 'Data is empty.'}</div>;

        return <Component {...props} />;
      };
 */

      // A SAMPLE EXAMPLE OF HOC IN REACT 

/* 
const TodoList = withConditionalFeedback({
  loadingFeedback: 'Loading Todos.',
  noDataFeedback: 'No Todos loaded yet.',
  dataEmptyFeedback: 'Todos are empty.',
})(BaseTodoList); */

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

    this.setAdmin = this.setAdmin.bind(this);
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


  // Function to create Patient
  createPatientHandler = async (patientData) => {

     let response =  await createPatient(patientData);

     if(response.sucess){
       this.requestPatientsData();
     }

      return response;
  }

// function to update patient
  updatePatientHandler = async (patientId,patientData) => {

    let response = await updatePatient(patientId , patientData);

     if(response.sucess){
       this.requestPatientsData();
     }

     return response;

  }


  // function to delete Patient
deletePatientHandler = async (patientId) => {

    let response = await deletePatient(patientId);

    if(response.sucess){
      this.setState({data : response.patients});
    }
  }

  render() {

    const { data, admin } = this.state;

    console.log("Data :",data);
    console.log("admin :",admin);

    return (
                  <Router>
                        <Routes>
                          <Route path='/' index element={<Home />} />
                          <Route path='login' element={
                            <Login
                              createAdmin={createAdmin}
                              LogInAdmin={LogInAdmin}
                              setAdmin={this.setAdmin}
                              requestPatientsData={this.requestPatientsData}

                            />
                          } />
                          <Route path='patients' element={
                            <PatientsList
                              data={data}
                              admin={admin}
                              createPatientHandler={this.createPatientHandler}
                              deletePatientHandler={this.deletePatientHandler}
                              updatePatientHandler={this.updatePatientHandler}
                            />
                          } />
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

