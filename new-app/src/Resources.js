import './App.css';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import firebase from "firebase/compat/app";
import "firebase/compat/database";

function Resources() {

    return (
        <>
            <Typography color="primary">
                <h1>
                    <b>
                        Other Resources
                    </b>
                </h1>
                <h3>
                    Use this page to get any additional resources from trusted sources!
                </h3>

                <Card variant='outlined' maxWidth="md" style={{ flex: 1, backgroundColor: '#bd84f5' }}>
                    <CardContent>
                        Resources
                    </CardContent>
                </Card>
            </Typography>
        </>
    );
}

export default Resources;