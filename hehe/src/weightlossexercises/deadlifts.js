import React from "react";
import "../css/style.css";
import "../css/style.css";


import { useState, useEffect } from "react"; //HERE we import useState Hook so we can add state to our functional components.

import Axios from "axios"; //allows us to make GET and POST requests from the browser.

const Deadlifts = () => {





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
            <img className="d-block w-50" src="https://cdn.mos.cms.futurecdn.net/gr4n9czpVacSitH3qv4rKE-1024-80.jpg.webp" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-50" src="https://cdn.mos.cms.futurecdn.net/pcDfKtAmMLgLLbXc8sSAkF-970-80.jpg.webp" alt="Second slide" />
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
  <h5 class="card-header" style={{backgroundColor:"black",color:"#edcf3b"}}>Deadlift</h5>
  <div class="card-body">
    <h5 class="card-title">How To Deadlift?


</h5>
    <p >
        
    <b>The conventional deadlift can be broken down into three parts: the setup, the initial pull or drive, and the lockout.</b>
<br></br>
1. Setup: When performing a deadlift, a lifter sets in a position that eccentrically loads the gluteus maximus, gluteus minimus, biceps femoris, semitendinosus and semimembranosus while the muscles of the lumbar contract isometrically in an effort to stabilize the spine.
<br></br>
2. Drive: The next section of the deadlift produces the highest amount of force. By pushing down through their heels while simultaneously pushing up and forward with their hips and maintaining a depressed scapula and a long tense spine, an individual can remain safe during this motion. This is considered the most difficult part of the entire movement due to the amount of work required to drive the bar off the ground initially.
<br></br>
3. Lockout: The finish is the most critical aspect of the motion. This requires being totally erect with a neutral spine and forceful hip extension to engage the muscles of the lumbar spine and abdomen in unison with the glutes.
    </p>
    <br></br>
    <a href="https://en.wikipedia.org/wiki/Deadlift" style={{color:"#edcf3b"}} >More Information here.</a>
  </div>
</div>
</center>
  </>

     
    </div>

    
  );
};

export default Deadlifts;
