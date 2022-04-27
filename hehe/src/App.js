
import './css/App.css';
import { BrowserRouter as Router, Route} from "react-router-dom"; //routes

import Demo from "./home";
import About from "./about";
import Schedule from "./schedule";
import InputSchedule from "./inputSchedule";
import Pushups from "./weightlossexercises/pushups.js";
import Lunges from "./weightlossexercises/lunges.js";
import Stepsups from "./weightlossexercises/stepsups.js";
import Deadlifts from "./weightlossexercises/deadlifts.js";


import Barbell from "./musclegain/barbell.js";
import Pullup from "./musclegain/pullup.js";
import Squat from "./musclegain/squat.js";


function App() {
  return (
    <div className="App">
     
    
       



      <Router>

   
           
           {/* ROUTES LANG SAKALAM */}
           <Route exact path="/" component={Demo} />
           <Route exact path="/about" component={About} />
           <Route exact path="/schedule" component={Schedule} />
           <Route exact path="/inputForm" component={InputSchedule} />

           {/* WEIGHT LOSS EXERCISES */}
           <Route exact path="/pushups" component={Pushups} />
           <Route exact path="/lunges" component={Lunges} />
           <Route exact path="/stepsups" component={Stepsups} />
           <Route exact path="/deadlifts" component={Deadlifts} />

           {/* ENED WEIGHT LOSS EXERCISES */}

           
           {/* MUSCLE GAIN EXERCISES */}
          
           <Route exact path="/squat" component={Squat} />
           <Route exact path="/barbell" component={Barbell} />
           <Route exact path="/pullup" component={Pullup} />

           {/* ENED MUSCLE GAIN EXERCISES */}
   

      
         </Router>
    </div>




  );
}

export default App;
