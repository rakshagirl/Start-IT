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

export default function EditMembers() {
    const [role, setRole] = React.useState('');

    const handleChange = (event) => {
        setRole(event.target.value);
    };
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
                        <TextField id="outlined-basic" label="Full Name" variant="outlined" />
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
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Engineer</MenuItem>
                                <MenuItem value={20}>Designer</MenuItem>
                                <MenuItem value={30}>Marketer</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    </Typography>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        
                        <Fab color="secondary" aria-label="add" href="/">
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

