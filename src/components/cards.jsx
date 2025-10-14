import React, { Component } from 'react';
import Item from './card';

export class Cards extends Component {
  render() {

    return (
      <div>
        {this.props.items.map(el => (
            <Item key={el.id} item={el}/>
        ))}
      </div>
    );
  }
}

export default Cards;
