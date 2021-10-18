import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-style" >

            <div className="text-center">
                <a href="https://www.google.com/maps/place/22%C2%B048'27.4%22N+89%C2%B034'08.0%22E/@22.8092648,89.5675494,17z/data=!4m13!1m6!3m5!1s0x39ff8fdff27e66c1:0xea8bb27c3e17555e!2sJanata+Bank+Ltd.+Hazi+Mohsin+Road+Branch!8m2!3d22.8092693!4d89.5696882!3m5!1s0x0:0x0!7e2!8m2!3d22.8075963!4d89.5688738"> <h6 style={{color: 'white'}}><span><i class="fas fa-map-marker-alt fa-2x"></i> </span>Hazi Mohsin Road, Khulna, Bangladesh</h6> <br/></a>
               
                <h6 style={{color: 'white'}}><span><i class="fas fa-phone-square-alt fa-2x"></i> 01784248413</span></h6>
                <h6 style={{color: 'white'}}><span><i class="fas fa-envelope-square fa-2x"></i></span> md.asif.8393@gmail.com</h6>
            </div>

            <div className="text-center" style={{color: 'white'}}>
                <h4>About US</h4> <br/>
                <p>We basically build website as your choice. <br/>You can find us through email, twitter, facebook, instagram</p>
                <span><i class="fab fa-facebook fa-2x"></i> &nbsp; &nbsp;</span>
                <span><i class="fab fa-twitter fa-2x"></i> &nbsp; &nbsp;</span>
                <span><i class="fab fa-instagram fa-2x"></i></span>
            </div>


        </div>
    );
};

export default Footer;