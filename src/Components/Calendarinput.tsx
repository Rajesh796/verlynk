import { useState } from 'react';
import './../Styles/calendarinput.css';
import { Roomsdata } from './Roomsdata';

export const Calendarinput = () => {

    const [data, setData] = useState(false);
    const showdata=(event:any) =>{
        event.preventDefault();
        setData(true);
    }

    return (
        <div>
            <div className='calendercontainer'>
                <div>
                    <h1>Find your Stay</h1>
                    <h4>Search low prices on hotels, homes and much more...</h4>
                </div>
                <div>
                    <input className="calenderinput" type="text" placeholder="Mention your date " onFocus={(e) => e.target.type = "date"} onKeyDown={() => false} width={"50%"} />
                    <button className='searchbutton' onClick={showdata} >Search</button>
                </div>
            </div>
            {data ?
            <>
            <Roomsdata />
            </>
            :
            <>
            </>
}
        </div>
    )
}