import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import ProductList from './components/ProductList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ ProductList } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

// Requisito 2 - ok
// Ele pediu apenas uma rota vazia com uma lista para pesquisa de Produtos
