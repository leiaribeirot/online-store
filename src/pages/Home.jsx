import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../components/Input';

class Home extends Component {
  render() {
    const { searchInput, handleChange } = this.props;

    return (
      <div>
        <Input
          type="text"
          labelId="home-initial-message"
          labelText="Digite algum termo de pesquisa ou escolha uma categoria."
          value={ searchInput }
          name="searchInput"
          onChange={ handleChange }
        />
      </div>);
  }
}

Home.propTypes = {
  searchInput: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

Home.defaultProps = {
  searchInput: '',
};

export default Home;
