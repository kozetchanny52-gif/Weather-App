import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from './components/Header.jsx'
import { SearchBar } from './components/SearchBar.jsx'
import { CurrentWeather } from './components/CurrentWeather.jsx'
import { Forecast } from './components/Forecast.jsx'
import { useEffect, useState } from 'react'

const DEFAULT_CITY = 'Pecs'

function App() {
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [query, setQuery] = useState(DEFAULT_CITY)
  const [cityToSearch, setCityToSearch] = useState(DEFAULT_CITY)

  useEffect(() => {
    let cancelled = false

    async function loadWeatherForCity(cityName) {
      const trimmedName = cityName.trim()

      if (!trimmedName || /\d/.test(trimmedName)) {
        setError('Please enter a valid city name.')
        return
      }

      try {
        setError('')

        const cityResponse = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(trimmedName)}&count=1`,
        )

        if (!cityResponse.ok) {
          throw new Error(`City lookup failed: ${cityResponse.status}`)
        }

        const cityData = await cityResponse.json()
        const city = cityData.results?.[0]

        if (!city) {
          throw new Error('City not found. Try another location.')
        }

        const weatherResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&wind_speed_unit=ms`,
        )

        if (!weatherResponse.ok) {
          throw new Error(`Weather request failed: ${weatherResponse.status}`)
        }

        const weather = await weatherResponse.json()

        if (!cancelled) {
          setData({ ...weather.current, city_name: city.name })
        }
      } catch (requestError) {
        if (!cancelled) {
          setError(requestError.message)
        }
      }
    }

    loadWeatherForCity(cityToSearch)

    return () => {
      cancelled = true
    }
  }, [cityToSearch])

  return (
    <div className="app-container min-vh-100 p-3 text-light">
      <Header />
      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={() => setCityToSearch(query)}
      />
      <CurrentWeather
        city_name={data?.city_name ?? ''}
        main_temp={data?.temperature_2m}
        apparent_temp={data?.apparent_temperature}
        code={data?.weather_code}
        windspeed={data?.wind_speed_10m}
        humidity={data?.relative_humidity_2m}
      />
      <Forecast />
      {error ? <p role="alert">{error}</p> : null}
    </div>
  )
}

export default App
