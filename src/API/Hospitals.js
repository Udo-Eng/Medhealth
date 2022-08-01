
const getHospitals = async () => {
    return fetch('https://medhealth-api-1.herokuapp.com/Hospitals')
        .then(response => response.json())
        .then(result => {
            return result
        })
        .catch(err => { throw err });
}


const createHospital = (credentials) => {

    return fetch('https://medhealth-api-1.herokuapp.com/Hospital/add', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(response => response.json()).then(result => result)
        .catch(err => { throw err });
}



const deleteHospital = (hospitalId) => {

    return fetch(`https://medhealth-api-1.herokuapp.com/Hospital/delete/${hospitalId}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(response => response.json()).then(result => result)
        .catch(err => { throw err });
}



const updateHospital = (hospitalId, credentials) => {

    return fetch(`https://medhealth-api-1.herokuapp.com/Hospital/update/${hospitalId}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials),
    }).then(response => response.json()).then(result => result)
        .catch(err => { throw err });
}


export {
    getHospitals, createHospital, updateHospital, deleteHospital
}