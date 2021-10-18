import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
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
        <div className="container">
            <Banner></Banner>

            <div className="services-container">
            
            {
                services.map((service) => <Services service={service} key={service.id}></Services>)
            }
        </div>
        </div>
        
    );
};

export default Home;