import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Body from './Body.js';
import Tasks from './Tasks.js';
import Communicate from './Communicate.js';
import MeetingAvailability from './MeetingAvailability.js';

export default function Router() {

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Body} />
                    <Route exact path="/tasks" component={Tasks} />
                    <Route exact path="/communicate" component={Communicate} />
                    <Route exact path="/meeting" component={MeetingAvailability} />
                </Switch>
            </BrowserRouter>
        </>
    );
}