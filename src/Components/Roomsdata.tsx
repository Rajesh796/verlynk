import { NavLink } from 'react-router-dom'
import './../Styles/roomsdata.css'
import { RoomBooking } from './Roombooking'

export const Roomsdata = () => {
    return (
        <div>
            <div className="roomscontainer">
                <div className="roomcard">
                    <img className="roomimage" src={require('./../Images/meeting-rooms01.jpeg')} />
                    <h4>Conference Room1</h4>
                    <NavLink className='booknow' to={"/conferenceroom1"}>Book Now</NavLink>
                </div>
                <div className="roomcard">
                    <img className="roomimage" src={require('./../Images/meeting-rooms01.jpeg')} />
                    <h4>Auditorium</h4>
                    <NavLink className='booknow' to={'/Auditorium'}>Book Now</NavLink>
                </div>
                <div className="roomcard">
                    <img className="roomimage" src={require('./../Images/meeting-rooms01.jpeg')} />
                    <h4>Auditorium room 2 </h4>
                    <NavLink className='booknow' to={'/auditorium2'}>Book Now</NavLink>
                </div>
                <div className="roomcard">
                    <img className="roomimage" src={require('./../Images/meeting-rooms01.jpeg')} />
                    <h4>Conference Room 2</h4>
                    <NavLink className='booknow' to={'/conferenceroom2'}>Book Now</NavLink>
                </div>


            </div>
            
        </div>
    )
}