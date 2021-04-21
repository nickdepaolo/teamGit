import React, {useEffect, useState} from 'react';
import { Card, Col, Button, Row } from 'reactstrap';
import './Weather.css';
const UpdateWeather = () => {
    const [lat, setLat] = useState(false);
    const [lon, setLon] = useState('');
    const [temp, setTemp] = useState('');
    const [humid, setHumid] = useState('')
    const [conditions, setConditions] = useState('')
    const [grade, setGrade] = useState('F')
    const [tempGrade, setTempGrade] = useState('imperial')
    const fetchWeather = () => {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        });
    }
    const getApi =()=>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${tempGrade}&appid=b8e15013886caf192c16ed2b4c284e3d`)
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

    
    const changeGrade = () => {
        if (grade === 'F') {
            setGrade('C')
            setTempGrade('metric')
            
        } else {
            setGrade('F')
            setTempGrade('imperial')
            
        }
    }
    return(
        <Card >
            <Col>
               <h1>Weather</h1>
               <h2>{`${conditions}`}</h2>
               <h2>{`${temp}`}<Button id='toggle' onClick={changeGrade} type='button'>{`${grade}`}</Button></h2>
               <p className='text-muted'>Click check weather to dispay preferred unit</p>

               <h2>{`${humid}`}</h2>
            </Col>
            <Button type='button' onClick={getApi}>Check the Weather</Button>
        </Card>
    );
}
export default UpdateWeather;
