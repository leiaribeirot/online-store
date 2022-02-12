import React, { Component } from 'react';
import CartLink from './CartLink';

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <CartLink />
        </p>
      </div>
    );
  }
}
