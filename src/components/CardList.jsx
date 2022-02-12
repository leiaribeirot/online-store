import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends Component {
  render() {
    const { searchResults, onAddProduct } = this.props;
    return (
      <div>
        <p>Product List</p>
        { searchResults.map((result) => (
          <Card
            key={ result.id }
            dataId="product"
            productName={ result.title }
            imageId="product-detail-link"
            price={ result.price }
            src={ result.thumbnail }
            productId={ result.id }
            onAddProduct={ () => onAddProduct(result) }
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
