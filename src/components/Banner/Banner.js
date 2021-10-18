import React from 'react';
import { Button, Card, Carousel, Col, Container, Image, Row, } from 'react-bootstrap';
const Banner = () => {
    return (
        <div className="container">
            <Container style={{backgroundColor:"#F0FFF0", height:"100%,", width: '100%',  marginTop:"40px",  marginBottom:"50px", padding:'3rem'}}>
        <Row>
                <Col md={6} style={{paddingTop:"45px", paddingLeft:"70px"}}>
                <p style={{color: 'red'}}>Are you looking for doctors's information?</p>
                <h2 >Here You Can Find </h2> 
                <h1 style={{color:"#21B573", marginTop:"-10px"}}>Doctors of Khulna City</h1>
                <p style={{color: 'red'}}>with their</p>
                <ul style={{marginTop:"-15px"}}>
                    <li style={{color: '#A52A2A'}}>Fee</li>
                    <li style={{color: '#A52A2A'}}>Specialty</li>
                    <li style={{color: '#A52A2A'}}>Contact Number</li> 
                    <li style={{color: '#A52A2A'}}>Chamber Address</li>
                </ul>
                    
                </Col>
                <Col md={6}>
                <Image style={{marginLeft:"auto", marginRight:"auto", height:"350px", }} src="https://raw.githubusercontent.com/mdasif8393/find-doctors/main/src/images/doctor2.jpg" roundedCircle fluid />
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Banner;