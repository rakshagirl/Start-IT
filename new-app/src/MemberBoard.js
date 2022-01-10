import './App.css';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

function MemberBoard() {
    
    return (
        <>
            <Typography color="primary">
                <h1>
                    <b>
                        Member Inspiration Board
                    </b>
                </h1>
                <h3>
                    Here are some submissions from your fellow current and past members on their product inspiration challenge!
                </h3>

                <Card variant='outlined' maxWidth="md" style={{ flex: 1, backgroundColor: '#bd84f5' }}>
                    <CardContent>
                        Hello
                    </CardContent>
                </Card>
            </Typography>
        </>
    );
}

export default MemberBoard;