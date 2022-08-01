// API associated with the Home page 

const SubmitContactInfo = (credentials) => {
    return fetch('https://medhealth-api-1.herokuapp.com/contact', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(response => response.json()).then(result => result)
        .catch(err => { throw err });
}


export { SubmitContactInfo};