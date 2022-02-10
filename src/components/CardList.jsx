import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends Component {
  render() {
    const { searchResults } = this.props;
    return (
      <div>
        Product List
        { searchResults.map((result) => (
          <Card
            key={ result.id }
            dataId="product"
            productName={ result.title }
            price={ result.price }
            src={ result.thumbnail }
          />))}
      </div>
    );
  }
}

CardList.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.object),
};

CardList.defaultProps = {
  searchResults: [],
};

export default CardList;
