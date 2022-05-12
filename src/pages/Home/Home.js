import React from 'react';
import './home.css'
import Header from '../../Components/Header/index.js';
import Footer from '../../Components/Footer/index.js';
import MainContent from '../../Components/MainContent/index.js';



const Home = () => {

    return (
        <div>     
               <Header/>
               <div className="pageContent">
                    <MainContent />
                    <Footer />
               </div>              
        </div>
    )
}


export default Home;