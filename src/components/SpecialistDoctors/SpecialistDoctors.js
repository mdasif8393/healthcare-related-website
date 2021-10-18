import React from 'react';
import './SpecialistDoctors.css'

const SpecialistDoctors = (props) => {
    const {chamber, contact, degree, designation, fee, id, img, name, specialty, time } = props.doctors;
    
    return (
        <div className="m-5 " >
            <div className="card mb-3 specialist-card-style" style={{maxWidth: '1240px'}} >
                <div className="row g-0">
                    <div className="col-md-4">
                    <img style={{height: '350px', width: '350px'}} src={img} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title"><span className="text-color">{name}</span></h5>
                        <p className="card-text">Degree: <span className="text-color">{degree}</span></p>
                        <p className="card-text">Specialty: <span className="text-color">{specialty}</span></p>
                        <p className="card-text">Designation: <span className="text-color">{designation}</span></p>
                        <p className="card-text">Address: <span className="text-color">{chamber}</span></p>
                        <p className="card-text">Contact: <span className="text-color">{contact}</span></p>
                        <p className="card-text">Visiting Hour: <span className="text-color">{time}</span></p>
                        <p className="card-text">Fee: <span className="text-color">{fee}</span></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialistDoctors;