import 'bootstrap/dist/css/bootstrap.min.css'
export function WeatherDetails({wind_speed,humidity,condition}){
    return(
        <div className='row row-cols-3 row-cols-lg-2 mt-4 justify-content-between text-center' >
            <div className='card p-2 rounded-2' style={{backgroundColor:' #10264d',border:' 1px solid #244579',width:'30%'}}>
                <i className='bi bi-droplet-half text-primary' style={{fontSize:'1.7rem'}} ></i>
                <p className='card-text'>Humidity</p>
                <p className='text-light fw-bolder'>{humidity ?? '--'}%</p>
            </div>
            <div className='card p-2 rounded-2' style={{backgroundColor:' #10264d',border:' 1px solid #244579',width:'33%'}}>
                <i className='bi bi-wind text-primary' style={{fontSize:'1.7rem'}}></i>
                <p className='card-text'>wind Speed</p>
                <p className='text-light fw-bolder'>{wind_speed ?? '--'} m/s</p>
            </div>
            <div className='card p-2 rounded-2' style={{backgroundColor:' #10264d',border:' 1px solid #244579',width:'33%'}}>
                <i className='bi bi-thermometer text-primary' style={{fontSize:'1.7rem'}}></i>
                <p className='card-text'>Condition</p>
                <p className='text-light fw-bolder'>{condition}</p>
            </div>
            
        </div>
    )
}