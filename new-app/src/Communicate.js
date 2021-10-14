import './App.css';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Communicate() {
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
                    <Card variant='outlined' maxWidth="lg" style={{ flex: 1, backgroundColor: '#bd84f5' }}>
                        <CardContent>
                            <Typography>
                                <h2>
                                    Chat Log Area
                                </h2>
                            </Typography>

                            <Card variant='outlined' maxWidth="sm" style={{ flex: 1, backgroundColor: '#d4a8ff' }}>
                                <CardContent>
                                    <Typography>
                                        Past Messages go here
                                    </Typography>
                                </CardContent>
                            </Card>
                            <br/>
                            <TextField id="outlined-basic" label="" variant="outlined" />
                            <br/><br/>
                            <Button style={{ color: 'white' }} color="secondary" size="large" variant="contained">Send</Button>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}

export default Communicate;
