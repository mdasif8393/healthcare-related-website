import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = (props) => {
    
    const {name, id, img, description} = props.service;


    
    
    return (
        <div className="container services-container">
            <div className="card services-card-style" style={{width: '20rem', height: '33rem'}}>
                <img  src={img} className="card-img-top img-thumbnail " alt="..."/>
                <div className="card-body">
                    <h4 className="card-title"><span >{name} Specialist</span></h4>
                    <p className="card-text">{description}</p>
                    <Link to={`/doctors/${name}`}><button   className="btn btn-success"><i className="fas fa-unlock-alt"></i> See {name} specialist doctors</button></Link>
                </div>
                </div>
        </div>
    );
};

export default Services;