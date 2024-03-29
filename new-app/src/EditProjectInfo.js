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
import {useState, useEffect} from 'react';
import firebase from 'firebase/compat/app';

function EditProjectInfo(props) {

    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [error, setError] = React.useState(false);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    useEffect(() => {
        var userId = firebase.auth().currentUser.uid;
        var starCountRef = firebase.database().ref(userId + "/info/");
        starCountRef.on('value', (snapshot) => {
            const data = snapshot.val();
            setTitle(data != null ? data['title'] : "");
            setType(data != null ? data['type'] : "");
        });
        
    }, []);

    async function onSubmit() {
        if (title.length === 0) {
            setError(true);
            return;
        } else {
            setError(false);
        }
        var userId = firebase.auth().currentUser.uid;
        var ref = firebase.database().ref(userId + "/info/");
        ref.remove();
        await firebase.database().ref(userId + "/info/").set({
            title: title,
            type: type
          });
        props.history.push({
            pathname: "/"
      });
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

            <Grid item xs={9}>
                <Card variant='outlined' sx={{ maxWidth: 1000 }} style={{ flex: 1, backgroundColor: '#bd84f5' }}>
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
                                variant="outlined"
                                error={error}
                                helperText={error ? "This field cannot be blank" : ""}
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
                            <ToggleButton value="Web App/Website">Web App/Website</ToggleButton>
                            <ToggleButton value="Mobile App">Mobile App</ToggleButton>
                            <ToggleButton value="Game">Game</ToggleButton>
                            <ToggleButton value="3-D Printed Project">3-D Printed Project</ToggleButton>
                            <ToggleButton value="Robotics">Robotics</ToggleButton>
                        </ToggleButtonGroup>
                            <br /><br />
                            <Button
                                style={{
                                    backgroundColor: '#bfc5d6',
                                    margin: "14px"
                                }}
                                color="inherit"
                                size="large"
                                variant="contained"
                                href="/"
                            >
                                Cancel
                            </Button>
                            <Button
                                style={{ color: 'white' }}
                                color="secondary"
                                size="large"
                                variant="contained"
                                onClick={onSubmit}
                            >
                                Save Changes
                            </Button>
                    </CardContent>
                </Card>
            <br></br><br></br>
                </Grid>
            </Grid>
        </>
    );
}

export default EditProjectInfo;
