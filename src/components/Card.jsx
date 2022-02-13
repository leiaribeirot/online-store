import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  render() {
    const {
      dataId,
      productName,
      src,
      price,
      productId,
      imageId,
      onAddProduct,
      isAddDisabled,
      freeShipping,
    } = this.props;

    return (
      <div>
        <Link to={ `/product-details/${productId}` }>
          <div data-testid={ dataId }>
            <h2>
              { productName }
            </h2>
            <img
              data-testid={ imageId }
              src={ src }
              alt={ `Imagem do produto: ${productName}` }
            />
            <p>
              { `Preço: RS$ ${price}` }
            </p>
          </div>
        </Link>
        {freeShipping && <p data-testid="free-shipping">Frete Grátis</p>}
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ onAddProduct }
          disabled={ isAddDisabled }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  dataId: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  productId: PropTypes.string.isRequired,
  imageId: PropTypes.string.isRequired,
  onAddProduct: PropTypes.func.isRequired,
  isAddDisabled: PropTypes.bool.isRequired,
  freeShipping: PropTypes.bool.isRequired,
};

export default Card;