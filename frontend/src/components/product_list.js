import React, { Component } from 'react';

export class ProductList extends Component {
  render() {
    const products = this.props.products.map((product, i) => {
      return <Product key={i}>{product}</Product>;
    });
    console.log(products)
    return (
      <ul>
        {products}
      </ul>
    );
  }
}

class Product extends Component {
    render() {
      return (
        <li>{this.props.children}</li>
      );
    }
}
