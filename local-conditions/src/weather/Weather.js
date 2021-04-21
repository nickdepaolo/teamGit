import React, {useEffect, useState} from 'react';
import { Container, Col } from 'reactstrap';

const UpdateWeather = (event) => {
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const [temp, setTemp] = useState('');
    
    navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        })
 
let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4666a07e55cbf1c9ad46f74f41509d34`

console.log(lon);
console.log(lat);

const fetchWeather = () => {
       
        fetch(url).then((res) => res.json())
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