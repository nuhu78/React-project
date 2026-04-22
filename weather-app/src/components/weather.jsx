import React, { useEffect, useRef, useState } from 'react'
import './weather.css'
import searchicon from '../assets/search.png'
import humidityicon from '../assets/humidity.png'
import windicon from '../assets/wind.png'

function Weather({ weatherData, setWeatherData }) {
  const InputRef = useRef(null)
  const [weatherIcon, setWeatherIcon] = useState('https://cdn.weatherapi.com/weather/128x128/day/113.png')

  const getweatherdata = async(city)=>{
    try {
      const url = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_APP_ID}&q=${city}`
      const response = await fetch(url)
      const data = await response.json()

      if (!response.ok || !data.current || !data.location) {
        throw new Error(data?.error?.message || 'Unable to fetch weather data')
      }

      // Extract icon URL from API response
      const iconUrl = data.current.condition.icon
      setWeatherIcon(`https:${iconUrl}`)

      setWeatherData({
        humidity: data.current.humidity,
        wind: data.current.wind_kph,
        condition: data.current.condition.text,
        feelslike: data.current.feelslike_c,
        temp: data.current.temp_c,
        location: data.location.name,
      })
    } catch (error) {
      console.error('Error fetching weather data:', error)
    }
  }

useEffect(()=>{
  getweatherdata('Dhaka')
},[])

  return (
    <div className='weather'>
      {/*searchbar*/}
      <div className='searchbar'>
        <input ref={InputRef} type="text" placeholder="Enter city name..." />
        <img src={searchicon} alt="Search" className='search-icon' onClick={()=>{getweatherdata(InputRef.current.value)}} />
      </div>

      {/*weather info*/}
      <img src={weatherIcon} alt={weatherData?.condition || 'weather condition'} className='weather-icon' />
      <h1 className='temperature'>{weatherData ? `${weatherData.temp}°C` : 'Loading...'}</h1>
      <h2 className='location'>{weatherData ? weatherData.location : 'Loading...'}</h2>
      <p className='condition'>{weatherData ? weatherData.condition : 'Loading...'}</p>
      <p className='feels-like'>{weatherData ? `Feels like ${weatherData.feelslike}°C` : 'Loading...'}</p>

{/*additional info*/}
      <div className='additional-info'>
        <div className='col'>
          <img src={humidityicon} alt="Humidity" className='small-icon' />
          <p>Humidity</p>
          <p>{weatherData ? `${weatherData.humidity}%` : 'Loading...'}</p>
        </div>
        <div className='col'>
          <img src={windicon} alt="Wind" className='small-icon' />
          <p>Wind</p>
          <p>{weatherData ? `${weatherData.wind} km/h` : 'Loading...'}</p>
        </div>
       
      </div>
    </div>
     
  )
}

export default Weather
