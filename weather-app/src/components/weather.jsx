import React from 'react'
import './weather.css'
import searchicon from '../assets/search.png'
import sunnyicon from '../assets/sunny.png'
import humidityicon from '../assets/humidity.png'
import windicon from '../assets/wind.png'

function Weather() {
  return (
    <div className='weather'>
      {/*searchbar*/}
      <div className='searchbar'>
        <input type="text" placeholder="Enter city name..." />
        <img src={searchicon} alt="Search" className='search-icon' />
      </div>

      {/*weather info*/}
      <img src={sunnyicon} alt="condition" className='weather-icon' />
      <h1 className='temperature'>25°C</h1>
      <h2 className='location'>New York, USA</h2>
      <p className='condition'>Sunny</p>
      <p className='feels-like'>Feels like 28°C</p>

{/*additional info*/}
      <div className='additional-info'>
        <div className='col'>
          <img src={humidityicon} alt="Humidity" className='small-icon' />
          <p>Humidity</p>
          <p>60%</p>
        </div>
        <div className='col'>
          <img src={windicon} alt="Wind" className='small-icon' />
          <p>Wind</p>
          <p>15 km/h</p>
        </div>
       
      </div>
    </div>
     
  )
}

export default Weather
