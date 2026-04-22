import React, { useState } from 'react'
import Weather from './components/weather'
import './index.css'

const App = () => {
  const [weatherData, setWeatherData] = useState(false)

  const getBackgroundClass = () => {
    if (!weatherData) return 'app'
    
    const condition = weatherData.condition.toLowerCase()
    
    if (condition.includes('sunny') || condition.includes('clear')) {
      return 'app sunny'
    } else if (condition.includes('rain') || condition.includes('drizzle')) {
      return 'app rainy'
    } else if (condition.includes('cloud')) {
      return 'app cloudy'
    } else if (condition.includes('snow')) {
      return 'app snowy'
    } else if (condition.includes('thunder') || condition.includes('storm')) {
      return 'app stormy'
    } else if (condition.includes('fog') || condition.includes('mist')) {
      return 'app foggy'
    } else if (condition.includes('wind')) {
      return 'app windy'
    }
    return 'app'
  }

  return (
    <div className={getBackgroundClass()}>
      <Weather weatherData={weatherData} setWeatherData={setWeatherData} />
    </div>
  )
}

export default App
