import './App.css';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import "firebase/database";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebaseui/dist/firebaseui.css'

function EditMembers(props) {
    const [role, setRole] = React.useState('');
    const [name, setName] = React.useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
        console.log(name);
    };

    const handleRoleChange = (event) => {
        setRole(event.target.value);
        console.log(role);
    };

    async function onSubmit() {
        var userId = firebase.auth().currentUser.uid;
        await firebase.database().ref(userId + "/members").set({
            name: name
          });
          props.history.push({
            pathname: "/"
        });
        await firebase.database().ref(userId + "/members/" + name).set({
            role: role
          });
          props.history.push({
            pathname: "/"
          });

        //window.location.reload();
    }
    return (
        <>
            <Typography color="primary">
                <h1>
                    <b>
                        Edit Members
                    </b>
                </h1>
            </Typography>

            <Card variant='outlined' maxWidth="md" style={{ flex: 1, backgroundColor: '#bd84f5' }}>
                <CardContent>
                    <Typography>
                        <h2>
                            New Member:
                        </h2>
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '40ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        alignItems="center"
                    >
                        <TextField 
                            id="outlined-basic" 
                            label="Full Name" 
                            variant="outlined" 
                            value={name}
                            onChange={handleNameChange}/>
                    </Box>
                    <Typography>
                        <h2>Roles & Responsibilities</h2>
                        <p>
                            <b>Engineers:</b> Developing the product through programming, CAD designs, or robotics software. <br/>
                            <b>Designers:</b> Creating Figma prototypes, wireframes, mockups, or other types of designs.<br />
                            <b>Marketers:</b> Building business plans, a lean canvas, pitch presentations, market research, and constructing company.<br />
                        </p>
                    
                    <Box sx={{ maxWidth: 170 }}>

                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Role</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={role}
                                label="Role"
                                onChange={handleRoleChange}
                            >
                                <MenuItem value={"Engineer"}>Engineer</MenuItem>
                                <MenuItem value={"Designer"}>Designer</MenuItem>
                                <MenuItem value={"Marketer"}>Marketer</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    </Typography>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        
                        <Fab color="secondary" aria-label="add" onClick={onSubmit} href="/">
                            Add
                        </Fab>
                    </Box>
                    
                </CardContent>
            </Card>
            <br/>
            <Card variant='outlined' maxWidth="md" style={{ flex: 1, backgroundColor: '#bd84f5' }}>
                <CardContent>
                    <Typography>
                        <h2>
                            Edit Existing Members
                        </h2>
                    </Typography>
                    <Button style={{ color: 'white' }} color="secondary" size="large" variant="contained" href="/" >Save Changes</Button>
                </CardContent>
            </Card>
            <br></br><br></br>
            
        </>
    );
}

export default withRouter(EditMembers);
