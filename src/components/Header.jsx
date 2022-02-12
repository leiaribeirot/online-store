import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import IconHome from './IconHome';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <IconHome />
        <h1> Front-End Online Store </h1>
        <Link to="/CardCarrinho" className="cartIcon" data-testid="shopping-cart-button">
          <AiOutlineShoppingCart />
        </Link>

      </div>
    );
  }
}

export default Header;