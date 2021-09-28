import './App.css';
import { Typography } from '@mui/material';
import NavBar from "./NavBar";

function MeetingAvailability() {
    return (
        <>
            <Typography color="primary">
                <h1>
                    <b>
                        Meeting Availability
                    </b>
                </h1>
            </Typography>
            <Typography color="primary">
                <h3>
                    Use this resource to track schedules and find available times to meet!
                </h3>
            </Typography>
        </>
    );
}

export default MeetingAvailability;