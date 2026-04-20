import React from 'react'
import './weather.css'
import searchicon from '../assets/search.png'

function Weather() {
  return (
    <div className='weather'>
      {/*searchbar*/}
      <div className='searchbar'>
        <input type="text" placeholder="Enter city name..." />
        <img src={searchicon} alt="Search" className='search-icon' />
      </div>
    </div>
  )
}

export default Weather
