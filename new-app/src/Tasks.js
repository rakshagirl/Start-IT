import './App.css';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import firebase from "firebase/app";
import React, {useState, useEffect} from 'react';
import Task from "./Task";

function Tasks() {
    const [tasks, setTasks] = useState(null);

    useEffect(() => {
        var userId = firebase.auth().currentUser.uid;
        var starCountRef = firebase.database().ref(userId + "/tasks/");
        starCountRef.on('value', (snapshot) => {
            const data = snapshot.val();
            setTasks(data);
            console.log(data);
        });
    }, []);

    return (
        <>
            <Typography color="primary">
                <h1>
                    <b>
                        Tasks
                    </b>
                </h1>
            </Typography>
            <Typography color="primary">
                <h3>
                    Check off incoming tasks as you complete them and add new ones to keep track of work!
                </h3>
            </Typography>
            
            <Card variant='outlined' maxWidth="md" style={{ flex: 1, backgroundColor: '#bd84f5' }}>
                <CardContent>
                    <Typography>
                        <h3>
                            Here are your pending tasks!
                        </h3>
                    </Typography>
                </CardContent>
            </Card>
            {tasks != null ? Object.keys(tasks).map((task) => {
              var deadline = tasks[task]['deadline'];
              console.log("HELLO", deadline);
                <br></br>
              return <Task text={task}/>
          }) : null}
            <br></br><br></br>
            <Button style={{ color: 'white' }} color="primary" size="large" variant="contained" href='/add_task' >Add Task</Button>
        </>
    );
}

export default Tasks;
