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
import { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import "firebase/database";
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import { withRouter } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function AddTask(props) {
    const [text, setText] = useState("");
    const [date, setDate] = React.useState(new Date('2022-01-01T00:00:00'));
    const [error, setError] = React.useState(false);
    const [members, setMembers] = useState(null);
    const [assignedMember, setAssignedMember] = useState("Everyone");

    useEffect(() => {
        var userId = firebase.auth().currentUser.uid;
        var starCountRef = firebase.database().ref(userId + "/members/");
        starCountRef.on('value', (snapshot) => {
            const data = snapshot.val();
            setMembers(data);
        });
    }, []);

    async function onSubmit() {
        if (text.length === 0) {
            setError(true);
            return;
        } else {
            setError(false);
        }
        var userId = firebase.auth().currentUser.uid;
        const ref = firebase.database().ref(userId + "/tasks/" + "/active/");
        let newTaskRef = ref.push();

        const utcMilli = date.getTime() + (date.getTimezoneOffset() * 60 * 1000);
        const utcSec = Math.round(utcMilli / 1000);
        await newTaskRef.set({
            text: text,
            deadline: utcSec,
            assignedMember: assignedMember
        });

        props.history.push({
            pathname: "/tasks"
        });

    }
    const handleDateChange = (newValue) => {
        setDate(newValue);
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
                            '& > :not(style)': { m: 1, width: '32ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField 
                            id="outlined-basic" 
                            label="" 
                            variant="outlined"
                            multiline
                            value={text}
                            error={error}
                            helperText={error ? "This field cannot be blank" : ""}
                            onChange={(event) => setText(event.target.value)} />
                    </Box>
                    <Typography>
                        <h3>
                            Due Date:
                        </h3>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >   
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
        
                                <DateTimePicker
                                label=""
                                value={date}
                                onChange={handleDateChange}
                                renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Box>
                        <h3>Assigned Member: </h3>

                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <FormControl fullWidth>
                                <InputLabel>Assign a Member</InputLabel>
                                <Select
                                    value={assignedMember}
                                    label="Assign a Member"
                                    onChange={(event) => setAssignedMember(event.target.value)}
                                >
                                    <MenuItem value={"Everyone"}>Everyone</MenuItem>
                                    {members != null ? Object.keys(members).map((member) => {
                                        return (
                                            <MenuItem value={member}>{member}</MenuItem>)
                                    }) : null}
                                </Select>
                            </FormControl>
                        </Box>
                    </Typography>
                    <br /><br />
                    <Button style={{ color: 'white' }} color="secondary" size="large" variant="contained" onClick={onSubmit} >Save Changes</Button>
                    <br/><br/>
                    <Button style={{ backgroundColor: '#bfc5d6' }} color="inherit" size="large" variant="contained" href="/tasks" >Cancel</Button>
                </CardContent>
            </Card>
            <br></br><br></br>
        </>
    );
}

export default withRouter(AddTask);
