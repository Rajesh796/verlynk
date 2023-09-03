import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/navbar';
import { Calendarinput } from './Components/Calendarinput';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from './Components/Homepage';
import { RoomBooking } from './Components/Roombooking';
import { Bookingform } from './Components/Bookingform';


function App() {
  return (
    <div>
      <Routes >
    <Route path='/' element={<Homepage />} />
    <Route path='/conferenceroom1' element={<RoomBooking />} />
    <Route path='/Auditorium' element={<RoomBooking />} />
    <Route path='/auditorium2' element={<RoomBooking />} />
    <Route path='/conferenceroom2' element={<RoomBooking />} />
    <Route path='conferenceroom1/bookingform' element={<Bookingform />} />
    </Routes>
    </div>
  );
}

export default App;
