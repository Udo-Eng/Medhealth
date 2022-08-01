
const getDoctors = async () => {
    return fetch('https://medhealth-api-1.herokuapp.com/doctors')
        .then(response => response.json())
        .then(result => {
            return result
        })
        .catch(err => { throw err });
}


const createDoctor = (credentials) => {

    return fetch('https://medhealth-api-1.herokuapp.com/doctor/add', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(response => response.json()).then(result => result)
        .catch(err => { throw err });
}



const deleteDoctor = (DoctorId) => {

    return fetch(`https://medhealth-api-1.herokuapp.com/doctor/delete/${DoctorId}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(response => response.json()).then(result => result)
        .catch(err => { throw err });
}



const updateDoctor = (DoctorId,credentials) => {

    return fetch(`https://medhealth-api-1.herokuapp.com/doctor/update/${DoctorId}`,{
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials),
    }).then(response => response.json()).then(result => result)
        .catch(err => { throw err });
}


export {
    getDoctors,createDoctor,updateDoctor,deleteDoctor
}