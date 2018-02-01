import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Lable from './stories/lable/lable';
import Form from './stories/form/form';
import Input from './stories/input/input';
import Button from './stories/button/button';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Form className="center">
        <Lable className="center">Sign in</Lable>
        <br/>
        <Lable className="center property">Your e-mail</Lable>
        <Input className="center"/>
        <Lable  className="center property">Password</Lable>
        <Input type="password" className="center"/>
        <br/>
        <Link exact to="/main">
          <Button className="center">Yep</Button>
        </Link>
      </Form>
    );
  }
}

export default App;
