import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user, logOut} = useAuth();
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
                        <Link to ='/home/'  className="nav-link active nav-hover" aria-current="page"><span className="text-success ">Home</span></Link>
                        </li>

                        <li className="nav-item">
                        <Link to ='/doctors/Child'  className="nav-link active nav-hover" aria-current="page"><span className="text-success">Child</span></Link> 
                        </li>

                        <li className="nav-item">
                        <Link to ='/doctors/Dental'  className="nav-link active nav-hover" aria-current="page"><span className="text-success">Dental</span></Link>
                        </li>

                        <li className="nav-item">
                        <Link to ='/doctors/ENT'  className="nav-link active nav-hover" aria-current="page"><span className="text-success">ENT</span></Link>
                        </li>

                        <li className="nav-item">
                        <Link to ='/doctors/Eye'  className="nav-link active nav-hover" aria-current="page"><span className="text-success">Eye</span></Link>
                        </li>

                        <li className="nav-item">
                        <Link to ='/doctors/Cardiology'  className="nav-link active nav-hover" aria-current="page"><span className="text-success">Cardiology</span></Link>
                        </li>

                        <li className="nav-item">
                        <Link to ='/doctors/Orthopedic'  className="nav-link active nav-hover" aria-current="page"><span className="text-success">Orthopedic</span></Link>
                        </li>

                        <li className="nav-item">
                        <Link to ='/professor'  className="nav-link active nav-hover" aria-current="page"><span className="text-success">Professor</span></Link>
                        </li>

                        <li className="nav-item">
                        <Link to ='/associateProfessor'  className="nav-link active nav-hover" aria-current="page"><span className="text-success">Associate Professor</span></Link>
                        </li>

                        <li className="nav-item">
                        <Link to ='/login'  className="nav-link active nav-hover" aria-current="page"><span className="text-success">Login</span></Link>
                        </li>

                        
                    </ul>
                        {
                            user.displayName && <h6>Hello {user.displayName}</h6>
                        }
                        
                        {user.displayName&& <button className="btn btn-warning"onClick={logOut}><i class="fas fa-sign-out-alt"></i> log out</button>}
                    
                    </div>
                </div>
</nav>
        </div>
    );
};

export default Header;