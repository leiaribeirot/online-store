import React from 'react';
import PropTypes from 'prop-types';

class PurchaseItem extends React.Component {
  render() {
    // const { price, imageId, productName } = this.props; // PUXEI DO CARD, MAS N SEI SE É ISSO MESMO - VOU COMENTRA E CRIAR UM NOVO
    // SE N FOR SUBSTITUIR COMO TÁ EMBAIXO
    const { amount, price, thumbnail, title } = this.props;
    return (
      <div className="item">
        <img src={ thumbnail } alt={ title } />
        <div>
          <p>
            <strong>Nome do Produto: </strong>
            { title }
          </p>
          <p>
            <strong>Quantidade: </strong>
            { amount }
          </p>
          <p>
            <strong>Preço: RS$ </strong>
            { price }
          </p>
        </div>
      </div>
    );
  }
}

PurchaseItem.propTypes = {
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default PurchaseItem;
