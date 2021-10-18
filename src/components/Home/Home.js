import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    console.log(services);
    return (
        <div className="services-container">
            {
                services.map((service) => <Services></Services>)
            }
        </div>
    );
};

export default Home;