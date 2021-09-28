import './App.css';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

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
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}

export default Communicate;
