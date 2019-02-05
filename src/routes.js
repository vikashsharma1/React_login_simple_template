import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';


const Routes=() => (
    <BrowserRouter>
    <Switch>
        <Route exact path= '/' component={Welcome}/>
        <Route path= '/login' component={Login}/>
        <Route path= '/signup' component={Signup}/>
        <Route path= '/home' component={Home}/>
        <Route path= '/welcome' component={Welcome}/>
        <Route path= '*' component={PageNotFound}/>
    </Switch>
    </BrowserRouter>
);

export default Routes;