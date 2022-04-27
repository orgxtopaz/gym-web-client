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

const Demo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [workoutClass, setWorkoutClass] = useState("");
  const [date, setDate] = useState("");



  function submitNow(e) {
  
    e.preventDefault();
    if(name=="" || email=="" || workoutClass==""|| date ==""){
      alert("Input All Fields")
    }else{

   

    Axios.post(
      "https://web-gym-server.herokuapp.com/submitSchedule",

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
          window.location.reload();
       
        }
      })
      .catch((err) => {
      
      });
    }
  }

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
              Can Camp <em> Fitness</em>
                </a>
                {/* ***** Logo End ***** */}
                {/* ***** Menu Start ***** */}
                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="#" className="active">
                      Home
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/about">About</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/inputForm">Create Schedule</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/schedule">Schedules</a>
                  </li>
                  <li className="main-button">
                     
        
                  </li>
   
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
                {/* ***** Menu End ***** */}
              </nav>
              <br></br>
              <div className="stickythis">

   {/* DROPDOWN */}
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
     {/* END DROPDOWN */}

            </div>
          </div>
        </div>
      </header>
      {/* ***** Header Area End ***** */}
      {/* ***** Main Banner Area Start ***** */}
      <div className="main-banner" id="top">
        <video autoPlay muted loop id="bg-video">
          <source src={video} type="video/mp4" />
        </video>
        <div className="video-overlay header-text">
          <div className="caption">
            <h6>work harder, get stronger</h6>
            <h2>
              easy with our <em>gym</em>
            </h2>
            <div className="main-button scroll-to-section">
              <a href="#features">Become a member</a>
            </div>
          </div>
        </div>
      </div>
      {/* ***** Main Banner Area End ***** */}
      {/* ***** Features Item Start ***** */}
      <section className="section" id="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading">
                <h2>
                Workouts <em> 💲Monthly payment</em>
                </h2>
                <img src={waves} alt="waves" />
                <p>
                  Participate in our Program with the different workouts available.
                 
                </p>
              </div>
            </div>
            <section>
        <div className="container py-5">
          <div className="row text-center align-items-end">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="bg-white p-5 rounded-lg shadow">
                <h1 className="h6 text-uppercase font-weight-bold mb-4">Weight Loss Class</h1>
                <h2 className="h1 font-weight-bold">$190<span className="text-small font-weight-normal ml-2">/ month</span></h2>
                <div className="custom-separator my-4 mx-auto bg-warning" />
                <ul className="list-unstyled my-5 text-small text-left">
                  <li className="mb-3"> <i className="fa fa-check mr-2 text-primary" /> Kettlebell swings</li>
                  <li className="mb-3"> <i className="fa fa-check mr-2 text-primary" /> Pushups</li>
                  <li className="mb-3"> <i className="fa fa-check mr-2 text-primary" /> Lunges</li>
                  <li className="mb-3 "> <i className="fa fa-check mr-2 text-primary" /> Step-ups</li>
                  <li className="mb-3 "> <i className="fa fa-times mr-2" /> Deadlifts</li>
                </ul> <a href="#" className="btn btn-warning btn-block p-2 shadow rounded-pill">Subscribe</a>
              </div>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="bg-white p-5 rounded-lg shadow">
                <h1 className="h6 text-uppercase font-weight-bold mb-4">Muscle Gain Class</h1>
                <h2 className="h1 font-weight-bold">$270<span className="text-small font-weight-normal ml-2">/ month</span></h2>
                <div className="custom-separator my-4 mx-auto bg-warning" />
                <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
                  <li className="mb-3"> <i className="fa fa-check mr-2 text-primary" /> Squat</li>
                  <li className="mb-3"> <i className="fa fa-check mr-2 text-primary" /> Pushups</li>
                  <li className="mb-3"> <i className="fa fa-check mr-2 text-primary" /> Barbell Pullover</li>
                  <li className="mb-3"> <i className="fa fa-check mr-2 text-primary" /> Deadlift</li>
                  <li className="mb-3"> <i className="fa fa-check mr-2 text-primary" /> Pullup</li>
                </ul> <a href="#" className="btn btn-warning btn-block p-2 shadow rounded-pill">Subscribe</a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-white p-5 rounded-lg shadow">
                <h1 className="h6 text-uppercase font-weight-bold mb-4">FOLLOW UP CONSULTATION</h1>
                <h2 className="h1 font-weight-bold">$70<span className="text-small font-weight-normal ml-2">/ month</span></h2>
                <div className="custom-separator my-4 mx-auto bg-warning" />
                <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
                  <li className="mb-3"> <i className="fa fa-check mr-2 text-primary" /> Recommend Exercises </li>
                  <li className="mb-3"> <i className="fa fa-check mr-2 text-primary" /> Growth trace </li>
                  <li className="mb-3"> <i className="fa fa-check mr-2 text-primary" /> Motivation</li>
                  <li className="mb-3"> <i className="fa fa-check mr-2 text-primary" /> Exercises Tips</li>
                  <li className="mb-3"> <i className="fa fa-check mr-2 text-primary" /> Goal Orient</li>
                </ul> <a href="#" className="btn btn-warning btn-block p-2 shadow rounded-pill">Subscribe</a>
              </div>
            </div>
          </div>
        </div>
      </section>
       
          </div>
        </div>
      </section>
      {/* ***** Features Item End ***** */}
      {/* ***** Call to Action Start ***** */}
      <section className="section" id="call-to-action">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="cta-content">
                <h2>
                  Don’t <em>think</em>, begin <em>today</em>!
                </h2>
                <p>
                Experts define physical fitness as “one's ability to execute daily activities with optimal performance,
                endurance, and strength with the management of disease, fatigue, and stress and reduced sedentary behavior.”
                </p>
                <div className="main-button scroll-to-section">
                  <a href="#features">Become a member</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Call to Action End ***** */}
      {/* ***** Our Classes Start ***** */}
      <section className="section" id="our-classes">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading">
                <h2>
                  Our <em>Exercise Classes</em>
                </h2>
                <img src={lineDec} alt="" />
                <p>
                  Regular physical activity can improve your muscle strength and
                  boost your endurance. Exercise delivers oxygen and nutrients
                  to your tissues and helps your cardiovascular system work more
                  efficiently.
                </p>
              </div>
            </div>
          </div>
          <div className="row" id="tabs">
            <div className="col-lg-4">
              <ul>
                <li>
                  <a href="#tabs-1">
                    <img src="assets/images/tabs-first-icon.png" alt="" />
                    Weight loss exercises
                  </a>
                </li>
                <li>
                  <a href="#tabs-2">
                    <img src="assets/images/tabs-first-icon.png" alt="" />
                    Muscle gain exercises
                  </a>
                </li>
                <li>
                  <a href="#tabs-3">
                    <img src="assets/images/tabs-first-icon.png" alt="" />
                    Maintainance
                  </a>
                </li>
                <li>
                  <a href="#tabs-4">
                    <img src="assets/images/tabs-first-icon.png" alt="" />
                    Food recommended
                  </a>
                </li>
                <div className="main-rounded-button">
                <a className="btn " href="#" data-toggle="modal" data-target=".login-register-form">
            Schedule Now
          </a>                </div>
              </ul>
            </div>
            <div className="col-lg-8">
              <section className="tabs-content">
                <article id="tabs-1">
                  <img src={trainingImage4} alt="First Class" />
                  <h4>Weight loss exercises</h4>
                  <p>
                    Losing weight is easier said than done, and there isn’t a
                    magic pill to take off pounds. Instead, you have to burn
                    more calories than you take in. This involves a healthy
                    diet, as well as a combination of cardio and strength
                    training.
                    <br></br>
                    1. Kettlebell swings <br></br>
                    2. Pushups<br></br>
                    3. Lunges<br></br>
                    4. Step-ups<br></br>
                    4. Deadlifts<br></br>
                    <a href="https://www.healthline.com/health/exercise-fitness/best-exercise-to-lose-weight#other-ideas">
                    Click for more Information about the Workouts{" "}
                    </a>
                  </p>
                  <div className="main-button">
                    <a href="#schedule">View Schedule</a>
                  </div>
                </article>
                <article id="tabs-2">
                  <img src={buildMuscle} alt="Second Training" />
                  <h4>Muscle gain exercises</h4>
                  <p>
                    Staying active is vital for overall health, and it is also
                    the best way to build skeletal muscle. Skeletal muscle is
                    one of the three major muscle types. Tendons attach these
                    muscles, which contract and cause movement, to bones.
                    <br></br>
                    1. Squat
                    <br></br>
                    2. Pushups<br></br>
                    3. Barbell Pullover
                    <br></br>
                    4. Deadlift
                    <br></br>
                    5. Pullup<br></br>

                    <a href="https://www.muscleandfitness.com/workouts/workout-tips/top-10-muscle-and-strength-building-moves/">
                      Click for more Information about the Workouts{" "}
                    </a>
                  </p>
                  <div className="main-button">
                    <a href="#schedule">View Schedule</a>
                  </div>
                </article>
                <article id="tabs-3">
                  <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fitness-girl-with-sport-in-ear-wireless-headphones-royalty-free-image-1588609170.jpg?crop=1xw:0.74982xh;center,top&resize=1200:*" alt="Third Class" />
                  <h4>How do you maintain your exercise?</h4>
                  <p>
                  If you want to start your journey to having a better body to feel great, here are some tips:
                 <br></br>
                 <br></br>
                 💪Exercise Daily. Exercise daily for at least an hour.<br></br>
                 🥗Eat the Right Foods and Portion Each Meal.<br></br>
                 ⏳Keep Track of Calories and Food Intake Per Day.<br></br>
                 💤Be Sure to Get Sleep.<br></br>
                 🙌Stay Motivated.<br></br>
                  </p>
                  <div className="main-button">
                    <a href="#schedule">View Schedule</a>
                  </div>
                </article>
                <article id="tabs-4">
                  <img src="https://www.heart.org/-/media/AHA/H4GM/Article-Images/FoodAsFuel.jpg" alt="Fourth Training" />
                  <h4>Food Recommended</h4>
                  <p>
                  Eating a healthy balanced diet accompanied by regular exercise is essential in maintaining physical and mental health and well-being. Not only are these effective in preventing excess weight gain or in maintaining weight loss, but healthier lifestyles are also associated with improved sleep and mood.

                  <br></br>
                  <span style={{fontSize:"1.4em",color:"black"}}><b> Pack protein into your snacks and meals</b></span>
                  <br></br>
                  Protein is also essential for building and repairing muscles, helping you enjoy the benefits of your workout. It can be a source of energy when carbohydrates are in short supply, but it’s not a major source of fuel during exercise.

                  <br></br>

                  <span style={{fontSize:"1.3em",color:"black"}}><b>Protein can come from:</b></span><br></br>

                  🍗Poultry, such as chicken and turkey<br></br>
                  🥩Red meat, such as beef and lamb<br></br>
                  🐟Fish, such as salmon and tuna<br></br>
                  🥛Dairy, such as milk and yogurt<br></br>
                  🥜Legumes, such as beans and lentils<br></br>
                  🥚Eggs


                  </p>
                
                </article>
              </section>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Our Classes End ***** */}

   {/* ***** Testimonials Starts ***** */}
   <section className="section" id="trainers">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading">
                <h2>Tips for<em> beginners</em></h2>
                <img src="assets/images/line-dec.png" alt="" />
                <p>A fitness professional can advise people on the correct form to use when lifting weights and using other gym equipment. Using the right technique reduces the risk of injury and enhances the potential to build muscle.</p>
              </div>
            </div>
          </div>
         
        </div>
      </section>
      <br></br>

      <section className="section" id="schedule">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading dark-bg">
                <h2>
                  Classes <em>Schedule</em>
                </h2>
                <img src={lineDec} alt="" />
                <p>
                  Details below are the days SCHEDULES on different workouts.
                  
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="filters">
                <ul className="schedule-filter">
                  <li className="active" data-tsfilter="monday">
                    Monday
                  </li>
                  <li data-tsfilter="tuesday">Tuesday</li>
                  <li data-tsfilter="wednesday">Wednesday</li>
                  <li data-tsfilter="thursday">Thursday</li>
                  <li data-tsfilter="friday">Friday</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-10 offset-lg-1">
              <div className="schedule-table filtering">
                <table>
                  <tbody>
                    <tr>
                      <td className="day-time">Fitness Class</td>
                      <td className="monday ts-item show" data-tsmeta="monday">
                        10:00AM - 11:30AM
                      </td>
                      <td className="tuesday ts-item" data-tsmeta="tuesday">
                        2:00PM - 3:30PM
                      </td>
                    </tr>
                    <tr>
                      <td className="day-time">Weight loss exercises Class
