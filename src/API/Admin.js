// Function to help create and  login an Admin 

const createAdmin = (credentials) => {

    return fetch('https://medhealth-api-1.herokuapp.com/admin/register', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(response => response.json()).then(result => result)
        .catch(err => { throw err });
}



const LogInAdmin = (credentials) => {

    return fetch('https://medhealth-api-1.herokuapp.com/admin/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(response => response.json()).then(result => result)
        .catch(err => { throw err });
}


export {createAdmin , LogInAdmin}