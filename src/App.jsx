import { useState } from 'react'
import { weatherData } from './data/weatherData.js'
import SearchBar from './components/SearchBar/SearchBar.jsx'
import HeroWidget from './components/HeroWidget/HeroWidget.jsx'
import ForecastWidget from './components/ForecastWidget/ForecastWidget.jsx'
import styles from './App.module.css'

export default function App() {
  const cities = Object.keys(weatherData)
  const [selectedCity, setSelectedCity] = useState(cities[0])
  const data = weatherData[selectedCity]

  return (
    <div className={styles.app}>
      <h1 className={styles.header}>Weather Dashboard</h1>
      <SearchBar
        cities={cities}
        selected={selectedCity}
        onSelect={setSelectedCity}
      />
      <HeroWidget data={data} city={selectedCity} />
      <ForecastWidget forecast={data.forecast} />
    </div>
  )
}
