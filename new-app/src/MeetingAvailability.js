import './App.css';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function MeetingAvailability() {
    return (
        <>
            <Typography color="primary">
                <h1>
                    <b>
                        Meeting Availability
                    </b>
                </h1>
                <h3>
                    Use this resource to track schedules and find available times to meet!
                </h3>
                <Card variant='outlined' maxWidth="md" style={{ flex: 1, backgroundColor: '#bd84f5' }}>
                    <CardContent>
                        Hello
                    </CardContent>
                </Card>
            </Typography>

        </>
    );
}

export default MeetingAvailability;