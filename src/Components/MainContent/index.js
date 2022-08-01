import ImageSource from '../../assets/MediHealth.jpg';
import ImagePath from '../../assets/Interactive-dashboards.jpg';
import {Link} from 'react-router-dom';
import './index.css'

const MainContent = () => {

            return (
                <div className="pageMain">
                    <div className="PageMainContent">
                        <div className="pageMainImg">
                            <img src={ImagePath} alt="App illustration" className="pageMainImg" id="mainOtherImg" />
                        </div>
                            
                                <div className="innerContent">
                                    <h3 className="innerContentTitle"> Welcome to Med-Health</h3> 
                                     <p className="innerContentText">
                                        With our Dedicated staff we offer the best hospital IT infrastruce service  in Nigeria
                                        while don't you Register with us and find out more .
                                    </p>
                                    <Link to='/register'><button className="mainPageButton" >Register</button></Link>
                                </div>    
                        </div>       
                    <div className="PageMainContent"  >
                        <div className="innerContent" id="otherContent">
                            <h3 className="innerContentTitle"> Welcome to Med-Health</h3>
                            <p className="innerContentText">
                                With our Dedicated staff we offer the best hospital IT infrastruce service  in Nigeria
                                while don't you Register with us and find out more .
                            </p>
                            <Link to='/about'><button className="mainPageAbout">Read More</button></Link>
                        </div>
                        <div className="pageMainImg" id="mainImg">
                            <img  src={ImageSource} alt="App illustration" className="pageMainImg" />
                        </div>
                    </div>       
                </div>  
            )
}


export default MainContent;