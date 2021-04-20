import React, {useState} from 'react';

const UpdateWeather = (event) => {
    const [lat, setLat] = useState(localStorage.getItem('lat'));
    const [lon, setLon] = useState(localStorage.getItem('lon'));
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat={${lat}}&lon={${lon}}&appid={b8e15013886caf192c16ed2b4c284e3d}`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then((res) => res.json())
    


    return(
        <>
        <h1>weather</h1>
        </>
    );

}

export default UpdateWeather;