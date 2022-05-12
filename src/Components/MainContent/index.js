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


/* 
THE ABOUT PAGE CONTENT THANKS FOR THIS WORK 

OUR MISSION 

Our mission is to be a trusted adviser, providing leadership and innovative solutions while demonstrating unwavering commitment to the missions of our clients.

our LeaderShip 
Cards containing People with social media links .

Talk about when the company was founded and other things.





Our Core values 


Integrity
Commit to a high level of ethical demeanor and enactment.

Excellence
Exceed in enabling the client to achieve its mission.

Collaboration
Foster reliable, responsive and collaboration services.

Inclusion
Promote an environment of inclusivity, that embraces many cultures, backgrounds, values and ideas offered by our diverse workforce.


What Can We Do For You?
Ready for responsive, knowledgeable, and practical IT consulting services and value-added services in the DC Metropolitan area? Audley Consulting Group has the experience and know-how to get your project off the ground or to the finish line on time and on budget.

Button Link to the contact page Let’s Talk


The experts at Audley Consulting Group dedicate their passion and work to providing exceptional healthcare - centered IT services to our clients.Our consultants uncover your business needs to tailor an effective information technology solution that is unique to your situation.We proudly serve public and private sector clients in the Washington DC, Maryland, Virginia areas, and beyond.Audley Consulting Group has delivered value - added IT services to businesses and government agencies.We can show how our healthcare IT services can benefit you too.To get started, call us at 301 - 770 - 6464, or visit our website.Follow us on Facebook, Twitter, and LinkedIn.

CONTACT PAGE CONTENT 

General Information
For general information, please email info@audleyconsultinggroup.com

Career Icon
Careers
For information about joining our team, please email recruiting@theaudleygroup.com


Location
Audley Consulting Group
375 Derwood Circle
Rockville, MD 20850

INCLUDE AN IFRAME REFERENCING A LOCATION ON GOOGLE MAPS 


*/

export default MainContent;