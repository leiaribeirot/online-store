import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Input from '../components/Input';
import CategoriesSidebar from '../components/CategoriesSidebar';
import CardList from '../components/CardList';
import Header from '../components/Header';
import '../Styles/Header.css';

class Home extends Component {
  render() {
    const {
      searchInput,
      handleChange,
      handleClick,
      handleOnKeyDown,
      handleAddProduct,
    } = this.props;

    return (
      <div>
        <Header />
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
        <CardList { ...this.props } onAddProduct={ handleAddProduct } />
        <CategoriesSidebar { ...this.props } />
      </div>
    );
  }
}
Home.propTypes = {
  searchInput: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleOnKeyDown: PropTypes.func.isRequired,
  handleAddProduct: PropTypes.func.isRequired,
};

Home.defaultProps = {
  searchInput: '',
};
export default Home;
