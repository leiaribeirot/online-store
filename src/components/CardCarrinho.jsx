import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CardCarrinho extends Component {
  render() {
    const { cartItems } = this.props;

    return (
      <div>
        {
          cartItems.length > 0
            ? (cartItems.map((item) => (
              <div key={ item.id }>
                <span data-testid="shopping-cart-product-name">{item.title}</span>
                <span data-testid="shopping-cart-product-quantity">{item.quantity}</span>
              </div>
            )))
            : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        }
      </div>
    );
  }
}

CardCarrinho.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};
