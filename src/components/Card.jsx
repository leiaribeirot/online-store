import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  render() {
    const { dataId, productName, src, price, productId } = this.props;
    return (
      <Link to={ `/product-details/${productId}` }>
        <div data-testid={ dataId }>
          <h2>
            { productName }
          </h2>
          <Link to="/">
            <img src={ src } alt={ `Imagem do produto: ${productName}` } />
          </Link>
          <span>{ price }</span>
        </div>
      </Link>
    );
  }
}

Card.propTypes = {
  dataId: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
// test
