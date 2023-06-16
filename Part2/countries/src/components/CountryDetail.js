import React from 'react';

const CountryDetail = ({name, capital, population, flag, weather}) => {
    return(
    <>
        <h1>{name}</h1>
        <img src={flag.png} alt={flag.alt}></img>
        <p>Capital: {capital.map(item => item)}</p>
        <p>Population: {population}</p>
        <p>Temprature: {weather.main.temp} degree Celsius</p>
        <h4>Weather: {weather.weather[0].main}</h4>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='weather-now'/>
        <p>{weather.weather[0].description}</p>
    </>
    );
}

export default CountryDetail;