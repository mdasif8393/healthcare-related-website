import React, { useEffect, useState } from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import HospitalInfo from '../HospitalInfo/HospitalInfo';
import Professor from '../Professor/Professor';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    console.log(services);
    return (
        <div className="container home-container">
            <Banner></Banner>

            <div className="services-container">
            
            {
                services.map((service) => <Services service={service} key={service.id}></Services>)
            }
            </div>

            <div>
                <Appointment></Appointment>
                <HospitalInfo></HospitalInfo>
            </div>

        </div>
        
    );
};

export default Home;