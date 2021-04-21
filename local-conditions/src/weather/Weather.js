import React, {useEffect, useState} from 'react';
import { Container, Col, Button } from 'reactstrap';
const UpdateWeather = () => {
    const [lat, setLat] = useState(false);
    const [lon, setLon] = useState('');
    const [temp, setTemp] = useState('');
    const [humid, setHumid] = useState('')
    const [conditions, setConditions] = useState('')
    const fetchWeather = () => {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        });
    }
    const getApi =()=>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=b8e15013886caf192c16ed2b4c284e3d`)
        .then((res) => res.json())
        .then((props) => {
            setTemp(`Temp: ${(props.main.temp).toFixed(0)}`)
            setHumid(`Humidity: ${props.main.humidity}%`)
            setConditions(props.weather[0].main)
            console.log(props);
        })
        .then(() =>{
            console.log(temp)
            console.log(humid)
        })   
    }
    useEffect(() => {
        fetchWeather();
    }, [])
    return(
        <Container >
            <Col>
               <h1>Weather</h1>
               <h2>{`${conditions}`}</h2>
               <h2>{`${temp}`}</h2>
               <h2>{`${humid}`}</h2>
            </Col>
            <Button type='button' onClick={getApi}>Check the Weather</Button>
        </Container>
    );
}
export default UpdateWeather;