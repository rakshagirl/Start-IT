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
                    Incoming Tasks
                </h1>
            </Typography>
            
            <Card variant='outlined' maxWidth="md" style={{ flex: 1, backgroundColor: '#bd84f5' }}>
                <CardContent>
                    <h3>
                        No tasks here!
                    </h3>
                    
                </CardContent>
            </Card>
            <br></br><br></br>
            <Button style={{ color: 'white' }} color="primary" size="large" variant="contained">Add Task</Button>
        </>
    );
}

export default Tasks;
