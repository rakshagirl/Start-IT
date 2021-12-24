import './App.css';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import firebase from "firebase/compat/app";

function Task(props) {

    function deleteTask() {
        if(window.confirm("Are you sure you have finished completing this task? ")){
            var userId = firebase.auth().currentUser.uid;
            var ref = firebase.database().ref(userId + "/tasks/" + props.text);
            ref.remove();
        }
    }

    return (
      <>
      
      <Card width='10vw' variant='outlined' style={{flex:1, backgroundColor:'#bd84f5'}}>
          <CardContent>
              <Typography>
                  {props.text}
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
  