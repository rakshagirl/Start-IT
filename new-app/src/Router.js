import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Body from './Body.js';
import Tasks from './Tasks.js';
import Communicate from './Communicate.js';
import ProductInspiration from './ProductInspiration.js';
import Footer from './Footer.js';
import './App.css';
import EditProjectInfo from './EditProjectInfo.js';
import EditMembers from './EditMembers.js';
import AddTask from './AddTask.js';

export default function Router() {

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Body} />
                    <Route exact path="/tasks" component={Tasks} />
                    <Route exact path="/communicate" component={Communicate} />
                    <Route exact path="/inspiration" component={ProductInspiration} />
                    <Route exact path="/edit_info" component={EditProjectInfo} />
                    <Route exact path="/edit_members" component={EditMembers} />
                    <Route exact path="/add_task" component={AddTask} />
                </Switch>
                <Footer/>
            </BrowserRouter>
        </>
    );
}