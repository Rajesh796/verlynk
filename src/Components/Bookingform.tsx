import  './../Styles/roomsdata.css';

export const Bookingform = ({ bookingfunction }: any) => {
    const submitbutton = (event: any) => {
        event.preventDefault();
        bookingfunction();
    }

    return (
        <div>
            <form>
                <div className="timecontainer">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label" >Team id</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Meeting topic</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={submitbutton}>Submit</button>
                </div>
            </form>
        </div>
    )
}