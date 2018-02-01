import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';

const ButtonS = styled.button`
  background: white ;
  color: #461B93;
 &.primary{
	 color : white;
	 background : #461B93;
 };
 &.center{
	 display: block;
	 margin-left: auto;
	 margin-right: auto ;
 };
  font-size: 1.2em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #461B93;
  border-radius: 3px;
	cursor : pointer;
`;

class Button extends React.Component {
  render() {
    return <ButtonS  className={cn( this.props.className)}
                      onClick = {this.props.onClick}
            >
              hey
            </ButtonS>;
  }
}


Button.propTypes = {
	children : PropTypes.string.isRequired,
	onClick : PropTypes.func,
};

export default Button;
