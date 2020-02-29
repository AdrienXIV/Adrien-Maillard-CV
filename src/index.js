import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App'
import './css/style.css';

const Stage = ()=> <Redirect to={'/stage'}></Redirect>;

ReactDOM.render(
    <HashRouter basename="/">
        <Switch>
            <Route exact path={'/'} component={Stage} />
            <Route exact path={'/:choice'} component={App} />
        </Switch>
    </HashRouter>, document.getElementById('root'));