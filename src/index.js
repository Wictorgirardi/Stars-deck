import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from "./pages/Home";
import Login from "./pages/Login";
import Eventos from "./pages/Eventos";


ReactDOM.render(<BrowserRouter>
    <Switch>
    <Route exact path="/home" component={Home}></Route>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/eventos" component={Eventos}></Route>
    </Switch>
</ BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
