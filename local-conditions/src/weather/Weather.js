import React, {useEffect, useState} from 'react';
import { Container, Col } from 'reactstrap';

const UpdateWeather = (event) => {
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const [temp, setTemp] = useState('');
    
   
    const Locate = () => {
        
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        })
       
       
    }
    
    Locate();

    const fetchWeather = () => {
        
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b8e15013886caf192c16ed2b4c284e3d`, {
            method: 'GET'
           
        }).then((res) => res.json())
        .then((props) => {
            console.log(props)
            setTemp(props.main)
            console.log(`${temp}`)
        })
    }
    useEffect(() => {
        fetchWeather();
    }, [])



    const weatherMapper = (props) => {  console.log(props)
        return(() => {
            return(
                <h1>55555</h1>
            )
        })
    }
  
    
    
    


    return(
        <Container>
            <Col>
               
            </Col>
        </Container>
    );

}

export default UpdateWeather;