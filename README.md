# Weatherly

A responsive weather dashboard for checking current conditions in a searched city. Weatherly uses the free [Open-Meteo API](https://open-meteo.com/) for city lookup and current weather data.

## Features

- Search for a city by name
- View current temperature, apparent temperature, humidity, wind speed, and a weather summary
- Show weather-condition icons based on Open-Meteo weather codes
- Browse a responsive five-card forecast layout
- Use the app on desktop and mobile screens

> **Forecast note:** The five-day forecast cards currently show sample values; they are not yet connected to forecast data from the API.

## Getting started

### Requirements

- Node.js and npm
- An internet connection to retrieve live city and current-weather data

### Install and run

```bash
git clone https://github.com/kozetchanny52-gif/Weather-App.git
cd Weather-App
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal. The dashboard initially loads current conditions for **Pecs**. Enter a city in the search field and submit to look up its weather.

## Data sources

- **City search:** [Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api)
- **Current conditions:** [Open-Meteo Forecast API](https://open-meteo.com/en/docs)

No API key is required for the current app configuration. Weather data is requested directly from the browser.

## Built with

- React
- Vite
- Bootstrap
- Bootstrap Icons
- Open-Meteo

## Project structure

```text
src/
  components/     Header, city search, current weather, and forecast UI
  App.jsx         Weather lookup and application state
  index.css       Global styles
  main.jsx        React entry point
```

## Current limitations

- The forecast cards use placeholder values.
- City searches return the first geocoding match.
- Weather availability depends on network access and the Open-Meteo services.

## License

No license is currently specified for this repository.
