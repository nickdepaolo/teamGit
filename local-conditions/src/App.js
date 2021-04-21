import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'; 
import UpdateWeather from "./weather/Weather";
import NASAEarth from "./NASA/earth";

function App()
{
   
    return(
  <div>
     <h1>Team 3 24-Hour Project</h1>
      <UpdateWeather />
      <NASAEarth />
  </div>
    )
}
export default App;
