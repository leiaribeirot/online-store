import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import { fetchItem } from '../services/api';

class ProductDetails extends Component {
  componentDidMount = async () => {
    const { match: { params: { id } }, updateAppState } = this.props;
    const currentProductDetailed = await fetchItem(id);
    updateAppState({ currentProductDetailed });
  }

  render() {
    const {
      currentProductDetailed: { title, thumbnail, price, attributes },
    } = this.props;
    return (
      <div>
        <h1 data-testid="product-detail-name">
          {title}
        </h1>
        <img src={ thumbnail } alt={ `Imagem do produto ${title}` } />
        <p>{`R$ ${price.toLocaleString('pt-br')}` }</p>
        <p>Especificações Técnicas</p>
        <div>
          {attributes.map(({ name: attName, id, value_name: valueName }) => (
            <p
              key={ id }
            >
              {`${attName}: `}
              <span>
                { valueName}
              </span>
            </p>
          ))}
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  // currentProductDetailed: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.array])),
  currentProductDetailed: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    attributes: PropTypes.arrayOf(PropTypes.object),
  }),
  match: PropTypes.instanceOf(Route).isRequired,
  updateAppState: PropTypes.func.isRequired,
};

ProductDetails.defaultProps = {
  currentProductDetailed: {
    title: '',
    price: '',
    attributes: [],
  },
};

export default ProductDetails;
