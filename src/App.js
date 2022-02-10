import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CardCarrinho from './components/CardCarrinho';

class App extends React.Component {
  updateAppState = (entries, callbackFunction) => {
    this.setState({ ...entries }, () => callbackFunction);
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleClick = () => {
    console.log('handleClick', this.state.searchInput)
  }

  handleOnKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('handleOnKeyDown', this.state)
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
        </Switch>
      </BrowserRouter>);
  }
}

export default App;
