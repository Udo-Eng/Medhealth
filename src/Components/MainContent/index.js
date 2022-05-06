import ImageSource from '../../assets/MediHealth.jpg';
import {Link} from 'react-router-dom';
import './index.css'

const MainContent = () => {

    return (
     <div>
          <div className="container">
                <div className="row align-items-center justify-content-between g-5 ">
                    <div className="col-md">
                        <h1 id="media-h1"> Welcome to Med-Health</h1>
                        <img src={ImageSource} alt="App illustration" id="content-img" />
                    </div>

                    <div className="col-md ">
                            <div className="inner-content">
                                <h1> Welcome to Med-Health App</h1>
                                <p>
                                    With our Dedicated Staff we offer  the best Hospital Service in Nigeria
                                    while don't you Register with us and find out more
                                </p>
                            
                                <Link to='/register'><button id ="registerButton">Register Now</button></Link>
                            </div>
                        </div>  
                    </div> 
         </div>       
         <div className="container">
                <div className="row align-items-center justify-content-between g-5 ">
                    <div className="col-md ">
                        <div className="inner-content">
                            <h1>Our Mission </h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda laboriosam dolores voluptatibus id porro perspiciatis minima voluptate cum deleniti soluta?
                            </p>
                            <Link to='/register'><button className="btn bg-green">Read More </button></Link>
                        </div>
                    </div>

                    <div className="col-md">
                        <h1 id="media-h1"> Welcome to Med-Health</h1>
                        <img src={ImageSource} alt="App illustration" id="content-img" />
                    </div>
                </div>
            </div> 
        </div>  
    )
}

export default MainContent;