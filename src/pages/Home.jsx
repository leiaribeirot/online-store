import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import CategoriesSidebar from '../components/CategoriesSidebar';

class Home extends Component {
  render() {
    const { searchInput, handleChange, handleClick, handleOnKeyDown } = this.props;

    return (
      <div>
        <Input
          type="text"
          labelId="home-initial-message"
          inputId="query-input"
          labelText="Digite algum termo de pesquisa ou escolha uma categoria."
          value={ searchInput }
          name="searchInput"
          onChange={ handleChange }
          onKeyDown={ handleOnKeyDown }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ handleClick }
        >
          Pesquisar
        </button>
        <Link to="/CardCarrinho" data-testid="shopping-cart-button">
          Carrinho de Compras
        </Link>
        <CategoriesSidebar { ...this.props } />
      </div>
    );
  }
}
Home.propTypes = {
  searchInput: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func,
  handleOnKeyDown: PropTypes.func,
};

Home.defaultProps = {
  searchInput: '',
};
export default Home;
