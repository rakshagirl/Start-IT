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
    const [message, setMessage] = useState("");
    const [error, setError] = useState(null);
    const [messages, setMessages] = useState(null);

    useEffect(() => {
        var userId = firebase.auth().currentUser.uid;
        var starCountRef = firebase.database().ref(userId + "/members/");
        starCountRef.on('value', (snapshot) => {
            const data = snapshot.val();
            setMembers(data);
        });
        if(currentMember == null){
            let data = window.sessionStorage.getItem("currentMember");
            setCurrentMember(data);
        }
    }, []);

    useEffect(() => {
        var userId = firebase.auth().currentUser.uid;
        var starCountRef = firebase.database().ref(userId + "/chats/");
        starCountRef.on('value', (snapshot) => {
            const data = snapshot.val();
            setMessages(data);
        });
    }, []);

    function convertDate(UTCSec) {
        var d = new Date(0);
        d.setUTCSeconds(UTCSec);
        d.setHours(d.getHours() - d.getTimezoneOffset() / 60);
        console.log(UTCSec);
        console.log((d).toLocaleString());
        return (d).toLocaleString();
    }

    async function sendMessage() {
        if (message.length === 0) {
            setError(true);
            console.log("ERROR");
            return;
        } else {
            setError(false);
        }
        const now = new Date();
        const utcMilli = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
        const utcSec = Math.round(utcMilli / 1000);
        var userId = firebase.auth().currentUser.uid;
        await firebase.database().ref(userId + "/chats/" + utcSec).set({
            message: message,
            user: currentMember
        });
        window.location.reload();
    }

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
                                <TextField
                                    id="outlined-basic"
                                    label=""
                                    variant="outlined"
                                    sx={{ minWidth: 350 }}
                                    value={message}
                                    error={error}
                                    helperText={error ? "This field cannot be blank" : ""}
                                    onChange={(event) => setMessage(event.target.value)} />

                                <br /><br />
                                <Button style={{ color: 'white' }} color="secondary" size="large" variant="contained" onClick={sendMessage} >Send</Button>
                                <br/><br/>
                                <Card variant='outlined' maxWidth="sm" style={{ flex: 1, backgroundColor: '#d4a8ff' }}>
                                    <CardContent>
                                        <Typography>
                                            <h2>Previous Chat</h2>
                                            {messages != null ? Object.keys(messages).reverse().map((message) => {
                                                return <div>
                                                    <Card variant='outlined' maxWidth="md" style={{ flex: 1, backgroundColor: '#e0c2ff' }}>
                                                        <CardContent>
                                                            <b>{convertDate(message)} <br/> {messages[message]['user']}</b>: {messages[message]['message']}
                                                        </CardContent>
                                                    </Card>
                                                </div>
                                            }) : null}
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <br/>
                                
                            </CardContent>
                        </Card>}
                </Grid>
            </Grid>
        </>
    );
}

export default Communicate;
