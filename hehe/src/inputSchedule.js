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
import { useHistory } from 'react-router-dom'; // version 5.2.0

import Axios from "axios"; //allows us to make GET and POST requests from the browser.

const InputSchedule = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [workoutClass, setWorkoutClass] = useState("");
  const [date, setDate] = useState("");


let redirect = useHistory()
  function submitNow(e) {
  
    e.preventDefault();
    if(name=="" || email=="" || workoutClass==""|| date ==""){
      alert("Input All Fields")
    }else{

   

    Axios.post(
      "https://orgxtopaz-gym-server.herokuapp.com/submitSchedule",

      {
        name: name,
        email: email,
        workoutClass: workoutClass,
        date: date,
      }
    )
      .then((res) => {
        if (res.data.message) {
          alert("Successfully Scheduled");
          redirect.push("/schedule")   
          window.location.reload()    
        }
      })
      .catch((err) => {
      
      });
    }
  }

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
                    <a href="#"className="active" >Create Schedule </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/schedule"  style={{color:"black"}}>Schedules</a>
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
                Create  <em> 🖊️ Schedule</em>
                </h2>
                <img src={waves} alt="waves" />
                <p>
                  Create schedule about the specific class you want to attend, and see the reflected details in the Schedule Page.
                 
                </p>
              </div>
            </div>
        
    
       
          </div>
        </div>
             {/* FORM */}
      <div className="row">
       
       {/* Schedule MODAL FORM*/}
       <div  role="dialog">
         <div className="modal-dialog modal-sm">
           <div className="modal-content">

                   <div id="registration-form">
                   <form action="/">
                     <div className="form-group"  style={{paddingLeft:"17%"}}>
                       <br></br>
                       <label htmlFor="name" style={{marginRight:"70%"}}>Full Name</label>
                       <input type="text" onChange={(event) => {
                               setName(event.target.value);
                             }} required className="form-control" id="name" placeholder="Enter your name" name="name" style={{width:"75%",paddingLeft:"10%"}} />
                     </div>

                     <div className="form-group" style={{paddingLeft:"17%"}}>
                       <br></br>
                       <label htmlFor="name" style={{marginRight:"84%"}}>Email</label>
                       <input type="email" onChange={(event) => {
                               setEmail(event.target.value);
                             }} required className="form-control" id="name" placeholder="Enter your Email" name="name"style={{width:"75%",paddingLeft:"10%"}} />
                     </div>
                     <div className="form-group" style={{paddingLeft:"17%"}}>
                       <br></br>
                       <select className="form-select" onChange={(event) => {
                               setWorkoutClass(event.target.value);
                             }} required aria-label="Default select example" style={{width:"75%",paddingLeft:"10%"}}>
                     <option selected>Workout Class</option>
                     <option value="Weight Loss Exercises Class">Weight Loss Exercises Class	</option>
                     <option value="Muscle Gain Exercises Class">Muscle Gain Exercises Class	</option>
                     <option value="Consultation/Motivational Class">Consultation/Motivational Class	</option>
                   </select>                        </div>

                     <div className="form-group" style={{paddingLeft:"17%"}}>
                       <br></br>
                       <label htmlFor="name" style={{marginRight:"54%"}}>Date Scheduled</label>
                       <input required type="date" onChange={(event) => {
                               setDate(event.target.value);
                             }} className="form-control" id="name" name="name" style={{width:"75%",paddingLeft:"10%"}} />
                     </div>
                   
                     <button type="submit" onClick={submitNow} className="btn btn-warning">Schedule now 💪</button>
                     <br></br>
                   </form>
                   <br></br>
                 </div>
                                   
           </div>
         </div>
       </div>
     </div>
      </section>
  
 
     

      <br></br>

  

    
    </div>

    
  );
};

export default InputSchedule;
