import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './earth.css'
import {Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,} from 'reactstrap';

const baseURL = `https://api.nasa.gov/planetary/earth/imagery`
const key = "dmevjJsnyrLLVUMFitd5EcWZduRtW3dYNYg6lUSR"

const imgStyle = {
    maxHeight: 300,
    maxWidth: 300
  }

const NASAEarth = (event) => {
    
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
   
      
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        })
        

    let url = `${baseURL}?lon=${lon}&lat=${lat}&api_key=${key}`

    return(


        <Card>
          <h2>Current Position</h2>
     <Card>
        <CardImg style={imgStyle} src={url} alt="Location-based Sattelite image" />
        <CardBody>
          <CardTitle tag="h5">NASA Earth Image</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Current Sattelite Image</CardSubtitle>
          <CardText>Most recent Sattelite image from your location Latitude: {lat}, Longitude: {lon} </CardText>
        </CardBody>
      </Card>
    )
}

export default NASAEarth;