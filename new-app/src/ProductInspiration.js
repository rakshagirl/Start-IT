import './App.css';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import firebase from "firebase/compat/app";
import "firebase/compat/database";

function ProductInspiration() {
    const [text, setText] = useState(null);
    const [names, setNames] = useState(null);
    const [words, setWords] = useState(null);
    const [error, setError] = useState(null);

    async function onSubmit() {
        if (text.length === 0 || names.length === 0 || words.length === 0) {
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
        await firebase.database().ref("memberIdeas/" + userId).set({
            names: names,
            words: words,
            text: text,
            date: utcSec
        });
        /*setText("");
        setNames("");
        setWords("");*/
    }

    return (
        <>
            <Typography color="primary">
                <h1>
                    <b>
                        Product Inspiration Challenge
                    </b>
                </h1>
                <h3>
                    Use this page to find random bursts of inspiration for your next product idea! 
                </h3>
                
                <Card variant='outlined' maxWidth="md" style={{ flex: 1, backgroundColor: '#bd84f5' }}>
                    <CardContent>
                        <h3>A Tech Starters exclusive day-one challenge...</h3>
                        <p>You have 20 minutes to create an entire product or business idea based on the random 3 words generated below.
                            Only one click allowed! You can work in groups of 3-4 to build your idea.</p>

                        <Card variant='outlined' maxWidth="md" style={{ flex: 1, backgroundColor: '#d4a8ff' }}>
                            <CardContent>
                                Put random word API here
                            </CardContent>
                        </Card>
                        <b><h3>Here are the items your idea needs to have:</h3>
                            - A product or brand name <br/>
                            - A list of the products or services your company would provide <br />
                            - The purpose of your product & your target market <br />
                            - How you would physically make/develop it OR how you would monetize it <br/>
                        </b>

                        <p>You can write your ideas in the text field below. Happy brainstorming!</p>

                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '40ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            
                            <TextField
                                id="outlined-multiline-static"
                                placeholder="Team Member Names (First Names Only!)"
                                variant="outlined"
                                value={names}
                                onChange={(event) => setNames(event.target.value)}
                            />
                            <br/> 
                            <TextField
                                id="outlined-multiline-static"
                                placeholder="Your Random Three Words"
                                variant="outlined"
                                value={words}
                                onChange={(event) => setWords(event.target.value)}
                            />
                        </Box>
                        <br />

                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '100ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >

                            <TextField
                                id="outlined-multiline-static"
                                multiline
                                rows={10}
                                placeholder="Start your idea generation here!"
                                variant="outlined"
                                fullWidth
                                value={text}
                                onChange={(event) => setText(event.target.value)}
                            />
                        </Box>
                        <h3>By clicking Submit, you give Tech Starters permission to share your business idea and names on our global list for business ideas below.
                            <br/>You do not have to click Submit, but we would love to have other students read your work!</h3>
                        <Button style={{ color: 'white' }} color="secondary" size="large" variant="contained" onClick={onSubmit} >Submit</Button>
                    </CardContent>
                </Card>
            </Typography>

        </>
    );
}

export default ProductInspiration;