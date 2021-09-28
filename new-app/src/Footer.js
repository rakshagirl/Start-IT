import React from "react";
import logo from "./logo.png";
import './App.css';
import divider from "./divider.png";
import { Typography } from '@mui/material';

function Footer() {
    return (
        <div>
            <br/><br/>
            <img src={divider} alt="Divider" width="60%" height="60%" />
            <br />
            <br></br>
            <Typography>
                <b style={{ color: '#1a67b0' }}>Any questions or comments? Email wwtechstarters@gmail.com</b>
            </Typography>
            <br></br>
            <img src={logo} alt="Logo" width="10%" height="10%" />
            <br></br>
        </div>
    );
}

export default Footer;