import React, {useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Weather from "./weather/Weather"

function App()
{
    const [lon, setLon] = useState("");
    const [lat, setLat] = useState("");
    
    
    const locate = (props) => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });
      updateLocation();
    }
    
    const updateLocation = () => {
      localStorage.setItem('lon', lon);
      localStorage.setItem('lat', `${lat}`);
      console.log(`${lat}`);
    }
    
    locate()
    


      


    return(
      <>
      <h1>sccdcdc</h1>
      <Weather/>
      </>
    );

}


export default App;
