import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = (props) => {
    
    const {name, id, img, description} = props.service;


    
    
    return (
        <div className="container">
            <div className="card services-card-style" style={{width: '23rem', height: '33rem'}}>
                <img style={{height:'250px', padding: '10px', borderRadius: '5px'}} src={img} className="card-img-top rounder " alt="..."/>
                <div className="card-body">
                    <h4 className="card-title"><span className="text-color">{name} Specialist</span></h4>
                    <p className="card-text">{description}</p>
                    <Link to={`/doctors/${name}`}><button   className="btn btn-success">See {name} specialist doctors</button></Link>
                </div>
                </div>
        </div>
    );
};

export default Services;