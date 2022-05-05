import React from 'react';
import path from '../../assets/spinner.gif';
import './index.css';


function Loading() {
  return (
    <div className="loading-container">
        <img src={path} alt="Loading gif" id="gif"></img>
    </div>
  )
}



export default  Loading 