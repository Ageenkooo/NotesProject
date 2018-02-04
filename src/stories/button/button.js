import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';

const ButtonS= styled.a`
color: #6C567B;
background: white ;
text-decoration: none;
user-select: none;
font-size: 1.2em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #6C567B;
border-radius: 3px;
cursor : pointer;
&.small {
  font-size: 0.8em;
  padding: 0.25em 0.6em;
}
:hover {
  color: white;
  border:2px solid #6C567B;
  background : #6C567B;
 }
:active {
  background: #6C567B;
  color: white;
  border:1px solid #C06C84;
 }
`;

class Button extends React.Component {
  render() {
    return <ButtonS type="button" className={cn( this.props.className)}
                      onClick = {this.props.onClick}
            >
              {this.props.children}

            </ButtonS>;
  }
}


Button.propTypes = {
	children : PropTypes.string.isRequired,
	onClick : PropTypes.func,
};

export default Button;
