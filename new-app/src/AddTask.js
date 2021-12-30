import './App.css';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import "firebase/database";
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import { withRouter } from "react-router-dom";

function AddTask(props) {
    const [text, setText] = useState("");
    const [date, setDate] = React.useState(new Date('2014-08-18T21:11:54'));

    async function onSubmit() {
        var userId = firebase.auth().currentUser.uid;
        await firebase.database().ref(userId + "/tasks/" + text).set({
            deadline: date.toUTCString()
          });
          
          props.history.push({
                pathname: "/tasks"
          });
        
    }
    const handleDateChange = (newValue) => {
        setDate(newValue);
        console.log(date);
      };

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
                        <TextField 
                            id="outlined-basic" 
                            label="" 
                            variant="outlined"
                            value={text}
                            onChange={(event) => setText(event.target.value)} />
                    </Box>
                    <Typography>
                        <h3>
                            Due Date:
                        </h3>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
      
                            <DateTimePicker
                            label=""
                            value={date}
                            onChange={handleDateChange}
                            renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Typography>
                    
                    <br /><br />
                    <Button style={{ color: 'white' }} color="secondary" size="large" variant="contained" onClick={onSubmit} >Save Changes</Button>
                </CardContent>
            </Card>
            <br></br><br></br>

        </>
    );
}

export default withRouter(AddTask);
