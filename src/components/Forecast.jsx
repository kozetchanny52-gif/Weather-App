const forecastDays = [
  { day: 'Mon', icon: 'bi-sun-fill', high: 24, low: 14 },
  { day: 'Tue', icon: 'bi-cloud-rain-fill', high: 20, low: 12 },
  { day: 'Wed', icon: 'bi-cloud-fill', high: 18, low: 11 },
  { day: 'Thu', icon: 'bi-cloud-sun-fill', high: 21, low: 12 },
  { day: 'Fri', icon: 'bi-sun-fill', high: 23, low: 13 },
]

export function Forecast() {
  return (
    <section className="forecast-section mt-3" aria-labelledby="forecast-heading">
      <div className="d-flex align-items-center justify-content-between mb-2">
        <h2 id="forecast-heading" className="h5 mb-0 text-light">5-Day Forecast</h2>
        <span className="forecast-period">Daily</span>
      </div>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-5 g-2">
        {forecastDays.map(({ day, icon, high, low }) => (
          <div className="col" key={day}>
            <div className="forecast-day h-100 rounded-3 p-3 text-center">
              <p className="forecast-day-name mb-2">{day}</p>
              <i className={`bi ${icon} forecast-weather-icon`} aria-hidden="true" />
              <p className="forecast-high mb-0">{high}°</p>
              <p className="forecast-low mb-0">{low}°</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}