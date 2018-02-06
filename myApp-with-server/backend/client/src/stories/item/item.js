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
const Div = styled.div`
	cursor: pointer;
	&.chosen{
		background-color : #FAFCDB;
    border-bottom: 2px solid  #CABBE9 !important;
	}
	&.left{
		width : 100%;
	}
	&.color{
		border : 1px solid #FAFCDB;
		border-top-right-radius:5px;
		border-bottom-right-radius:5px;
	}
	padding: 0em 1em;
	width : 220px;
	display : flex;
	flex-direction : row;
	justify-content : space-between;
`;

class Item extends React.Component{
	render(){
		return <Div className={this.props.className} onClick = {this.props.onClick}>
			<LableS  className={this.props.className} onDoubleClick={this.props.onDoubleClick}  >
				{this.props.name}
			</LableS>
			{this.props.children}
		</Div>
	}
}
export default Item;
