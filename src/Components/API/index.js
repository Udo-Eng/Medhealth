//All my API requests 

const getPatients = async () => {
    return fetch('http://localhost:3030/patients')
    .then(response => response.json())
    .then(result => {
     console.log(result);
     return  result
    })
    .catch(err => console.log(err));
}


const createPatient =  (credentials) => {

    return fetch('http://localhost:3030/patient/add', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(response => response.json()).then(result => result)
        .catch(err => console.log(err));
}



const deletePatient =  (patientId) => {

    return fetch(`http://localhost:3030/patient/delete/${patientId}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(response => response.json()).then(result => result)
        .catch(err => console.log(err));
}



const updatePatient =  (patientId,credentials) => {

    return fetch(`http://localhost:3030/patient/update/${patientId}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(response => response.json()).then(result => result)
        .catch(err => console.log(err));
}


const createAdmin =  (credentials) => {

    return fetch('http://localhost:3030/admin/register', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(response => response.json()).then(result => result)
        .catch(err => console.log(err));
}



const LogInAdmin =  (credentials) => {

    return fetch('http://localhost:3030/admin/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(response => response.json()).then(result => result)
        .catch(err => console.log(err));
}


export  {
    createPatient, deletePatient, updatePatient,createAdmin,LogInAdmin,getPatients
}