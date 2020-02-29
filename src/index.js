import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App'
import './css/style.css';

const Stage = ()=> <Redirect to='/stage'></Redirect>;

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Stage} />
            <Route exact path={process.env.PUBLIC_URL + '/:choice'} component={App} />
        </Switch>
    </BrowserRouter>, document.getElementById('root'));