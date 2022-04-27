import React from "react";
import "../css/style.css";
import "../css/style.css";


import { useState, useEffect } from "react"; //HERE we import useState Hook so we can add state to our functional components.

import Axios from "axios"; //allows us to make GET and POST requests from the browser.

const Stepups = () => {





  return (
    <div>
      {/* ***** Preloader Start ***** */}
      <div id="js-preloader" className="js-preloader">
        <div className="preloader-inner">
          <span className="dot" />
          <div className="dots">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      {/* ***** Preloader End ***** */}

      
      {/* ***** Header Area Start ***** */}
      <header className="header-area header-sticky">
        <div className="container">

          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* ***** Logo Start ***** */}
                <a  className="logo">
             <span style={{color:"black"}}>Can Camp</span>  <em> Fitness</em>
                </a>
                {/* ***** Logo End ***** */}
                {/* ***** Menu Start ***** */}
                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="/" style={{color:"black"}}>
                      Home
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/about" style={{color:"black"}}>About</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/inputForm" style={{color:"black"}}>Create Schedule</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/schedule" style={{color:"black"}}>Schedules</a>
                  </li>
                  <li className="main-button">
                     
        
                  </li>
                 
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
                {/* ***** Menu End ***** */}
              </nav>
              <div className="stickythis">

<div class="btn-group">
  <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Weight Loss
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="/pushups">Pushups</a>
    <a class="dropdown-item" href="/lunges">Lunges</a>
    <a class="dropdown-item" href="/stepsups">Step-ups</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="/deadlifts">Deadlifts</a>
  </div>
</div>

<div class="btn-group ml-4">
  <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Muscle Gain 
  </button>
  <div class="dropdown-menu">
  <a class="dropdown-item" href="/squat">Squat</a>
    <a class="dropdown-item" href="/pushups">Pushups</a>
    <a class="dropdown-item" href="/barbell">Barbell Pullover</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="/deadlifts">Deadlifts</a>
    <a class="dropdown-item" href="/pullup">Pullup</a>
  </div>
</div>
</div>
            </div>
          </div>
        </div>
      </header>
  
  <>
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          
        </ol>
        <center>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-50" src="https://media1.popsugar-assets.com/files/thumbor/_kw35iDCLCQrTb8utFWajYnDgls/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2021/11/19/826/n/1922729/tmp_htaNM5_f4d1f4526d1884d2_GettyImages-513675098.jpg" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-50" src="https://media1.popsugar-assets.com/files/thumbor/616NbLiNsLD5zHqw8IwS6R8NW8k/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/08/18/743/n/1922398/b51dabfe_Chair-Step-Ups.jpg" alt="Second slide" />
          </div>
         
        </div>
        </center>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" style={{backgroundColor:"black"}} aria-hidden="true" />
          <span className="sr-only" >Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" style={{backgroundColor:"black"}}  aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
<center>
    <br></br>
      <div class="card" style={{width:"50%",textAlign:"left"}}>
  <h5 class="card-header" style={{backgroundColor:"black",color:"#edcf3b"}}>Step-Up</h5>
  <div class="card-body">
    <h5 class="card-title">How to Do a Step-Up?

</h5>
    <p >
        
    <b>Before you start, find a step, chair, box, or bench that when you place your foot on it, your knee bends to a 90-degree angle. The weight benches or plyo boxes are often the right height, but a dining room chair can work too for an at-home strength-training session. If this seems too high, start with a lower step or box.</b>
<br></br>
1. To start, place your entire right foot onto the step, chair, box, or bench. Press through your right heel as you step onto the bench, bringing your left foot to meet your left so you are standing on the bench.
<br></br>
2. Return to the starting position by stepping down with the right foot, then the left so both feet are on the floor.
<br></br>
3. Complete 15 steps leading with the left foot, then repeat another 15 steps leading with your left foot. Do three sets.
    </p>
    <br></br>
    <a href="https://www.popsugar.com/fitness/How-Do-Step-Ups-6483533" style={{color:"#edcf3b"}} >More Information here.</a>
  </div>
</div>
</center>
  </>

     
    </div>

    
  );
};

export default Stepups;
