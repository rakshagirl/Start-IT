import './App.css';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import firebase from "firebase/compat/app";
import { useState, useEffect } from 'react';

function Task(props) {
    const [past, setPast] = useState(false);

    function convertDate(UTCSec) {
        var d = new Date(0);
        d.setUTCSeconds(UTCSec);
        d.setHours(d.getHours() - d.getTimezoneOffset() / 60);
        return (d).toLocaleString();
    }

    async function doneTask() {
        if(window.confirm("Are you sure you have finished completing this task? ")){
            var userId = firebase.auth().currentUser.uid;
            var ref = firebase.database().ref(userId + "/tasks/" + "/active/" + props.id);
            await firebase.database().ref(userId + "/tasks/" + "/finished/").push().set({
                text: props.text,
                deadline: props.date,
                assignedMember: props.assignedMember
              });
            await ref.remove();
        }
    }

    async function deleteTask(){
        if(window.confirm("Are you sure you wish to delete this task? ")){
            var userId = firebase.auth().currentUser.uid;
            var ref = firebase.database().ref(userId + "/tasks/" + "/active/" + props.id);
            ref.remove();
        }
    }

    useEffect(() => {
        const start = Date.now();
        const utcSecCheck = Math.round(start / 1000);
        if (utcSecCheck > props.date) {
            setPast(true);
        }
    }, []);

    return (
      <>
      
      <Card width='10vw' variant='outlined' style={{flex:1, backgroundColor:'#bd84f5'}}>
          <CardContent>
              <Typography>
                  <h3>{props.text}</h3> 
                  <b>Assigned Member: </b>
                        {props.assignedMember}<br />

             {past ? <div>
                        <b>Deadline: </b>
                            <b style={{ color: 'red' }}>
                                {convertDate(props.date)}
                            </b> <br /> <br />
                    </div>
                    : 
                    <div>
                        <b>Deadline: </b>
                        {convertDate(props.date)} <br /> <br />
                    </div>
             }

              </Typography>
              
              <Button 
                style={{
                    backgroundColor: "#ff0f57"
                }}
                variant="contained" 
                size="large"
                onClick={deleteTask}
                >
                Delete
              </Button>
            <Button
                size="large"
                color="inherit"
                variant="contained"
                style={{
                    backgroundColor: '#bfc5d6',
                    margin: "7px"
                }}
                onClick={doneTask}
            >
                Done
            </Button>
              
              <br></br>
          </CardContent>
      </Card>
      <br></br>
      </>
    );
  }
  
  export default Task;
  