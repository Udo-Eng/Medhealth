import React from 'react';
import Header from './Header/index.js';
import Footer from './Footer/index.js';
import MainContent from './MainContent/index.js';



const Home = () => {

    return (
        <div style={divStyle}>
            <Header/>
            <MainContent/>
            <Footer />
        </div>
    )



}

const divStyle = {
    width: '100vw',
    height: '100vh',

}


export default Home;