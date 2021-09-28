import './App.css';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import pic from "./pic.jpg";
import NavBar from "./NavBar";
import Router from "./Router";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import symbol from "./symbol.png";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBGGfrsUkMIHZVq6_y1Q8t9lkH7DETDH08",
    authDomain: "start-it-techstarters.firebaseapp.com",
    projectId: "start-it-techstarters",
    storageBucket: "start-it-techstarters.appspot.com",
    messagingSenderId: "918971002225",
    appId: "1:918971002225:web:c75981f5c611d402465ad0",
    measurementId: "G-6YXCD3HTCP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const theme = createTheme({
    typography: {
        fontFamily: [
            'Play',
            'sans-serif',
        ].join(','),
    },
});

function App() {
    return (
      <ThemeProvider theme={theme}>
          <div className="App" style={{ backgroundImage: `url(${pic})`}}>
              <Container maxWidth="xl" style={{ backgroundColor: '#001736', minHeight: "100vh" }}>
                    <Typography className="font-link" color='primary' variant='h1' style={{ paddingTop: ".4em" }}>
                    <img src={symbol} alt="Symbol" width="6.5%" height="6.5%" />
                      <b color='primary'>
                            Start-IT: Tech Starters 
                      </b>
                  </Typography>
                  <div>
                      <NavBar />
                      <Router/>
                  </div>
              </Container>
          </div>
       </ThemeProvider>
  );
}

export default App;
