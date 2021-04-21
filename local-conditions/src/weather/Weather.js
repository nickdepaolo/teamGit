import React, {useEffect, useState} from 'react';
import { Container, Col, Row, Button, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
import "./Weather.css"

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
            setTemp(`Temperature: ${(props.main.temp).toFixed(0)}`)
            setHumid(`Humidity: ${props.main.humidity}%`)
            setConditions(`Current forecast: ${props.weather[0].description}`)
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
        <Card className='main'>
            <Col>
               <h1>Weather Conditions</h1>
               <h3>{`${conditions}`}</h3>
               {/* <h3>{`${temp}`}</h3> */}
               
               <h3>{`${temp}`}<Button id="toggle" onClick={changeGrade} type='button'>{`${grade}`}</Button></h3>
               
               <h3>{`${humid}`}</h3>
            </Col>
            <Button type='button' onClick={getApi}>Check the Weather</Button>
        </Card>
    );
}
export default UpdateWeather