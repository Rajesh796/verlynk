import './../Styles/roomooking.css';
import './../Styles/roomsdata.css'
import { useState } from 'react'
import { Bookingform } from './Bookingform';
import { Navbar } from './navbar';
import { NavLink } from 'react-router-dom';

export const RoomBooking = () => {

   const [roombooked, setRoombooked] = useState(true);
   const [available, setAvailable] = useState(true)

   const bookinghandler = () => {

      setRoombooked(false);
      setAvailable(false)
      console.log(roombooked)
   }
   return (
      <div>
         <Navbar />
         <div className="bookingcontainer">
            <div className='roomcard'>
               <img className='roomimage' src={require('./../Images/meeting-rooms01.jpeg')} />
            </div>
            <div className={roombooked ? "bookingcard" : "bookingcard-cancel"}>

               <a>9 : 30</a>
               {available ?
                  <NavLink to='bookingform' className="navlink">Available</NavLink>
                  : <p>not available</p>
               }

            </div>
            <div className={roombooked ? "bookingcard" : "bookingcard-cancel"}>

               <a>10 : 00</a>
               {available ?
                  <NavLink to='bookingform' className="navlink">Available</NavLink>
                  : <p>not available</p>
               }

            </div>
            <div className={roombooked ? "bookingcard" : "bookingcard-cancel"}>

               <a>10 : 30</a>
               {available ?
                  <NavLink to='bookingform' className="navlink">Available</NavLink>
                  : <p>not available</p>
               }

            </div>

            <div className={roombooked ? "bookingcard" : "bookingcard-cancel"}>

               <a>11: 00</a>
               {available ?
                  <NavLink to='bookingform' className="navlink">Available</NavLink>
                  : <p>not available</p>
               }

            </div>

            <div className={roombooked ? "bookingcard" : "bookingcard-cancel"}>

               <a>11 : 30</a>
               {available ?
                  <NavLink to='bookingform' className="navlink">Available</NavLink>
                  : <p>not available</p>
               }

            </div>
            <div className={roombooked ? "bookingcard" : "bookingcard-cancel"}>

               <a>12 : 00</a>
               {available ?
                  <NavLink to='bookingform' className="navlink">Available</NavLink>
                  : <p>not available</p>
               }

            </div>
         </div>

      </div>
   )
}