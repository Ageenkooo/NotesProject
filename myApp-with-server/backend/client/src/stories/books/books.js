import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import Item from '../item/item';
import Lable from '../lable/lable';
import Input from '../input/input';

const propsValues = {
    title: "your books",
    items: [
        "first book",
        "second book",
        "third book",
        "fourth book",
        "fifth book",
        "six book"
    ]
};

  class Books extends React.Component {
      constructor(props){
          super(props);
          this.state = { items: propsValues.items};

      }

      render() {
          return(
              <div>
                  <Lable>{propsValues.title}</Lable>
                      {
                          this.state.items.map(function(item){
                              return <Item className="left" key={item} name={item} />
                          })
                      }
              </div>);
      }
  }

export default Books;