</td>
                      <td className="friday ts-item" data-tsmeta="friday">
                        10:00AM - 11:30AM
                      </td>
                      <td
                        className="thursday friday ts-item"
                        data-tsmeta="thursday"
                      >
                        2:00PM - 3:30PM
                      </td>
                    </tr>
                    <tr>
                      <td className="day-time">Muscle gain exercises Class
</td>
                      <td className="tuesday ts-item" data-tsmeta="tuesday">
                        10:00AM - 11:30AM
                      </td>
                      <td className="monday ts-item show" data-tsmeta="monday">
                        2:00PM - 3:30PM
                      </td>
                    </tr>
                    <tr>
                      <td className="day-time">Consultation/Motivational  Class</td>
                      <td className="wednesday ts-item" data-tsmeta="wednesday">
                        10:00AM - 11:30AM
                      </td>
                      <td className="friday ts-item" data-tsmeta="friday">
                        2:00PM - 3:30PM
                      </td>
                    </tr>
                    <tr>
                      <td className="day-time">Advanced Training</td>
                      <td className="thursday ts-item" data-tsmeta="thursday">
                        10:00AM - 11:30AM
                      </td>
                      <td className="wednesday ts-item" data-tsmeta="wednesday">
                        2:00PM - 3:30PM
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>

    
  );
};

export default Demo;
