import './home.css';

export function Home() {
    return (
        <div className='container-fluid'>
            <h2 className="box bg-info m-3"><span className='bi bi-house-door-fill'></span>React Home</h2>
            <div className='alert alert-dismissible alert-danger w-25 m-3'>
                <h4>welcome to react 18</h4>
                <p>it is a javascript library for building native and web ui</p>
                <button className='btn btn-success' data-bs-dismiss="alert">ok</button>
            </div>            
        </div>
    )
}