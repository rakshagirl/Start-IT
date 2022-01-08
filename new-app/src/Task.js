import './App.css';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import firebase from "firebase/compat/app";

function Task(props) {

    //function convertDate(UTCSec) {
        //var d = new Date(0);
        //d.setUTCSeconds(UTCSec);
        //d.setHours(d.getHours() - d.getTimezoneOffset() / 60);
        //return (d).toLocaleString();
    //}

    async function deleteTask() {
        if(window.confirm("Are you sure you have finished completing this task? ")){
            var userId = firebase.auth().currentUser.uid;
            var ref = firebase.database().ref(userId + "/tasks/" + "/active/" + props.id);
            await firebase.database().ref(userId + "/tasks/" + "/finished/").push().set({
                text: props.text,
                deadline: props.date
              });
            await ref.remove();
        }
    }

    return (
      <>
      
      <Card width='10vw' variant='outlined' style={{flex:1, backgroundColor:'#bd84f5'}}>
          <CardContent>
              <Typography>
                  <h3>{props.text}</h3> <b>Deadline: </b> 
                  {props.date} <br/> <br/>
              </Typography>
              <Button color="inherit" variant="contained" onClick={deleteTask}>Done</Button>
              <br></br>
          </CardContent>
      </Card>
      <br></br>
      </>
  
    );
  }
  
  export default Task;
  