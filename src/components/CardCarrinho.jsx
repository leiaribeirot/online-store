import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
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
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return;
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateAppState({ cartItems });
  }

  render() {
    const { cartItems } = this.props;
    return (

      <div className="cart-body">
        <Header cartNumberOfItems={ this.getCartQuantity() } />
        <div className="cart">
          {
            cartItems.length > 0
              ? (cartItems.map((item) => (
                <div className="cart-item" key={ item.id }>
                  <img alt={ item.name } src={ item.thumbnail } />
                  <p data-testid="shopping-cart-product-name">{item.title}</p>
                  <p data-testid="shopping-cart-product-quantity">
                    {`Quantidade: ${item.cartQuantity}`}
                  </p>
                  <p>{`Total: R$ ${item.totalPrice}`}</p>
                  <button
                    className="addButton"
                    data-testid="product-decrease-quantity"
                    type="button"
                    onClick={ () => this.removeFromCartItem(item) }
                  >
                    -
                  </button>
                  <button
                    className="addButton"
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
        <div className="cartLink">
          <Link
            className="link"
            data-testid="checkout-products"
            to="/checkout"
          >
            <p>Comprar</p>
          </Link>
        </div>
      </div>
    );
  }
}
CardCarrinho.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateAppState: PropTypes.func.isRequired,
  isAddButtonDisabled: PropTypes.func.isRequired,
};
