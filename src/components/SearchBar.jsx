import 'bootstrap/dist/css/bootstrap.min.css'

export function SearchBar({ query, setQuery, onSearch }) {
    function handleSubmit(event) {
        event.preventDefault()
        if (typeof onSearch === 'function') {
            onSearch()
        }
    }

    return (
        <div className='search-container w-100 p-3 mt-2 rounded-3'>
            <p className='fw-medium'>Search for a location</p>
            <form className='d-flex gap-2' onSubmit={handleSubmit}>
                <div className='input-group input-group-bg rounded-2 border border-1 input-group-border-color'>
                    <span className='input-group-text bg-transparent border-0'>
                        <i className='bi bi-search text-secondary'></i>
                    </span>
                    <input
                        type='text'
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        className='form-control bg-transparent border-0'
                        placeholder='Enter city name...'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>
                    <i className='bi bi-search text-black fw-bold'></i>
                </button>
            </form>
        </div>
    )
}