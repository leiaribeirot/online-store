import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { AiOutlineShoppingCart } from 'react-icons/ai';

export default class CartLink extends Component {
  render() {
    const { itemCount } = this.props;

    return (
      <Link
        key={ itemCount }
        className="cart-link"
        to="/cart"
        data-testid="shopping-cart-button"
      >
        <AiOutlineShoppingCart />
        <span data-testid="shopping-cart-size">{itemCount}</span>
      </Link>
    );
  }
}

CartLink.propTypes = {
  itemCount: PropTypes.number.isRequired,
};
