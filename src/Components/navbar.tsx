import './../Styles/navbarstyles.css';
import HomeIcon from '@mui/icons-material/Home';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import TramIcon from '@mui/icons-material/Tram';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';


export const Navbar = () => {
    return (
        <div className="navbarcontainer">
            <div className='navbaritem'>

                <h3>Verlynk</h3>
            </div>
            <div className='navbaritem'>
                <HomeIcon />
                <a className="navbar-a-item" href='#'>Home</a>
            </div>
            <div className='navbaritem'>
                <BedroomChildIcon />
                <a>Rooms</a>
            </div>
            <div className='navbaritem'>
                <ConnectingAirportsIcon />
                <a>Flights</a>
            </div>
            <div className='navbaritem'>
                <TramIcon />
                <a>Train</a>
            </div>
            <div className='navbaritem'>
                <DirectionsBusIcon />
                <a>Bus</a>

            </div>
            <div className='navbaritem'>
            <ViewStreamIcon />
                <a>MyMeetings</a>
               
            </div>


        </div>
    )
}