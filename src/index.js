import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import main from './main';
import TestComponent from './demo';
import Books from './js/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Lable> djsfsl</Lable>, document.getElementById('root'));
ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route exact path="/main" component={Books} />
                <Route exact path="/app" component={App} />
                <Route exact path="/test" component={main} />
            </Switch>
        </BrowserRouter>,
        document.getElementById("root")
    )

registerServiceWorker();
