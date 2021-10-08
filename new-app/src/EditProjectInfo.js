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

function EditProjectInfo() {
    return (
        <>
            <Typography color="primary">
                <h1>
                    <b>
                        Edit Project Information
                    </b>
                </h1>
            </Typography>

            <Card variant='outlined' maxWidth="md" style={{ flex: 1, backgroundColor: '#bd84f5' }}>
                <CardContent>
                    <Typography>
                        <h3>
                            Project Name:
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
                        <TextField id="outlined-basic" label="New Name" variant="outlined" />
                    </Box>
                    <Typography>
                        <h3>
                            Type of Project:
                        </h3>

                    </Typography>
                    <ToggleButtonGroup
                        color="primary"
                        //exclusive
                    >
                        <ToggleButton value="web-app">Web App/Website</ToggleButton>
                        <ToggleButton value="mobile-app">Mobile App</ToggleButton>
                        <ToggleButton value="game">Game</ToggleButton>
                        <ToggleButton value="3D-printed">3-D Printed Project</ToggleButton>
                        <ToggleButton value="robotics">Robotics</ToggleButton>
                    </ToggleButtonGroup>
                    <br/><br/>
                    <Button style={{ color: 'white' }} color="secondary" size="large" variant="contained" href="/" >Save Changes</Button>
                </CardContent>
            </Card>
            <br></br><br></br>
            
        </>
    );
}

export default EditProjectInfo;
