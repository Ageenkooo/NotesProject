import React from 'react';
import ReactDOM from 'react-dom';
import LogIn from './login';
import Registration from './registration';
import Main from './main';
import App from './app';
import Books from './js/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route exact path="/main" component={Main} />
                <Route exact path="/app" component={Books} />
                <Route exact path="/login" component={LogIn} />
                <Route exact path="/" component={App} />
                <Route exact path="/registration" component={Registration} />
            </Switch>
        </BrowserRouter>,
        document.getElementById("root")
    )

registerServiceWorker();
