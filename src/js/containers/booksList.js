import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {select} from '../actions/index';
import Item from '../../stories/item/item';
import Input from '../../stories/input/input';
import Button from '../../stories/button/button'
import Div from '../../stories/div/div'
import * as BookActions from '../actions';
import PropTypes from 'prop-types'

class BooksList extends Component{
  state = {
      text: this.props.text || ''
  }

  static propTypes = {
    text: PropTypes.string,
    placeholder: PropTypes.string,
  }

  handleSubmit = e => {
      const text = e.target.value.trim()
      if (e.which === 13) {
        if (text.length !== 0) {
          this.props.actions.addBook(text)
        }
          this.setState({ text: '' })
      }
  }

  handleChange = e => {
      this.setState({ text: e.target.value })
  }

  showList(){
    return this.props.books.map ((book) => {
      return (
        <Div key={book.id} className="flex flex-center">
          <Item className={book.id === this.props.book.id ? 'chosen ' + 'color' : 'color' } onClick={()=>this.props.actions.select(book)}  name={book.book}>
            <Button className="small"  onClick={() =>{ this.props.actions.deleteBook(book.id), this.props.actions.deleteAll(book)}}>x</Button>
          </Item>
        </Div> );
      });
  }

  render(){
    return (
          <div>
            {this.showList()}
            <Input placeholder="new book" value={this.state.text}
              onChange={this.handleChange}
              onKeyDown={this.handleSubmit}></Input>
              </div>
            )
          }
}

function mapStateToProps(state){
    return {
        books: state.books,
        book: state.active,
        notes: state.notes
    };
}

const matchDispatchToProps = dispatch => ({
  actions: bindActionCreators(BookActions, dispatch)
})
export default connect(mapStateToProps, matchDispatchToProps)(BooksList);
