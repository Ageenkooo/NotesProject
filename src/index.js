import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import main from './main';
import Red from './code/index';
import Books from './js/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Lable> djsfsl</Lable>, document.getElementById('root'));
ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route exact path="/red" component={Red} />
                <Route exact path="/test" component={Books} />
                <Route exact path="/app" component={App} />
                <Route exact path="/main" component={main} />
            </Switch>
        </BrowserRouter>,
        document.getElementById("root")
    )

registerServiceWorker();
