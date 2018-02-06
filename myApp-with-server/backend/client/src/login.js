import React, { Component } from 'react';
import Lable from './stories/lable/lable';
import Form from './stories/form/form';
import Input from './stories/input/input';
import Button from './stories/button/button';
import { Link } from 'react-router-dom'

class LogIn extends Component {
  render() {
    return (
      <Form className="center">
        <Lable className="center">Sign in</Lable>
        <br/>
        <Lable className="center medium">Your e-mail</Lable>
        <Input type="text" className="center"/>
        <Lable  className="center medium">Password</Lable>
        <Input type="password" className="center"/>
        <br/>
        <Link exact to="/app">
          <Button className="center">Yep</Button>
        </Link>
      </Form>
    );
  }
}

export default LogIn;
