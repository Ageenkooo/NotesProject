import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {select} from '../actions/index';
import * as CarActions from '../actions';

class CarsList extends Component {

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
          this.props.actions.addCar(text)
        }
          this.setState({ text: '' })
      }
  }

  handleChange = e => {
      this.setState({ text: e.target.value })
  }

  render(){
    return (
      <div>
        <input
          type="text"
          placeholder={this.props.placeholder}
          value={this.state.text}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit}
        />
        <ul >
          {this.props.cars.map((car) =>
            <li key={car.id} >{car.text}</li>
          )}
        </ul>
  </div>
)
}
}

const mapStateToProps = state => ({
  cars: state.cars
})

const matchDispatchToProps = dispatch => ({
  actions: bindActionCreators(CarActions, dispatch)
})

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(CarsList);
