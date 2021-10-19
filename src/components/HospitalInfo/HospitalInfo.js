import React from 'react';
import './HospitalInfo.css'
const HospitalInfo = () => {
    return (
        <div className="container mt-5">
            <div style={{color: 'rgb(165, 42, 42)'}} className="text-center">
                <h2>Top 3 Hospital in Khulna City</h2>
            </div>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Khulna_medical_college_hospital_building.jpg" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                    <div className="bg-secondary p-1">
                        <h3>Khulna Medical Collage & Hospital</h3>
                        <h6>Here you can find all kind of doctors with free of cost</h6>
                    </div>
                        
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src="http://khulnacitymedicalcollege.edu.bd/images/slide_1.jpg" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <div className="bg-secondary p-1">
                        <h3>Khulna CIty Medical Collage & Hospital</h3>
                        <h6>No 1 Private Hospital in Khulna. You can find all treatment here</h6>
                        </div>
                        
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src="https://ssansh.gov.bd/wp-content/uploads/2015/07/IMG_20181108_135854-1.jpg" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                    <div className="bg-secondary p-1">
                        <h3>Shaheed Sheikh Abu Naser Specialised Hospital</h3>
                        <h6>Here You find specialist disease treatment like kidney, heart ect</h6>
                    </div>
                        
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
        </div>
    );
};

export default HospitalInfo;