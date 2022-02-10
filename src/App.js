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

  render() {
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
              />) }
          />
          <Route exact path="/CardCarrinho" component={ CardCarrinho } />
          <Route path="/product-details/:productId" render={ (props) => <ProductDetails { ...this.props } /> } />
        </Switch>
      </BrowserRouter>);
  }
}

export default App;
