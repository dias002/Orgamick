import React, { Component } from 'react'

export class card extends Component {
  render() {
    return (
      <div>
        <div className="card">
            <img src='/img/cart.svg' alt="Product" />
            <h2>{this.props.item.title}</h2>
            <p>${this.props.item.price.toFixed(2)}</p>
            <button>Add to Cart</button>
        </div>
      </div>
    )
  }
}

export default card
