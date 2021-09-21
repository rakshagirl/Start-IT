import './App.css';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import pic from "./pic.jpg";
import NavBar from "./NavBar";
import Router from "./Router";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
      <div className="App" style={{ backgroundImage: `url(${pic})`}}>
          <Container maxWidth="xl" style={{ backgroundColor: '#001624', minHeight: "100vh" }}>
              <Typography className="font-link" color='primary' variant='h1' style={{ paddingTop: ".4em" }}>
                  <b>
                      Start-IT: Tech Starters 
                  </b>
              </Typography>
              <div>
                  <NavBar />
                  <Router/>
              </div>
          </Container>
    </div>
  );
}

export default App;
