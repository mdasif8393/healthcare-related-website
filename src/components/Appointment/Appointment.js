import React, { useState } from 'react';
import './Appointment.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';

const Appointment = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [value, onChange] = useState('10:00');
    return (
        <div className="container mt-5">
            <h2 style={{color: 'rgb(165, 42, 42)'}} className="text-center">Get Doctor Appointment from here</h2>
            <div className="appointment-container-style">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Your Name</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Your Address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Address"/>
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Your Contact Number</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Contact Number"/>
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Enter Doctor Name</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Doctor name"/>
                </div>

                <div>
                    <small>Choose Date</small>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>

                <div>
                    <small>Choose Time</small> <br/>
                <TimePicker
                    onChange={onChange}
                    value={value}
                />
                </div>
                
                <br/>
                <button type="submit" class="btn btn-success">Booking</button>
                </form>
            </div>
        </div>
    );
};

export default Appointment;