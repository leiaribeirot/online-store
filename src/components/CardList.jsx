import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends Component {
  render() {
    const { searchResults, onAddProduct } = this.props;
    return (
      <div>
        Product List
        { searchResults.map((result) => (
          <Card
            key={ result.id }
            dataId="product"
            productName={ result.title }
            imageId="product-detail-link"
            price={ result.price }
            src={ result.thumbnail }
            productId={ result.id }
            onAddProduct={ onAddProduct }
          />))}
      </div>
    );
  }
}

CardList.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.object),
  onAddProduct: PropTypes.func.isRequired,
};

CardList.defaultProps = {
  searchResults: [],
};

export default CardList;
