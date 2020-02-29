import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App'
import './css/style.css';

const Stage = ()=> <Redirect to='/stage'></Redirect>;

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Stage} />
            <Route exact path="/:choice" component={App} />
        </Switch>
    </BrowserRouter>, document.getElementById('root'));