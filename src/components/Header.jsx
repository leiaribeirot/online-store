import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import IconHome from './IconHome';

class Header extends Component {
  getCartQuantity() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') ?? '[]');

    let sum = 0;
    cartItems.forEach((element) => {
      sum += element.cartQuantity;
    });

    return sum;
  }

  render() {
    return (
      <div className="header">
        <IconHome />
        <h1> Front-End Online Store </h1>
        <Link to="/CardCarrinho" className="cartIcon" data-testid="shopping-cart-button">
          <AiOutlineShoppingCart />
          <span data-testid="shopping-cart-size">{this.getCartQuantity()}</span>
        </Link>

      </div>
    );
  }
}

export default Header;
