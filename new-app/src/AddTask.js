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
import firebase from "firebase/app";
import "firebase/database";
import { withRouter } from "react-router-dom";

function AddTask(props) {
    const [text, setText] = useState("");

    async function onSubmit() {
        var userId = firebase.auth().currentUser.uid;
        await firebase.database().ref(userId + "/tasks/" + text).set({
            deadline: "Someday"
          });
          console.log(text);
        //   props.history.push({
        //     pathname: "/tasks"
        // });
        
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
                        <div className="result-calendar">
                            <Calendar />
                        </div>
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
