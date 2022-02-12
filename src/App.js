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
    searchResults.forEach((result) => { result.isAddDisabled = false; });
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
      foundItem.cartQuantity += 1;
      foundItem.totalPrice += foundItem.price;
      foundItem.availability = this.isAddButtonDisabled(product);
      this.setState({ cartItems });
      return;
    }
    product.cartQuantity = 1;
    product.availability = this.isAddButtonDisabled(product);
    product.totalPrice = product.price;
    this.checkAvalabilityOfResults(product);
    this.setState({ cartItems: [...cartItems, product] });
  }

  checkAvalabilityOfResults = (product) => {
    const { searchResults } = this.state;
    const indexOfResultsItem = searchResults
      .findIndex((resultItem) => resultItem.id === product.id);
    const foundResult = searchResults[indexOfResultsItem];
    foundResult.isAddDisabled = this.isAddButtonDisabled(foundResult);
    this.setState({ searchResults });
  }

  isAddButtonDisabled = ({ cartQuantity, available_quantity: availableQuantity }) => {
    if (cartQuantity === availableQuantity) {
      return true;
    }
    return false;
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
                isAddButtonDisabled={ this.isAddButtonDisabled }
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
