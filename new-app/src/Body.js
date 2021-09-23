import './App.css';
import React from "react";
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function Body() {
    return (
        <>
            <Typography color="primary">
                <h1>
                    Welcome to Start-IT.
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
                            <Button style={{ color: 'white' }} color="secondary" size="large" variant="contained">Add Member</Button>
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
                            <Button style={{ color: 'white' }} color="secondary" size="large" variant="contained">Edit Information</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            
        </>
    );
}

export default Body;
