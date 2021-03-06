import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';

const FormS = styled.form`
	&.center{
		margin : 30px auto;
	}
	&.longer{
		height: 77vh;
	}
	&.shorter{
		height: 30vh;
	}
	border-radius : 5px;
	width : 400px;
	height : 55vh;
	padding : 0.5em;
	box-shadow: 0px 0px 32px 0px rgba(140,140,140,1);
`;
const Form = ({children, className, onClick})=>(
	<FormS  className={cn( className)}
					onClick = {onClick}>
					{children}
	</FormS>
);

Form.propTypes = {
	onClick : PropTypes.func,
};

export default Form;
