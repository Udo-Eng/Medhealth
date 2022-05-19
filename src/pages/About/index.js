import React from 'react';
import './index.css';
import Header from '../../Components/Header/index.js';
import Footer from '../../Components/Footer/index.js';
import {Link} from 'react-router-dom';
import ImageSource from '../../assets/Health-Professional-Image.jpg';



const About = () => {

    return (
        <div>
            <Header />
                <div className="aboutContent">
                    <div className="PageAboutContent"  >
                        <div className="innerAboutContent">
                            <h3 className="aboutContentTitle"> About Us</h3>
                            <p className="aboutContentText">
                                We are a team of experts with the Goal of digitalizing the Health sector in Africa and the world at Large using Tecchnology and Ai . with our  Dedicated staff we offer the best hospital IT infrastruce service  in Nigeria
                                while don't you Register with us and find out more .
                            </p>
                            <Link to='/register'><button className="aboutPageBtn">Register </button></Link>
                        </div>
                        <div className="aboutPageImg"  id="aboutImg">
                            <img src={ImageSource} alt="App illustration" className="pageMainImg" />
                        </div>
                    </div>
                <h3 className="aboutContentTitle">Our Team</h3>
                <div className="teamMemberContent">
                        <div className="teamMember">
                            <img src={ImageSource} alt="team member" className="teamMemberImg" />
                            <span className="teamMemberName">Ikedi Chibueze</span>
                            <span className="teamMemberRole">CEO</span>
                        </div>
                        <div className="teamMember">
                            <img src={ImageSource} alt="team member" className="teamMemberImg" />
                                <span className="teamMemberName">Abazie Udochukwu </span>
                                <span className="teamMemberRole">CTO</span>
                        </div>
                        <div className="teamMember">
                            <img src={ImageSource} alt="team member" className="teamMemberImg" />
                            <span className="teamMemberName">Ayo Daniel</span>
                            <span className="teamMemberRole">Product Manager</span>
                        </div>
                    <div className="teamMember">
                        <img src={ImageSource} alt="team member" className="teamMemberImg" />
                        <span className="teamMemberName">Rita George</span>
                        <span className="teamMemberRole">Financial manager</span>
                    </div>
                    </div>     
            </div>
             <Footer />
        </div>
    )
}


export default About;