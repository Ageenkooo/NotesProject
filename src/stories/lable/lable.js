import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';

const LableS = styled.p`
	&.center{
		text-align : center;
		width : 100%;
	}
  &.property {
		color : #8253D7;
		font-size : 1em;
	}
	&.notImportant{
		font-size : 0.8em;
		color: #CABBE9;
		padding: 1em;
	}
  color : #430F58;
	font-size : 1.5em;
	font-family: Geneva, Arial, Helvetica, sans-serif;
	font-weight : 500;
`;
const Lable = ({children, className, onClick})=>(
	<LableS  className={cn( className)}
		onClick = {onClick}
	>
	{children}
	</LableS>
);

Lable.propTypes = {
	children : PropTypes.string.isRequired,
	onClick : PropTypes.func,
};

export default Lable;
