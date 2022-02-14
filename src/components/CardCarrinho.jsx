import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import '../Styles/cardCarrinho.css';

export default class CardCarrinho extends Component {
  getCartQuantity() {
    const { cartItems } = this.props;

    let sum = 0;
    cartItems.forEach((element) => {
      sum += element.cartQuantity;
    });

    return sum;
  }

  addtoCartItem= (product) => {
    const { cartItems, updateAppState, isAddButtonDisabled } = this.props;
    const indexOfFoundItem = cartItems
      .findIndex((cartItem) => cartItem.id === product.id);
    const foundItem = cartItems[indexOfFoundItem];
    foundItem.cartQuantity += 1;
    foundItem.totalPrice += foundItem.price;
    foundItem.isAddDisabled = isAddButtonDisabled(product);
    updateAppState({ cartItems });
  }

  removeFromCartItem = (product) => {
    const { cartItems, updateAppState, isAddButtonDisabled } = this.props;
    const indexOfFoundItem = cartItems
      .findIndex((cartItem) => cartItem.id === product.id);
    const foundItem = cartItems[indexOfFoundItem];
    foundItem.cartQuantity -= 1;
    foundItem.totalPrice -= foundItem.price;
    foundItem.isAddDisabled = isAddButtonDisabled(product);
    if (foundItem.cartQuantity <= 0) {
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
        <Header cartNumberOfItems={ this.getCartQuantity() } />
        {
          cartItems.length > 0
            ? (cartItems.map((item) => (
              <div key={ item.id }>
                <p data-testid="shopping-cart-product-name">{item.title}</p>
                <p data-testid="shopping-cart-product-quantity">
                  {`Quantidade: ${item.cartQuantity}`}
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
                  disabled={ item.isAddDisabled }
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
  isAddButtonDisabled: PropTypes.func.isRequired,
};
