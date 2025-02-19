import './App.css'
import * as weatherService from './services/weatherServices'
import { useState } from 'react'
import WeatherSearch from './components/WeatherSearch'

const App = () => {

  const [weather, setWeather] = useState({})
  const [loading , setLooding] = useState(true)

// Function to call our service
const fetchData = async (formData) => {
  const data = await weatherService.show(formData)
  setWeather(data)
  setLooding(false)

}


return (
  <>
    <h1>Weather API</h1>
    {/* <button onClick={fetchData}>Fetch weather Data</button> */}
    <WeatherSearch fetchData={fetchData} />
    <hr />
    {loading ? ('Loading...') : (
      <div>
        {<h3>{weather.location.name}</h3>}
        {<img src={weather.current.condition.icon} alt="" />}
      </div>

    )}



  </>
);
}

export default App