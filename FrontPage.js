import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import FrontPageContent from './FrontPageContent';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";


function FrontPage() {
    return(
        <>
        
        <FrontPageContent />
        <Footer/>
        </>
    )
}

export default FrontPage;