import './App.css';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "firebase/compat/database";

function Resources() {

    return (
        <>
            <Typography color="primary">
                <h1>
                    <b>
                        Resources
                    </b>
                </h1>
                <h3>
                    Use this page to get any additional resources from trusted sources!
                </h3>

                <Card variant='outlined' maxWidth="md" style={{ flex: 1, backgroundColor: '#bd84f5' }}>
                    <CardContent>
                        <h2>Tech Starters Resources </h2>
                        <b><a
                            href={'https://sites.google.com/view/tech-starters/home'}
                            target="_blank"
                            rel="noopener noreferrer">
                            Tech Starters Website
                        </a></b>
                        <br />Website contains the timeline, which contains meeting presentations, itinerary, and links to catch up/review material!
                        <br/>
                        <b>Email: wwtechstarters@gmail.com </b> <br />
                    </CardContent>
                </Card>
                <br/>
                <Card variant='outlined' maxWidth="md" style={{ flex: 1, backgroundColor: '#bd84f5' }}>
                    <CardContent>
                        <h2> React Resources </h2>
                        <b><a
                            href={'https://docs.google.com/document/d/1AgR4K6MNtAJ6BBtJaeGgsBYChp6Ig_k3VxO76TqFW1s/edit?usp=sharing'}
                            target="_blank"
                            rel="noopener noreferrer">
                            One Stop Shop
                        </a></b><br />
                        This contains everything you need to get started making a React web app, connecting to Firebase, example projects, and more! <br/> 
                        <b><a
                            href={'https://mui.com/getting-started/installation/'}
                            target="_blank"
                            rel="noopener noreferrer">
                            Getting Started with MUI
                        </a></b><br />
                        A component database for adding buttons, sliders, navigation bars, and more into a React web app! <br />

                        <h3>Examples Projects: </h3>
                        <b><a
                            href={'https://traveljournal-ts.web.app/'}
                            target="_blank"
                            rel="noopener noreferrer">
                            Travel Journal App
                        </a></b> <br/>
                        <b><a
                            href={'https://techstarters-demo.herokuapp.com/'}
                            target="_blank"
                            rel="noopener noreferrer">
                            COVID-19 Questionnairre App
                        </a></b>
                    </CardContent>
                </Card>
                <br/>
                <Card variant='outlined' maxWidth="md" style={{ flex: 1, backgroundColor: '#bd84f5' }}>
                    <CardContent>
                        <h2> Other Resources </h2>
                        <b><a
                            href={'https://nodejs.org/en/download/'}
                            target="_blank"
                            rel="noopener noreferrer">
                            Node.js
                        </a></b><br />
                        <b><a
                            href={'https://visualstudio.microsoft.com/downloads/'}
                            target="_blank"
                            rel="noopener noreferrer">
                            Visual Studio
                        </a></b><br />
                        <b><a
                            href={'https://www.figma.com/'}
                            target="_blank"
                            rel="noopener noreferrer">
                            Figma
                        </a></b><br />
                        <b><a
                            href={'https://firebase.google.com/?authuser=1'}
                            target="_blank"
                            rel="noopener noreferrer">
                            Firebase
                        </a></b><br />
                    </CardContent>
                </Card>
            </Typography>
        </>
    );
}

export default Resources;