import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SpecialistDoctors from '../SpecialistDoctors/SpecialistDoctors';

const Details = () => {
    const [doctors, setDoctors] = useState([]);
    const {specialist} = useParams();

    useEffect(() => {
        fetch('/doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])

    const specialistDoctors = doctors.filter(d => d.specialty === specialist);

    return (
        <div className="container">
            {
                specialistDoctors.map((doctors) =><SpecialistDoctors key={doctors.id} doctors={doctors}></SpecialistDoctors>)
            }
        </div>
    );
};

export default Details;