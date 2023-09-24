import React from 'react'
import Navbar from './Navbar'
import { useState, useEffect } from 'react'
import axios from 'axios';




export default function Home() {
    const [location, setLocation] = useState({});
    const [WeatherData, setWeatherData] = useState({})
    const [Loading, setLoading] = useState(true);
    useEffect(() => {
        // get user location
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
        })
    }, []);

    useEffect(() => {
        //fetch weather data when location changes
        if (location.latitude && location.longitude) {
            const apiKey = '65a92284343cf09f9771ab032dc23f95';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=Metric&appid=65a92284343cf09f9771ab032dc23f95`;

            axios
                .get(apiUrl)
                .then(response => {
                    setWeatherData(response.data);
                    setLoading(false)
                })
        }

    }, [location])
    return (
        <>

            <div className='video-container absolute w-[100vw] h-[100%] overflow-hidden'>
                <video src="./video/weather.mp4" autoPlay muted loop >
                </video>
            </div>
            <div className='relative'>
                <div><Navbar /></div>

                <div className='weather-app'>
                    <h1>Weather App</h1>
                    {Loading && <p>Loading...</p>}
                    {WeatherData.main && (
                        <div className="weather-info">
                            <h1> Location: {WeatherData.name}</h1>
                            <p>Temperature: {WeatherData.main.temp}°C</p>
                            <p>Weather: {WeatherData.weather[0].description}</p>
                        </div>
                    )}
                </div>
            </div>

        </>
    )
}
