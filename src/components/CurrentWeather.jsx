import 'bootstrap/dist/css/bootstrap.min.css'
import { WeatherDetails } from './WeatherDetail'
export function CurrentWeather({city_name,main_temp,apparent_temp,code,humidity,windspeed}) {
    function getWeatherInfo(id) {
        if (id === 0) return { icon: "bi-sun-fill", condition: "Clear" };
        if (id <= 2) return { icon: "bi-cloud-sun-fill", condition: "Partly cloudy" };
        if (id === 3) return { icon: "bi-cloud-fill", condition: "Cloudy" };
        if (id <= 48) return { icon: "bi-cloud-fog2-fill", condition: "Fog" };
        if (id <= 67 || (id >= 80 && id <= 82)) return { icon: "bi-cloud-rain-fill", condition: "Rain" };
        if (id <= 86) return { icon: "bi-snow", condition: "Snow" };
        if (id >= 95) return { icon: "bi-cloud-lightning-rain-fill", condition: "Thunderstorm" };
        return { icon: "bi-cloud", condition: "Unknown" };
    }   
    return(
        <div className='w-100 mt-3 p-3 rounded-2' style={{backgroundColor:'#10264D'}}>
            <div  className='d-flex justify-content-between'>
                <div>
                    <p style={{fontSize:'0.8rem'}} className='fw-bolder font-monospace'>current weather -{city_name}</p>
                    <h1 style={{fontSize:'3.5em'}}>{main_temp}°C</h1>
                    <p className='text-light fw-bold'>{getWeatherInfo(code).condition}</p>
                    <p className='m-0'>Feels like {apparent_temp}°C</p>
                </div> 
                <i className={`weather-icon bi ${getWeatherInfo(code).icon} text-warning`}></i>
            </div>
            <WeatherDetails wind_speed={windspeed} humidity={humidity} condition={getWeatherInfo(code).condition} />
        </div>
    )
}