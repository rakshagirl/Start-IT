import './App.css';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Tasks() {
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
                            No tasks here!
                        </h3>
                    </Typography>
                </CardContent>
            </Card>
            <br></br><br></br>
            <Button style={{ color: 'white' }} color="primary" size="large" variant="contained" href='/add_task' >Add Task</Button>
        </>
    );
}

export default Tasks;
