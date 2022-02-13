import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import PropTypes from 'prop-types';
import IconHome from './IconHome';

class Header extends Component {
  render() {
    const { cartNumberOfItems } = this.props;
    return (
      <div className="header">
        <IconHome />
        <h1> Front-End Online Store </h1>
        <Link to="/CardCarrinho" className="cartIcon" data-testid="shopping-cart-button">
          <AiOutlineShoppingCart />
          <span data-testid="shopping-cart-size">{cartNumberOfItems}</span>
        </Link>

      </div>
    );
  }
}

export default Header;

Header.propTypes = {
  cartNumberOfItems: PropTypes.number,
};

Header.defaultProps = {
  cartNumberOfItems: 0,
};
