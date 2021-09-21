import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';;

function NavBar() {

    return (
        <div className="NavBar">
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" size="large" href="/" >Home</Button>
                    <Button color="inherit" size='large' href="/tasks" >Tasks</Button>
                    <Button color="inherit" size='large' href="/communicate" >Communicate</Button>
                    <Button color="inherit" size='large' href="/meeting" >Meeting Availability</Button>
                    <div style={{ float: 'right' }}>
                        <Button color="inherit" size="large" href="/" >Logout</Button>
                    </div>
                </Toolbar>
            </AppBar>
            <br />
        </div>
    );
}

export default NavBar;