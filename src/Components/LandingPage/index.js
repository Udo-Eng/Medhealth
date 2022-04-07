import ImageSource from '../../assets/MediHealth.jpg';
import './index.css'

const  LandingPage = () => {
    return (
        <div className="content">
            
                <img src={ImageSource} alt="App illustration" />
    
            <div className="inner-content">
                <h1> Welcome to Med-Health</h1>
                <p>
                    With our Dedicated Staff we offer  the best Hospital Service in Nigeria
                    while don't you Register with us and find out more
                </p>
                <button>Register Now</button>
            </div>
           
        </div>
    )
}

export default LandingPage;