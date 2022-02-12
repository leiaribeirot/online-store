import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CardCarrinho extends Component {
  addtoCartItem= (product) => {
    const { cartItems, updateAppState } = this.props;
    const indexOfFoundItem = cartItems
      .findIndex((cartItem) => cartItem.id === product.id);
    const foundItem = cartItems[indexOfFoundItem];
    foundItem.quantity += 1;
    foundItem.totalPrice += foundItem.price;
    updateAppState({ cartItems });
  }

  removeFromCartItem = (product) => {
    const { cartItems, updateAppState } = this.props;
    const indexOfFoundItem = cartItems
      .findIndex((cartItem) => cartItem.id === product.id);
    const foundItem = cartItems[indexOfFoundItem];
    foundItem.quantity -= 1;
    foundItem.totalPrice -= foundItem.price;
    if (foundItem.quantity <= 0) {
      const cartWithoutProduct = cartItems
        .filter((cartItem) => cartItem.id !== product.id);
      updateAppState({ cartItems: cartWithoutProduct });
      return;
    }

    updateAppState({ cartItems });
  }

  render() {
    const { cartItems } = this.props;

    return (
      <div>
        {
          cartItems.length > 0
            ? (cartItems.map((item) => (
              <div key={ item.id }>
                <p data-testid="shopping-cart-product-name">{item.title}</p>
                <p data-testid="shopping-cart-product-quantity">
                  {`Quantidade: ${item.quantity}`}
                </p>
                <p>{`Total: R$ ${item.totalPrice}`}</p>
                <button
                  data-testid="product-decrease-quantity"
                  type="button"
                  onClick={ () => this.removeFromCartItem(item) }
                >
                  -
                </button>
                <button
                  data-testid="product-increase-quantity"
                  type="button"
                  onClick={ () => this.addtoCartItem(item) }
                >
                  +
                </button>
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
  updateAppState: PropTypes.func.isRequired,
};
