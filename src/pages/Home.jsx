import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <input />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/CardCarrinho" data-testid="shopping-cart-button">
          Carrinho de Compras
        </Link>
      </div>
    );
  }
}
export default Home;
