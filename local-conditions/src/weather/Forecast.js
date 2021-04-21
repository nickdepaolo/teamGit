import React, {useEffect, useState} from 'react';
import { Container, Col, Button } from 'reactstrap';


const UpdateForecast = () => {
    const [lat, setLat] = useState(false);
    const [lon, setLon] = useState('');
    // const [temp, setTemp] = useState('');
    // const [humid, setHumid] = useState('')
    // const [conditions, setConditions] = useState('')
    const fetchWeather = () => {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        });
    }
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
export default UpdateWeather    