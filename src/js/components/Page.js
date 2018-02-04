import React from 'react';
import BooksList from '../containers/booksList';
import Notes from '../containers/notes';
import Lable from '../../stories/lable/lable';
import Form from '../../stories/form/form';
import Input from '../../stories/input/input';
import Button from '../../stories/button/button';
import Div from '../../stories/div/div';
import Item from '../../stories/item/item';
import User from '../../stories/user/user';
import TestComponent from '../../demo'

const Page = () => (
  <div>
  <Div className="flex flex-right">
    <User>User</User>
  </Div>
  <hr/>
  <Div className="flex center flex-left">
    <Div className="left">
      <Lable>Your books</Lable>
      <BooksList/>
    </Div>
    <Div className="middle">
      <Lable>Your notes</Lable>
      <Notes/>
    </Div>
    <Div className="right ">
        <TestComponent/>
    </Div>
  </Div>
  </div>
);

export default Page;
