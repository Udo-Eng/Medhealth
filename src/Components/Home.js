import React, { Component } from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
import LandingPage from './LandingPage.js'



class Home extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <LandingPage />
                <Footer />
            </div>
        )
    }
}


export default Home;