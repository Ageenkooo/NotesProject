import React, {Component} from 'react';
import {connect} from 'react-redux';
import Item from '../../stories/item/item'
import * as BookActions from '../actions';
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux';


class Notes extends Component{

  showNotes(){
        return this.props.notes.map ((note) => {
          if(note.book_id===this.props.book.id)
            return (<Item key={note.id} name ={note.name} ></Item>);
        });
    }
  render(){
    if(!this.props.book){
      return (<Item name="Choose a book"></Item>)
    }
    return (
      <div>
      <ul>
        {this.showNotes()}
      </ul>
      <button onClick={()=>this.props.actions.addNote(this.props.book)} >+</button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    book: state.active,
    notes: state.notes
  };
}
const matchDispatchToProps = dispatch => ({
  actions: bindActionCreators(BookActions, dispatch)
})
export default connect(mapStateToProps,matchDispatchToProps)(Notes);
