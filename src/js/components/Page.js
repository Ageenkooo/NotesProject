import React from 'react';
import BooksList from '../containers/booksList';
import Notes from '../containers/notes';
import Lable from '../../stories/lable/lable';
import Form from '../../stories/form/form';
import Input from '../../stories/input/input';
import Button from '../../stories/button/button';
import Div from '../../stories/two-col-layout/two-col-layout';
import Item from '../../stories/item/item';
import User from '../../stories/user/user';

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
    <Div className="right flex flex-center">
        <Div><Input></Input></Div>
        <Div><Lable className="notImportant"> here must be a date </Lable></Div>
    </Div>
  </Div>
  </div>
);

export default Page;
