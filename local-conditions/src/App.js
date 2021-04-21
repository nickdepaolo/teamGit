import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'; 
import UpdateWeather from "./weather/Weather";

import NASAEarth from "./NASA/earth";
import './App.css'

function App()
{
   
    return(

  <div className="main">
    <div className="mainDiv">
     <h1>Today's Local Conditions</h1>
      <NASAEarth />
      <br />
      <UpdateWeather />
    </div>  
  </div>
    )
}
export default App;
