import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./Header.css";

function Header() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{backgroundColor: "black"}}>
  <a className="navbar-brand mx-auto d-block text-center order-0 order-md-0 w-25" href="#" style={{color: "whitesmoke"}} >DSA PRACTICE TRACKER</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
</nav>
</>
    )
}

export default Header;