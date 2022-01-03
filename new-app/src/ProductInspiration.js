import './App.css';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function ProductInspiration() {
    return (
        <>
            <Typography color="primary">
                <h1>
                    <b>
                        Product Inspiration
                    </b>
                </h1>
                <h3>
                    Use this page to find random bursts of inspiration for your next product idea! 
                </h3>
                
                <Card variant='outlined' maxWidth="md" style={{ flex: 1, backgroundColor: '#bd84f5' }}>
                    <CardContent>
                        <p>Did you know Mark Zuckerburg got the idea for Facebook by trying to hack Harvard's security network on a whim? Or how 
                            Jeff Bezos started Amazon after wanting to find an easy way to read books virtually? 
                        </p>
                        <h4>Creativity can come from anywhere.</h4>
                        <a
                            className="App-link"
                            href="https://www.thebalancesmb.com/more-creative-entrepreneurs-4023945"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        Ways to Generate Creative Ideas!
                        </a>
                    </CardContent>
                </Card>
            </Typography>

        </>
    );
}

export default ProductInspiration;