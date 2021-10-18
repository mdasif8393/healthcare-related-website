import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">

                <img style={{height:'40px', width:'60px'}} src="https://raw.githubusercontent.com/mdasif8393/find-doctors/main/src/images/logo.png"></img>

                    <Link to='/home' style={{color:"#21B573", fontWeight: 'bold'}} className="navbar-brand " href="#">Doctors of Khulna City</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        

                        <li className="nav-item">
                        <Link to ='/home/'  className="nav-link active" aria-current="page">Home</Link>
                        </li>

                        <li className="nav-item">
                        <Link to ='/doctors/Child'  className="nav-link active" aria-current="page">Child</Link>
                        </li>

                        <li className="nav-item">
                        <Link to ='/doctors/Dental'  className="nav-link active" aria-current="page">Dental</Link>
                        </li>

                        <li className="nav-item">
                        <Link to ='/doctors/ENT'  className="nav-link active" aria-current="page">ENT</Link>
                        </li>

                        <li className="nav-item">
                        <Link to ='/doctors/Eye'  className="nav-link active" aria-current="page">Eye</Link>
                        </li>

                        <li className="nav-item">
                        <Link to ='/doctors/Cardiology'  className="nav-link active" aria-current="page">Cardiology</Link>
                        </li>

                        <li className="nav-item">
                        <Link to ='/doctors/Orthopedic'  className="nav-link active" aria-current="page">Orthopedic</Link>
                        </li>
                        
                    </ul>
                    
                    </div>
                </div>
</nav>
        </div>
    );
};

export default Header;