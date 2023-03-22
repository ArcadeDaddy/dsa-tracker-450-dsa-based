import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Progressbar.css'

function ProgressBar(){

    let updatedProgress = 75;
    
    return (
      <>
      <div className="progress">
  <div className="progress-bar progress-bar-striped active" role="progressbar" style={{ width: '75%' }} aria-valuenow={updatedProgress} aria-valuemin={0} aria-valuemax={100}>
    {updatedProgress}%
  </div>
</div>

      </>
    );
  
}

export default ProgressBar;


