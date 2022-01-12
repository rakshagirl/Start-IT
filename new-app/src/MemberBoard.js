import './App.css';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import firebase from "firebase/compat/app";
import "firebase/compat/database";

function MemberBoard() {
    const [memberIdeas, setMemberIdeas] = useState(null);
    //const [showAllIdeas, setShowAllIdeas] = useState(false);

    useEffect(() => {
        var starCountRef = firebase.database().ref("memberIdeas");
        starCountRef.on('value', (snapshot) => {
            const data = snapshot.val();
            setMemberIdeas(data);
        });
    }, []);

    function convertDate(UTCSec) {
        var d = new Date(0);
        d.setUTCSeconds(UTCSec);
        d.setHours(d.getHours() - d.getTimezoneOffset() / 60);
        return (d).toLocaleString();
    }

    /*if (memberIdeas != null) {
        var currentIdeas = Object.keys(memberIdeas).reverse();
        if (!showAllIdeas) {
            currentIdeas = currentIdeas.slice(0, 5);
        }
    }*/

    return (
        <>
            <Typography color="primary">
                <h1>
                    <b>
                        Member Inspiration Board
                    </b>
                </h1>
                <h3>
                    Here are some submissions from your fellow current and past members on their product inspiration challenge!
                </h3>
                
                {memberIdeas != null ? Object.keys(memberIdeas).map((i) => {
                    return <div>
                        <Typography>
                            <Card variant='outlined' maxWidth="md" style={{ flex: 1, backgroundColor: '#babedb' }}>
                                <CardContent>
                                    <b><h3>Names: {memberIdeas[i]["names"]} </h3> </b>
                                    <b>Submitted on: </b>{convertDate(memberIdeas[i]['date'])} <br />
                                    {console.log(i["date"])}
                                    <b>Random Words: </b>{memberIdeas[i]['words']}<br /><br/>
                                    {memberIdeas[i]['text']}<br />
                                    
                                </CardContent>
                            </Card>
                        </Typography>
                    </div>
                }) : null}
                <br/>
                {/*<Button
                    style={{ color: 'white' }}
                    color="secondary"
                    size="large"
                    variant="contained"
                    onClick={() => setShowAllIdeas(!showAllIdeas)}
                >
                    Show All Ideas
                </Button>*/}
            </Typography>
        </>
    );
}

export default MemberBoard;