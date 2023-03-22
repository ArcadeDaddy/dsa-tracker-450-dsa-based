import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <>
        <footer className="bg-dark py-5">
  <div className="container">
    <div className="row">
      
      <div className="col-4 col-sm">
        <NavLink to="/about">About Us</NavLink>
      </div>
      <div className="col-12 col-md">
        
      </div>
    </div>
  </div>
</footer>
        </>
    )
    
}

export default Footer;