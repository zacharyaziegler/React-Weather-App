import { useState } from 'react'
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage"
import InputField from "./components/InputField"
import './App.css'

function App() {
  const [city, setCity] = useState(""); // Input value for city
  const [weather, setWeather] = useState(null); // Store weather data
  const [error, setError] = useState(""); // Store error messages
  const [loading, setLoading] = useState(false);
  const apiKey = import.meta.env.VITE_API_KEY;

  const fetchWeather = async () => {
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );

      if (!response.ok) throw new Error("City not found");

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      {/* InputField Component */}
      <InputField city={city} setCity={setCity} fetchWeather={fetchWeather} />

      {/* Show Loading */}
      {loading && <p className="loading">Fetching weather...</p>}

      {/* Show Error */}
      {error && <ErrorMessage message={error} />}

      {/* Show Weather Card */}
      {weather && <WeatherCard weather={weather}/>}
    </div>
  )
}

export default App
