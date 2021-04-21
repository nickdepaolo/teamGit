import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Weather from "./weather/Weather";
import NASAEarth from "./NASA/earth";

function App()
{
   
    return(
  <div class="main">
    <div class="mainDiv">
     <h1>Team 3 24-Hour Project</h1>
      <Weather />
      <NASAEarth />
    </div>  
  </div>
      
    
    );

}

export default App;
