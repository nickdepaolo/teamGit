import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Container} from 'reactstrap';

const baseURL = `https://api.nasa.gov/planetary/earth/imagery`
const key = "dmevjJsnyrLLVUMFitd5EcWZduRtW3dYNYg6lUSR"

const NASAEarth = (event) => {
    
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
   
      
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        })
        


let url = `${baseURL}?lon=${lon}&lat=${lat}&api_key=${key}`


    return(
        <Container>
            <img src={url} />
        </Container>
        
);

}

export default NASAEarth;