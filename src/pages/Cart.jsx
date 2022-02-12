import React, { Component } from 'react';
import HomeIcon from '../components/HomeIcon';

export default class Cart extends Component {
  render() {
    return (
      <>
        <HomeIcon />
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
      </>
    );
  }
}
