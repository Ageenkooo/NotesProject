import React, {Component} from 'react';
import {connect} from 'react-redux';
import Item from '../../stories/item/item'
import Input from '../../stories/input/input'
import * as BookActions from '../actions';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import Button from '../../stories/button/button';
import Div from '../../stories/div/div';

class Notes extends Component{
  constructor(props){
    super(props);
    this.state = {text: this.props.text || ''};
  }

  handleSubmit = e => {
    const text = e.target.value.trim()
    if (e.which === 13) {
      if (text.length !== 0) {
        this.props.actions.addNote(this.props.book, text)
      }
      this.setState({ text: '' })
    }
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }
  showNotes(){
    return this.props.notes.map ((note) => {
      if(note.book_id===this.props.book.id && !this.props.book.deleted)
        return (<div>
                  <Div key={note.id} className="flex flex-center">
                    <Item className={note.id === this.props.note.id ? 'chosen ' + 'color' : 'color' }
                          onClick={()=>{this.props.actions.selectNote(note)}} key={note.id} name ={note.name}>
                          <Button className="small" onClick={()=>this.props.actions.deleteNote(note.id)}>x</Button>
                    </Item>
                  </Div>
                </div>
                );
        });
    }

    // filterList(e){
    //     var filteredList = this.props.notes.filter(function(note){
    //         var result = note.lables.reduce(function(sum, current) {
    //             return sum + current;
    //         }, 0);
    //         return result.toLowerCase().search(e.target.value.toLowerCase())!== -1;
    //     });
    //     this.props.notes=filteredList;
    // }

  render(){
    if(Object.keys(this.props.book).length === 0 || this.props.book.deleted){
      return (
        <div><Item name="Choose a book"></Item></div>)
    }
    return (
      <div>
        <ul>
          {this.showNotes()}
          </ul>
          <Input placeholder="new note" value={this.state.text}
            onChange={this.handleChange}
            onKeyDown={this.handleSubmit}></Input>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    book: state.active,
    notes: state.notes,
    lables: state.lable,
    note: state.actNote
  };
}
const matchDispatchToProps = dispatch => ({
  actions: bindActionCreators(BookActions, dispatch)
})
export default connect(mapStateToProps,matchDispatchToProps)(Notes);
