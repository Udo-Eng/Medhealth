import ImageSource from '../assets/MediHealth.jpg'

const  LandingPage = () => {
    return (
        <div className="container">
            <div>

            </div>
            <img src={ImageSource}  alt="App illustration"/>
            <h1>Hello Welcome to MedHealth</h1>
            <p>
                    We are a health solutions provider with a mission to be the leading provider of 
                    Health Tech Services in Nigeria and Africa at Large 
                    Why don't you Register  and find out more 
            </p>
            <button>Login</button>
        </div>
    )
}

export default LandingPage;