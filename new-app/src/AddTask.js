import './App.css';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Calendar from 'react-calendar'
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

function AddTask() {
    const [calDate, setCalDate] = useState(new Date())

    function onChange(calDate) {
        // change results based on calendar date click
        setCalDate(calDate)
    }

    return (

        <>
            <Typography color="primary">
                <h1>
                    <b>
                        Add New Task
                    </b>
                </h1>
            </Typography>

            <Card variant='outlined' maxWidth="md" style={{ flex: 1, backgroundColor: '#bd84f5' }}>
                <CardContent>
                    <Typography>
                        <h3>
                            Task Description:
                        </h3>
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="" variant="outlined" />
                    </Box>
                    <Typography>
                        <h3>
                            Due Date:
                        </h3>
                        <div className="result-calendar">
                            <Calendar onChange={onChange} value={calDate} />
                        </div>
                    </Typography>
                    
                    <br /><br />
                    <Button style={{ color: 'white' }} color="secondary" size="large" variant="contained" href="/tasks" >Save Changes</Button>
                </CardContent>
            </Card>
            <br></br><br></br>

        </>
    );
}

export default AddTask;
