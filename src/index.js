import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App'
import './css/style.css';

const Stage = ()=> <Redirect to={process.env.PUBLIC_URL + '/stage'}></Redirect>;

ReactDOM.render(
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Stage} />
            <Route exact path={process.env.PUBLIC_URL + '/:choice'} component={App} />
        </Switch>
    </HashRouter>, document.getElementById('root'));