import React, { Component } from 'react';
import ProgressBar from './HomeComponents/ProgressBar.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./Home.css"
import TableX from './HomeComponents/Table';
import SearchBar from './HomeComponents/SearchBar';
function Home(){
  return(
    
      <>
      <h1 className='progress-bar'>Progress Bar</h1>
      <ProgressBar/>
      <SearchBar/>
      <TableX/>

      </>
  );
  
}

export default Home;
