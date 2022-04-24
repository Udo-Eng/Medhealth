import ImageSource from '../../assets/MediHealth.jpg';
import './index.css'

const MainContent = ({ setLogIn}) => {



    const onClickHandler = (e) => {
        setLogIn(true);
    }

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
                <button onClick={onClickHandler}>Register Now</button>
            </div>    
        </div>
    )
}

export default MainContent;