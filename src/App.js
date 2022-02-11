import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CardCarrinho from './components/CardCarrinho';
import { getProductsFromCategoryAndQuery } from './services/api';
import ProductDetails from './pages/ProductDetails';

class App extends React.Component {
  state = {
    searchInput: '',
    cartItems: [],
  }

  updateAppState = (entries, callbackFunction) => {
    this.setState({ ...entries }, callbackFunction);
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleClick = async () => {
    const { searchInput, categoryId } = this.state;
    const queryResponse = await getProductsFromCategoryAndQuery(categoryId, searchInput);
    const searchResults = queryResponse.results;
    this.setState({ searchResults });
  }

  handleOnKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  }

  handleAddProduct = (product) => {
    const { cartItems } = this.state;
    const indexOfCartItem = cartItems
      .findIndex((cartListItem) => cartListItem.id === product.id);

    if (indexOfCartItem >= 0) {
      const foundItem = cartItems[indexOfCartItem];
      foundItem.quantity += 1;
      foundItem.totalPrice += foundItem.price;
      this.setState({ cartItems });
      return;
    }
    product.quantity = 1;
    product.totalPrice = product.price;
    this.setState({ cartItems: [...cartItems, product] });
  }

  render() {
    const { cartItems } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (
              <Home
                { ...this.state }
                handleChange={ this.handleChange }
                updateAppState={ this.updateAppState }
                handleClick={ this.handleClick }
                handleOnKeyDown={ this.handleOnKeyDown }
                handleAddProduct={ this.handleAddProduct }
              />) }
          />
          <Route
            exact
            path="/CardCarrinho"
            component={ () => (
              <CardCarrinho
                cartItems={ cartItems }
                updateAppState={ this.updateAppState }
              />) }
          />
          <Route
            path="/product-details/:id"
            render={ (props) => (
              <ProductDetails
                { ...props }
                { ...this.state }
                updateAppState={ this.updateAppState }
                handleAddProduct={ this.handleAddProduct }
              />) }
          />
        </Switch>
      </BrowserRouter>);
  }
}

export default App;
