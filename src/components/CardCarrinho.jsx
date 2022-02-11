import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CardCarrinho extends Component {
  state = {
    cartList: [],
  }

  componentDidMount = () => {
    this.generateCartList();
  }

  generateCartList = () => {
    const { cartItems } = this.props;
    const cartList = cartItems.reduce((cartListAcc, currCartItem) => {
      const indexOfCartItem = cartListAcc
        .findIndex((cartListItem) => cartListItem.id === currCartItem.id);

      if (indexOfCartItem >= 0) {
        cartListAcc[indexOfCartItem].quantity += 1;
        cartListAcc[indexOfCartItem].totalPrice += currCartItem.price;
        return cartListAcc;
      }
      const newCartObj = { ...currCartItem };
      newCartObj.totalPrice = currCartItem.price;
      const accumulatorArray = [...cartListAcc, newCartObj];
      return accumulatorArray;
    }, []);
    this.setState({ cartList });
  }

  addToCartList= (item) => {
    const { cartList } = this.state;
    const foundItem = cartList.find((listItem) => listItem.id === item.id);
    foundItem.quantity += 1;
    foundItem.totalPrice += foundItem.price;
    const updatedCartlist = { ...cartList, ...foundItem };
    this.setState({ cartList: [updatedCartlist] });
  }

  removeFromCartList= (item) => {
    const { cartList } = this.state;
    const foundItem = cartList.find((listItem) => listItem.id === item.id);
    foundItem.quantity -= 1;
    foundItem.totalPrice -= foundItem.price;
    const updatedCartlist = { ...cartList, ...foundItem };
    this.setState({ cartList: [updatedCartlist] });
  }

  render() {
    const { cartItems } = this.props;
    const { cartList } = this.state;

    return (
      <div>
        {
          cartItems.length > 0
            ? (cartList.map((item) => (
              <div key={ item.id }>
                <p data-testid="shopping-cart-product-name">{item.title}</p>
                <p data-testid="shopping-cart-product-quantity">
                  {`Quantidade: ${item.quantity}`}
                </p>
                <p>{`Total: R$ ${item.totalPrice}`}</p>
                <button
                  data-testid="product-decrease-quantity"
                  type="button"
                  onClick={ () => this.removeFromCartList(item) }
                >
                  -
                </button>
                <button
                  data-testid="product-increase-quantity"
                  type="button"
                  onClick={ () => this.addToCartList(item) }
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
};
