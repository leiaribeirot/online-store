import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineShoppingCart } from 'react-icons/ai';

export default class CartLink extends Component {
  render() {
    return (
      <Link
        to="/cart"
        data-testid="shopping-cart-button"
      >
        <AiOutlineShoppingCart />
      </Link>
    );
  }
}

// No link precisa redicionar para a página que você quer Exibir a busca que no caso
// é a página CART com a mensagem exigina no Requisito
