import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center">
            <img className="img-fluid" src="https://miro.medium.com/max/1400/1*DeBkx8vjbumpCO-ZkPE9Cw.png"></img> <br/>
            <Link className="btn btn-warning" to="/">Go to Home</Link>
        </div>
    );
};

export default NotFound;