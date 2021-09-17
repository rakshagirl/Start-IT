import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';;

function NavBar() {



    return (
        <div className="NavBar">
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" href="/" >Home</Button>
                </Toolbar>
            </AppBar>
            <br />
        </div>
    );
}

export default NavBar;