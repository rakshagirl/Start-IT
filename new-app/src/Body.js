import './App.css';
import React from "react";
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import {useState, useEffect} from 'react';
import firebase from "firebase/app";
import "firebase/database";

function Body() {
    const [members, setMembers] = useState(null);

    useEffect(() => {
        var userId = firebase.auth().currentUser.uid;
        var starCountRef = firebase.database().ref(userId + "/members/");
        starCountRef.on('value', (snapshot) => {
            const data = snapshot.val();
            setMembers(data);
            console.log(data);
        });
    }, []);

    return (
        <>
            <Typography color="primary">
                <h1>
                    <b>
                        Welcome to Start-IT.
                    </b>
                </h1>
            </Typography>
            <Typography color="primary">
                <h2>
                    Use this platform to organize your project throughout the year with your teammates.
                </h2>
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                    <Card variant='outlined' maxWidth="md" style={{ flex: 1, backgroundColor: '#bd84f5' }}>
                        <CardContent>
                            <Typography>
                                <h1>
                                    Members
                                </h1>
                            </Typography>
                            {members != null ? Object.keys(members).map((member) => {
                                return <p>{member} : {members[member]['role']}</p>
                            }) : null}
                               
                            <Button style={{ color: 'white' }} color="secondary" size="large" href="/edit_members" variant="contained">Edit Members</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} md={6}>
                    <Card variant='outlined' maxWidth="md" style={{ flex: 1, backgroundColor: '#bd84f5' }}>
                        <CardContent>
                            <Typography>
                                <h1>
                                    Project Information
                                </h1>
                            </Typography>
                            <Button style={{ color: 'white' }} color="secondary" size="large" variant="contained" href="/edit_info">Edit Information</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            
        </>
    );
}

export default Body;
