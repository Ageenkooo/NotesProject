import React, {Component} from 'react';
import {connect} from 'react-redux';
import Item from './stories/item/item'
import Input from './stories/input/input'
import Button from './stories/button/button'
import * as BookActions from './js/actions';
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux';

var MarkdownEditor = require('react-markdown-editor').MarkdownEditor;

class TestComponent extends React.Component{
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
          this.addLable(text)
        }
          this.setState({ text: '' })
      }
  }
  addLable(text){
    this.props.note.lables = [...this.props.note.lables, text]
  }
  handleChange = e => {
      this.setState({ text: e.target.value })
  }
    changeNote(val){
      this.props.note.text  = val;
    }
    showLables(note){
      return  (this.props.lables.map((lable) => {
        if(lable.id === note.id)
        return <span key={lable.id}>{lable}</span>
      }))
    }
    showMarkDown(){
          return this.props.notes.map ((note) => {
            if(note.id===this.props.note.id)
              return (<div>
              <MarkdownEditor  initialContent={note.text}  iconsSet="font-awesome"/>
              <div>
              Lables: {note.lables.map((lable) => {return <span key={lable.id}>#{lable} </span>})}
              </div>
              <br/>
              <Input placeholder="add lable" value={this.state.text}
                    onChange={this.handleChange}
                    onKeyDown={this.handleSubmit}></Input>
              <Button onClick={()=>{this.changeNote(document.getElementsByClassName('md-editor-textarea')[0].value)}}>Add note</Button>
              </div>);
          });

      }
    render(){
      if(!this.props.note){
        return (<div>
        <p>Here will be a text of chosen note</p>
        </div>)
      }
      return (
        <div>
          {this.showMarkDown()}
        </div>
      );
    }
}
function mapStateToProps(state){
  return {
    note: state.actNote,
    notes: state.notes
  };
}
const matchDispatchToProps = dispatch => ({
  actions: bindActionCreators(BookActions, dispatch)
})
export default connect(mapStateToProps,matchDispatchToProps)(TestComponent);
