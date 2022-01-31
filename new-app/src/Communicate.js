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
import chat from "./chat.png";

function Communicate() {

    const [members, setMembers] = useState(null);
    const [currentMember, setCurrentMember] = useState(null);
    const [message, setMessage] = useState("");
    const [error, setError] = useState(null);
    const [messages, setMessages] = useState(null);
    const [showAllMessages, setShowAllMessages] = useState(false);

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
        setMessage("");
    }

    const selectMember = <Card variant='outlined' maxWidth="lg" style={{ flex: 1, backgroundColor: '#bd84f5' }}>
                            <CardContent>
                                <Typography>
                                    <h2>Select Member Here:</h2>
                                    {members != null ? Object.keys(members).map((member) => {
                                    return (
                                        <Button 
                                            style={{
                                                color: "red",
                                                margin: "7px"
                                            }}
                                            color="inherit" 
                                            size="medium" 
                                            variant="contained"
                                            onClick={() => {
                                                let password = members[member]['password'];
                                                let pass = window.prompt("Please enter your password:", "");
                                                console.log(password);
                                                if (pass !== password) {
                                                    return;
                                                } else {
                                                    setCurrentMember(member);
                                                    window.sessionStorage.setItem("currentMember", member);
                                                }
                                            }}
                                    >
                                    {member}
                                    </Button>)
                                }) : "Go to the main page and add members to begin using the Communicate tool"}
                                </Typography>
                            </CardContent>
                        </Card>;

    if (messages != null) {
        var currentMessages = Object.keys(messages).reverse();
        if (!showAllMessages) {
            currentMessages = currentMessages.slice(0, 7);
        }
    }
  
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
                                        Chat Log 
                                    </h1>
                                    <img src={chat} height={100} width={100} />
                                    <h3>Current User is: {currentMember} </h3>
                                </Typography>
                                <TextField
                                    id="outlined-basic"
                                    label=""
                                    variant="outlined"
                                    sx={{ minWidth: 400 }}
                                    multiline
                                    value={message}
                                    error={error}
                                    helperText={error ? "Please type in a message" : ""}
                                    onChange={(event) => setMessage(event.target.value)} />

                                <Button
                                    style={{
                                        color: 'white',
                                        margin: "7px"
                                    }}
                                    color="secondary"
                                    size="large"
                                    variant="contained"
                                    onClick={sendMessage}
                                >
                                    Send
                                </Button>
                                <br/><br/>
                                <Card variant='outlined' maxWidth="sm" style={{ flex: 1, backgroundColor: '#d4a8ff' }}>
                                    <CardContent>
                                        <Typography>
                                            <h2>Previous Chat</h2>
                                            {messages != null ? currentMessages.map((m) => {
                                                return <div>
                                                    <Card variant='outlined' maxWidth="md" style={{ flex: 1, backgroundColor: '#e0c2ff' }}>
                                                        <CardContent>
                                                            <b>{convertDate(m)} <br/> {messages[m]['user']}</b>: {messages[m]['message']}
                                                        </CardContent>
                                                    </Card>
                                                </div>
                                            }) : null}
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <br/>
                                <Button style={{ color: 'white' }} color="primary" size="medium" variant="contained" onClick={() => setShowAllMessages(!showAllMessages)} >Show/Hide All Messages</Button>

                            </CardContent>
                        </Card>}
                </Grid>
            </Grid>
        </>
    );
}

export default Communicate;
