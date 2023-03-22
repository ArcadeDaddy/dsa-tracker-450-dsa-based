import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./About.css"

function Aboutpage(){
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
    return(
        <>
        <div className='about'>
            <h2>About Us</h2>
            <h5>DSATracker is a user friendly website used to practice dsa questions topicwise.</h5>
            <h3>Project by</h3>
        <div className='aboutaryan'>
            <h5>M. Aryan Aditya</h5>
            
            <a href="https://www.linkedin.com/in/aryan-aditya-803789239/" target="_blank">
	        <button className='get-started-button'
             onMouseOver={changeButton}
             onMouseLeave={revertButton}
            >Linkedin</button>
            </a>
        </div>
        <div className='aboutpranav'>
            <h5>N. Sai Pranav Reddy</h5>
        <a href="https://www.linkedin.com/in/aryan-aditya-803789239/" target="_blank">
        <button className='get-started-button'
         onMouseOver={changeButton}
         onMouseLeave={revertButton}
        >Linkedin</button>
        </a>
    </div>
    </div>
    </>
    )
}
export default Aboutpage;