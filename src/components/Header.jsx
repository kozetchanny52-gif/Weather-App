import 'bootstrap/dist/css/bootstrap.min.css'

export function Header(){
    return(
        <header className="p-2 w-100 d-flex align-items-center">
            <i className="bi bi-cloud-sun-fill text-warning fs-2 me-3" aria-hidden="true"></i>
            <div>
                <h1 className='m-0'>Weatherly</h1>
                <p className='fw-semibold m-0'>Your daily forecast</p>
            </div>
            <i className="bi bi-geo-alt-fill ms-auto text-primary" aria-hidden="true"></i>
        </header>
        
    )
}