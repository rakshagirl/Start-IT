import './App.css';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';
import "firebase/database";
import firebase from 'firebase/compat/app';

function EditProjectInfo() {

    const [title, setTitle] = React.useState("");
    const [type, setType] = React.useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    async function onSubmit() {
        var userId = firebase.auth().currentUser.uid;
        await firebase.database().ref(userId + "/info/").set({
            title: title,
            type: type
          });
          console.log(title);
          console.log(type);
    }
    return (
        <>
            <Typography color="primary">
                <h1>
                    <b>
                        Edit Project Information
                    </b>
                </h1>
            </Typography>
            <Grid
                container
                spacing={3}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '0vh' }}
            >

            <Grid item xs={8}>
                <Card variant='outlined' sx={{ maxWidth: 900 }} style={{ flex: 1, backgroundColor: '#bd84f5' }}>
                    <CardContent>
                        <Typography>
                            <h3>
                                Project Name:
                            </h3>
                        </Typography>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '30ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField 
                                id="outlined-basic" 
                                label="New Name" 
                                variant="outlined"
                                value={title} 
                                onChange={handleTitleChange}/>
                        </Box>
                        <Typography>
                            <h3>
                                Type of Project:
                            </h3>

                        </Typography>
                        <ToggleButtonGroup
                            color="primary"
                            value={type}
                            exclusive
                            onChange={handleTypeChange}
                        >
                            <ToggleButton value="web-app">Web App/Website</ToggleButton>
                            <ToggleButton value="mobile-app">Mobile App</ToggleButton>
                            <ToggleButton value="game">Game</ToggleButton>
                            <ToggleButton value="3D-printed">3-D Printed Project</ToggleButton>
                            <ToggleButton value="robotics">Robotics</ToggleButton>
                        </ToggleButtonGroup>
                        <br/><br/>
                        <Button style={{ color: 'white' }} color="secondary" size="large" variant="contained" onClick={onSubmit} href="/" >Save Changes</Button>
                    </CardContent>
                </Card>
            <br></br><br></br>
                </Grid>
            </Grid>
        </>
    );
}

export default EditProjectInfo;
