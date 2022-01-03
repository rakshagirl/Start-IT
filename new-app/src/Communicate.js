import './App.css';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {useState, useEffect} from 'react';
import firebase from "firebase/compat/app";
import "firebase/compat/database";


function Communicate() {

    const [members, setMembers] = useState(null);
    const [currentMember, setCurrentMember] = useState(null);

    useEffect(() => {
        var userId = firebase.auth().currentUser.uid;
        var starCountRef = firebase.database().ref(userId + "/members/");
        starCountRef.on('value', (snapshot) => {
            const data = snapshot.val();
            setMembers(data);
            console.log(data);
        });
        if(currentMember == null){
            let data = window.sessionStorage.getItem("currentMember");
            setCurrentMember(data);
        }
    }, []);

    console.log(currentMember);

    const selectMember = <Card variant='outlined' maxWidth="lg" style={{ flex: 1, backgroundColor: '#bd84f5' }}>
                            <CardContent>
                                <Typography>
                                    <h2>Select Member Here:</h2>
                                    {members != null ? Object.keys(members).map((member) => {
                                    return (
                                        <Button style={{ color: 'red' }} 
                                        color="inherit" 
                                        size="medium" 
                                        variant="contained"
                                        onClick={() => {
                                            setCurrentMember(member);
                                            window.sessionStorage.setItem("currentMember", member);
                                        }}
                                    >
                                    {member}
                                    </Button>)
                                }) : null}
                                </Typography>
                            </CardContent>
                        </Card>;


    return (
        <>
            
            <Typography color="primary">
                <h1>
                    <b>
                        Communicate
                    </b>
                </h1>
            </Typography>
            <Typography color="primary">
                <h3>
                    Use this area to discuss progress, issues, comments, and anything else you need to your teammates!
                </h3>
            </Typography>
            <Grid
                container
                spacing={2}           >
                <Grid item xs={12} md={12}>
                    {currentMember == null ? selectMember : 
                        <Card variant='outlined' maxWidth="lg" style={{ flex: 1, backgroundColor: '#bd84f5' }}>
                            <CardContent>
                                <Typography>
                                    <h1>
                                        Chat Log Area
                                    </h1>
                                    <h3>Current User is: {currentMember} </h3>
                                </Typography>

                                <Card variant='outlined' maxWidth="sm" style={{ flex: 1, backgroundColor: '#d4a8ff' }}>
                                    <CardContent>
                                        <Typography>
                                            Past Messages go here
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <br/>
                                <TextField id="outlined-basic" label="" variant="outlined" sx={{ minWidth: 350 }}/>
                                <br/><br/>
                                <Button style={{ color: 'white' }} color="secondary" size="large" variant="contained">Send</Button>

                            </CardContent>
                        </Card>}
                </Grid>
            </Grid>
        </>
    );
}

export default Communicate;
