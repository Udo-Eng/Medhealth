//All my API requests 

const getPatients = async () => {
    return fetch('https://medhealth-api-1.herokuapp.com/patients')
    .then(response => response.json())
    .then(result => {
     return  result
    })
    .catch(err => {throw err});
}


const createPatient =  (credentials) => {

    return fetch('https://medhealth-api-1.herokuapp.com/patient/add', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(response => response.json()).then(result => result)
        .catch(err => {throw err});
}



const deletePatient =  (patientId) => {

    return fetch(`https://medhealth-api-1.herokuapp.com/patient/delete/${patientId}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(response => response.json()).then(result => result)
        .catch(err => console.log(err));
}



const updatePatient =  (patientId,credentials) => {

    return fetch(`https://medhealth-api-1.herokuapp.com/patient/update/${patientId}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(response => response.json()).then(result => result)
        .catch(err => {throw err});
}


const createAdmin =  (credentials) => {

    return fetch('https://medhealth-api-1.herokuapp.com/admin/register', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(response => response.json()).then(result => result)
        .catch(err => { throw err});
}



const LogInAdmin =  (credentials) => {

    return fetch('https://medhealth-api-1.herokuapp.com/admin/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(response => response.json()).then(result => result)
        .catch(err =>{ throw err});
}


export  {
    createPatient, deletePatient, updatePatient,createAdmin,LogInAdmin,getPatients
}