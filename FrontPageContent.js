import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './FrontPageContent.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
import Home from './Home.js';



function FrontPageContent(){

    function changeButton(e) {
        e.target.style.background = 'whitesmoke';
        e.target.style.color = 'black';
        e.target.style.border = 'black';
      }

    function revertButton(e) {
        e.target.style.background = 'black';
        e.target.style.color = 'whitesmoke';
        e.target.style.border = 'aliceblue'
    }
        return (
            <>
            
            <div className="wrapper-frontpage">
            
            <NavLink to="/home" >
	          <button className='get-started-button'
             onMouseOver={changeButton}
             onMouseLeave={revertButton}>
              GET STARTED!</button>
            </NavLink>
             
            </div>
            
            </>

        )
}

export default FrontPageContent;