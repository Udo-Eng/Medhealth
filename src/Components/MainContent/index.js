import ImageSource from '../../assets/MediHealth.jpg';
import {Link} from 'react-router-dom';
import './index.css'

const MainContent = () => {

    return (
        <div className="content">
                <h1 id="media-h1"> Welcome to Med-Health</h1>
                <img src={ImageSource} alt="App illustration" />
    
            <div className="inner-content">
                <h1> Welcome to Med-Health App</h1>
                <p>
                    With our Dedicated Staff we offer  the best Hospital Service in Nigeria
                    while don't you Register with us and find out more
                </p>
                <Link to='/register'><button>Register Now</button></Link>
            </div>    
        </div>
    )
}

export default MainContent;