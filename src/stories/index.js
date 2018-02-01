import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import  Button from './button/button';
import  Input from './input/input';
import Lable from './lable/lable';
import Form from './form/form';
import Item from './item/item';
import User from './user/user';
import Books from './books/books';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
   .add('with text', () => <Button onClick={action('clicked')}> Submit </Button> )
   .add('with text2', () => <Button className="primary" onClick={action('clicked')}> Submit </Button> );
storiesOf('Input', module)
   .add('default', () => <Input  onClick={action('clicked')}/> )
   .add('disabled', () => <Input disabled="disabled" className ="disabled" onClick={action('clicked')}/> );
storiesOf('Lable', module)
   .add('default', () => <Lable  onClick={action('clicked')}> Some lable text </Lable> )
   .add('not important lable', () => <Lable className="notImportant" onClick={action('clicked')}> Some lable text </Lable>)
   .add('for property', () => <Lable className="property" onClick={action('clicked')}> Some lable text </Lable> );
storiesOf('Form', module)
   .add('default', () => <Form  onClick={action('clicked')}> Some form text </Form> );
storiesOf('Item', module)
   .add('book', () => <Item className="book color" onClick={action('clicked')}> Some name book text </Item> )
   .add('notepad', () => <Item className="notepad" onClick={action('clicked')}> Some name book text </Item> )
   .add('chosen book', () => <Item className="book chosen" onClick={action('clicked')}> Some name book text </Item> )
   .add('chosen notepad', () => <Item className="notepad chosen" onClick={action('clicked')}> Some name book text </Item> );
storiesOf('User', module)
   .add('user', () => <User  onClick={action('clicked')}> Some name book text </User> );
storiesOf('Books', module)
    .add('Books', () => <Books/ > );
