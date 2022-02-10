import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  render() {
    const { dataId, text, src, alt, preco} = this.props;
    return (
      <div data-testid={dataId}>
        <h2>
          { text }
        </h2>
        <Link to={}>
          <img src={ src} alt={ alt }/>
        </Link>
        <span>{ preco }</span>
      </div>
    );
  }
}

Card.propTypes = {
  dataId: PropTypes.string,
  text: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  preco: PropTypes.number,
}

export default Card;
