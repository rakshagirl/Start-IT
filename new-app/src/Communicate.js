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
                    Communicate
                </h1>
            </Typography>
            <Grid
                container
                spacing={0}
                direction="column"
                justify="center"
                style={{ minHeight: '100vh' }}>
                <Grid item xs={8} md={8}>
                    <Card variant='outlined' maxWidth="lg" style={{ flex: 1, backgroundColor: '#bd84f5' }}>
                        <CardContent>
                            <h3>
                                Chat Log Area
                            </h3>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}

export default Communicate;
