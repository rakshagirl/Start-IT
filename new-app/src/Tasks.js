import './App.css';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import firebase from "firebase/compat/app";
import React, {useState, useEffect} from 'react';
import Task from "./Task";
import { tileProps } from 'react-calendar/dist/umd/shared/propTypes';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Tasks() {
    const [activeTasks, setActiveTasks] = useState(null);
    const [finishedTasks, setFinishedTasks] = useState(null);
    const [showAllTasks, setShowAllTasks] = useState(false);

    useEffect(() => {
        var userId = firebase.auth().currentUser.uid;
        var starCountRef = firebase.database().ref(userId + "/tasks/" + "/active");
        starCountRef.on('value', (snapshot) => {
            const data = snapshot.val();
            setActiveTasks(data);
        });
    }, []);

    useEffect(() => {
        var userId = firebase.auth().currentUser.uid;
        var starCountRef = firebase.database().ref(userId + "/tasks/" + "/finished");
        starCountRef.on('value', (snapshot) => {
            const data = snapshot.val();
            setFinishedTasks(data);
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
                <h2>
                Here are your pending tasks:
                </h2>
            </Typography>
            
            {activeTasks != null ? Object.keys(activeTasks).map((task) => {
              let deadline = activeTasks[task]['deadline'];
              let text = activeTasks[task]['text'];
              return <Task text={text} date={deadline} id={task}/>
          }) : null}
            <br></br>
            <Button style={{ color: 'white' }} color="primary" size="large" variant="contained" href='/add_task' >Add Task</Button>
            <br/> <br/>
            <Button style={{ color: 'white' }} color="secondary" size="medium" variant="contained" onClick={() => setShowAllTasks(!showAllTasks)} >Show/Hide Finished Tasks</Button>
            <br/><br/>
            {showAllTasks ? Object.keys(finishedTasks).map((t) => {
                                                return <div>
                                                    <Typography>
                                                        <Card variant='outlined' maxWidth="md" style={{ flex: 1, backgroundColor: '#babedb' }}>
                                                            <CardContent>
                                                                <b><h3>{finishedTasks[t]["text"]} <br/> </h3>Deadline: </b>{finishedTasks[t]['deadline']}
                                                            </CardContent>
                                                        </Card>
                                                    </Typography>
                                                </div>
                                            }) : null}
        </>
    );
}

export default Tasks;
