import './App.css';
import React, {useState} from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import pic from "./pic.jpg";
import NavBar from "./NavBar";
import Router from "./Router";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import symbol from "./symbol.png";
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/firestore';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

const firebaseConfig = {
    apiKey: "AIzaSyBGGfrsUkMIHZVq6_y1Q8t9lkH7DETDH08",
    authDomain: "start-it-techstarters.firebaseapp.com",
    databaseURL: "https://start-it-techstarters-default-rtdb.firebaseio.com",
    projectId: "start-it-techstarters",
    storageBucket: "start-it-techstarters.appspot.com",
    messagingSenderId: "918971002225",
    appId: "1:918971002225:web:c75981f5c611d402465ad0",
    measurementId: "G-6YXCD3HTCP"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
    signInFlow: 'popup',
    signInOptions: [
      // List of OAuth providers supported.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: "/"
    // Other config options...
  });


const theme = createTheme({
    typography: {
        fontFamily: [
            'Play',
            'sans-serif',
        ].join(','),
    },
});

function App(props) {
    const [user, setUser] = useState(false);
    const [busy, setBusy] = useState(true);
    
    firebase.auth().onAuthStateChanged((firebaseUser) => {
        
        if (firebaseUser) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // ...
        setUser(true);
        } else {
        // User is signed out
        // ...
        setUser(false);
        }
        setBusy(false);
    });
    
    const signOut = () => {
        firebase.auth().signOut().then(() => {
            props.history.push({
                pathname: "/"
            });
            window.location.reload();
        });
    }
    
    return (
      <ThemeProvider theme={theme}>
          <div className="App" style={{ backgroundImage: `url(${pic})`}}>
              <Container maxWidth="xl" style={{ backgroundColor: '#001736', display: busy ? "none" : "", minHeight: "100vh" }}>
                    <Typography className="font-link" color='primary' variant='h1' style={{ paddingTop: ".4em" }}>
                    <img src={symbol} alt="Symbol" width="6.5%" height="6.5%" />
                      <b color='primary'>
                            Start-IT: Tech Starters 
                      </b>
                  </Typography>
                    {!user ? 
                    <div>
                        <div id='firebaseui-auth-container' /></div> :
                    <div>
                        <NavBar logout={signOut}/>
                        <Router/>
                    </div>}
              </Container>
          </div>
       </ThemeProvider>
  );
}

export default App;
