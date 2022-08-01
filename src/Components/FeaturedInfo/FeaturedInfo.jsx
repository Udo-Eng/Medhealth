import React from 'react';
import './featuredinfo.css'




const FeaturedInfo = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featureTitle">Patients Registered</span>
                <div className="featuredDataContainer">
                    <span className="featuredAmount">10,570</span>
                </div>
                <div>
                    <span className="featuredsub">compared to last month</span>
                </div>
            </div>
            <div className="featuredItem">
                <span className="featureTitle">Doctor's available</span>
                <div className="featuredDataContainer">
                    <span className="featuredAmount">50</span>
                </div>
                <div>
                    <span className="featuredsub">compared to last month</span>
                </div>
            </div>
            <div className="featuredItem">
                <span className="featureTitle">Hospital's Registered</span>
                <div className="featuredDataContainer">
                    <span className="featuredAmount">10</span>
                </div>
                <div>
                    <span className="featuredsub">compared to last month</span>
                </div>
            </div>
        </div>
    )
}


export default FeaturedInfo;