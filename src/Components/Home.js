import React, { Component } from 'react'
import Header from './Header/index.js'
import Footer from './Footer/index.js'
import LandingPage from './LandingPage/index.js'



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