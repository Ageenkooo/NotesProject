import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import book from '../../img/book.svg';
import notepad from '../../img/notepad.svg';

const LableS = styled.p`
  color : #430F58;
	font-size : 1em;
	font-family: Geneva, Arial, Helvetica, sans-serif;
	font-weight : 500;
`;
const ImgS = styled.img`
  &.notepad{
		background-image : url(${notepad});
	}
	&.book{
		background-image : url(${book});
	}
	width : 30px;
	height : 30px;
	margin : 10px;
	background-repeat : no-repeat;
	background-size : 100% 100%;
`;
const Div = styled.div`
	&.chosen{
		background-color :#E1FFCF;
	}
	&.left{
		width : 100%;
	}
	&.color{
		background-color : #D5DEF5;
		border-top-right-radius:5px;
		border-bottom-right-radius:5px;
	}
	width : 220px;
	display : flex;
	flex-direction : row;
	justify-content : left;
`;

class Item extends React.Component{
	render(){
		return <Div className={this.props.className}>
			<LableS  className={this.props.className} onClick = {this.props.onClick} >
				{this.props.name}
			</LableS>
		</Div>
	}
}
export default Item;
