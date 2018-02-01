import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';

const InputS = styled.input`
	:active, :hover, :focus {
		outline: 0;
		outline-offset: 0;
	}
	&.center{
		width : 180px;
		display: block;
    margin-left: auto;
    margin-right: auto ;
	}
	&.disabled {
		border-bottom: 2px solid #D5DEF5;
		background: #EEEEEE;
	}
	width : 100px;
  color: #461B93;
  font-size: 1em;
  padding: 0.5em 1em;
  border-bottom: 2px solid #461B93;
	border-top : 0px;
	border-right : 0px;
	border-left : 0px;
  border-radius: 3px;
`;


const Input = ({className, onChange, disabled, type, placeholder, value, onKeyDown})=>(
	<InputS className={cn( className)} type={type}
		onChange = {onChange} placeholder={placeholder} disabled={disabled} value={value} onKeyDown={onKeyDown}/>
);
export default Input;
