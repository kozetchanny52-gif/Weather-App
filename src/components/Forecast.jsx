function getWeatherInfo(id) {
        if (id === 0) return "bi-sun-fill";
        if (id <= 2) return  "bi-cloud-sun-fill";
        if (id === 3) return  "bi-cloud-fill";
        if (id <= 48) return "bi-cloud-fog2-fill";
        if (id <= 67 || (id >= 80 && id <= 82)) return  "bi-cloud-rain-fill";
        if (id <= 86) return "bi-snow";
        if (id >= 95) return "bi-cloud-lightning-rain-fill";
        return  "bi-cloud";
}
export function Forecast({
  forecast = [],
  forecast_max_temps = [],
  forecast_min_temps = [],
  forecast_weather_conditions = [],
}) {
  return (
    <section className="forecast-section mt-3" aria-labelledby="forecast-heading">
      <div className="d-flex align-items-center justify-content-between mb-2">
        <h2 id="forecast-heading" className="h5 mb-0 text-light">5-Day Forecast</h2>
        <span className="forecast-period">Daily</span>
      </div>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-5 g-2">
        {forecast.map((day, index) => (
          <div className="col" key={day}>
            <div className="forecast-day h-100 rounded-3 p-3 text-center">
              <p className="forecast-day-name mb-2">
                {new Date(`${day}T00:00:00`).toLocaleDateString(undefined, {
                  weekday: 'long',
                })}
              </p>
              <i className={`bi ${getWeatherInfo(forecast_weather_conditions[index])} forecast-weather-icon`} aria-hidden="true" />
              <p className="forecast-high mb-0">{forecast_max_temps[index]}°</p>
              <p className="forecast-low mb-0">{forecast_min_temps[index]}°</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}