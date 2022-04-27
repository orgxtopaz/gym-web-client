import React from "react";
import "./css/style.css";
import "./css/style.css";

import waves from "./images/line-dec.png";


const About = () => {



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
                <span style={{color:"black"}}>Can Camp</span><em> Fitness</em>
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
                    <a href="/about" className="active"  style={{color:"black"}}  >About</a>
                  </li>
                  <li className="scroll-to-section">
                  <a href="/inputForm" style={{color:"black"}}>Create Schedule</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/schedule" style={{color:"black"}} >Schedules</a>
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

  

    
    </div>

    
  );
};

export default About;
