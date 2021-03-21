import { Component, useEffect, } from 'react';
import React, { useState } from 'react';
import styles from './login.css';

function Login() {

    //const [userName, setName] = useState();
    //const [password, setPassword] = useState();
    const [weatherData, setdata] = useState({
        main: {}, weather: {}, wind: {}
    });
    let key = '1b26ae7a8183575397a279943ec74282';
    async function getLocationWeather(location) {
        const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4d7456d3e818f164cca76b93e1a33fc3&units=metric`);
        return result.json();
    }
    useEffect(async () => {
        let locationIcon = document.querySelector('.weather-icon');
        const result = await getLocationWeather("London");
        console.log(result, "json");

        const { icon } = result.weather[0];
        locationIcon.innerHTML = `<img style={{width:54%}} src="http://openweathermap.org/img/w/${icon}.png"></img>`
        var date = new Date(result.dt)
        date = date.toLocaleString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        result.dt = date;
        result.main = result.main;
        result.weather = result.weather;
        console.log(result.weather, "dateis")
        setdata(result)

    }, [])
    //const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?q=Ludhiana&appid=4d7456d3e818f164cca76b93e1a33fc3';
    return (
        <>
            <div className="back-screen">
            <div class="snowflakes" aria-hidden="true">
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
</div>
                <div className="grid-demo">
                    <div className="header">
                        <text className="city-Name">{weatherData.name}</text>
                        <text className="city-Weather">{weatherData.dt}</text>
                    </div>
                    <div class="weather-icon" style={{ width: '50%', marginTop: "13vh", display: "flex", flexDirection: "row-reverse" }}><img className="weather-image" src="icons/unknown.png" /></div>

                    <div className="middle-section">

                        <text className="main-temp">{weatherData.main.temp}&deg;</text>
                        <div className="max_min">

                            <text className="city-Weather">{weatherData.main.temp_max}&#8451;</text>
                            <hr className="city-Weather" style={{ width: "32px" }}></hr>
                            <text className="city-Weather">{weatherData.main.temp_min}&#8451;</text>
                        </div>
                    </div>
                    <div className="bottom-section">
                        <div className="card" ><i className="fa fa-thermometer-half fa-2x"></i>
                            <text>Feels like</text>
                            <text>{weatherData.main.feels_like}&#8451;</text></div>
                        <div className="card" >
                            <i className="fa fa-wind fa-2x"></i>
                            <text>Wind</text>
                            <text>{weatherData.wind.speed} km/h</text>
                        </div>
                        <div className="card" >

                            <i className="fa fa-umbrella fa-2x"></i>
                            <text>Humidity</text>
                            <text>{weatherData.main.humidity}%</text>


                        </div>
                        <div className="card" >
                            <i className="fa fa-tachometer-alt fa-2x"></i>
                            <text>Pressure</text>
                            <text>{weatherData.main.pressure}in</text>
                        </div>
                        <div className="card" ><i className="fa fa-eye-slash fa-2x"></i>
                            <text>Visibility</text>
                            <text>{weatherData.visibility}</text></div>
                        <div className="card" >
                            <i className="fa fa-thermometer-full fa-2x"></i>
                            <text>Temp Max</text>
                            <text>{weatherData.main.temp_max}&#8451;</text>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )




}

export default Login;