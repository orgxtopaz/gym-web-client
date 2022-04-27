import React from "react";
import "./css/style.css";
import "./css/style.css";

import waves from "./images/line-dec.png";
import video from "./images/gym-video.mp4";
import firstIcon from "./images/features-first-icon.png";
import lineDec from "./images/line-dec.png";
import trainingImage2 from "./images/training-image-02.jpg";
import trainingImage3 from "./images/training-image-03.jpg";
import trainingImage4 from "./images/training-image-04.jpg";
import buildMuscle from "./images/buildmuscle.jpg";

import { useState, useEffect } from "react"; //HERE we import useState Hook so we can add state to our functional components.

import Axios from "axios"; //allows us to make GET and POST requests from the browser.

const Schedule = () => {
  
  /////FETCHING THE OFFICIAL ATTENDANCE DATA SPECIFIC

  const [DisplayList, setDisplayList] = useState([]);
  const isLoaded = [true];

  useEffect(() => {

    if (isLoaded) {

      Axios.get("https://orgxtopaz-gym-server.herokuapp.com/displaySchedule", 

      
      )
    
      
      .then((response) => {
      

        localStorage.setItem("allSched",JSON.stringify(response.data))
     
      })
      .catch((error) => {
        console.error(error)
      })
    }

    let format = (JSON.parse(localStorage.getItem("allSched")));
    console.log(format)
    setDisplayList(format)

  },isLoaded);





  return (
    <div>
    

      
      {/* ***** Header Area Start ***** */}
      <header className="header-area header-sticky">
        <div className="container">

          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* ***** Logo Start ***** */}
                <a  className="logo">
                <span style={{color:"black"}}>Can Camp</span> <em> Fitness</em>
                </a>
                {/* ***** Logo End ***** */}
                {/* ***** Menu Start ***** */}
                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="/" style={{color:"black"}} >
                      Home
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/about" style={{color:"black"}} >About</a>
                  </li>
                  <li className="scroll-to-section">
                  <a href="/inputForm" style={{color:"black"}}>Create Schedule</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#schedule" className="active" >Schedules</a>
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

      <section className="section" id="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading">
                <h2>
                Live <em> 👀 Schedules</em>
                </h2>
                <img src={waves} alt="waves" />
                <p>
                  Participate in our Program with the different workouts available.
                 
                </p>
              </div>
            </div>
        
    
       
          </div>
        </div>
      </section>
      {/* ***** Features Item End ***** */}

      {/* TABLE */}
 <center>
   <table class="table " style={{width:"70%"}}>
  <thead class="thead-dark">
    <tr>
      <th scope="col">Date Schedule</th>
      <th scope="col">Workout Class</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
  {DisplayList.map((s) => { 
    return(
    <tr>
      <th>{s.date}</th>
      <td>{s.workoutClass}</td>
      <td>{s.name}</td>
      <td>{s.email}</td>
    </tr>
  )
  })}
  </tbody>
</table>
</center>
      {/* TABLE DATAS */}
     
     

      <br></br>


    </div>

    
  );
};

export default Schedule;
