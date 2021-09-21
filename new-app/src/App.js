import './App.css';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import pic from "./pic.jpg";
import NavBar from "./NavBar";
import Router from "./Router";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
