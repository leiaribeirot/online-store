import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import PropTypes from 'prop-types';

export default class EvaluetingForm extends Component {
  constructor() {
    super();
    this.state = { // estado inicial
      user: '',
      validadeEmail: false,
    };
    this.MIN_NAME_LENGTH = 3; // o construtor encherga as funções que queremos mostrar
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value } }) { // Mudando o estado apenas com 3 caracteres obrigatório pro email
    this.setState({
      user: value,
      validadeEmail: value.length >= this.MIN_NAME_LENGTH,
    });
  }

  handleStarChange = (rating) => {
    this.setState({
      rating,
    });
  };

  render() {
    const { user, validadeEmail, rating, comment } = this.state;
    return (
      <div>
        <h1>Avaliações</h1>
        <form onSubmit={ this.handleSubmit }>
          <div>
            <StarRatings
              rating={ rating }
              starRatedColor="rgb(255, 194, 25)"
              starHoverColor="rgb(255, 194, 25)"
              changeRating={ this.handleStarChange }
              numberOfStars={ 5 }
              name="rating"
              starDimension="1.5em"
              starSpacing="0.5em"
            />
          </div>
          <div>
            <input
              id="user"
              name="user"
              value={ user }
              type="text"
              placeholder="Email"
              onChange={ this.handleChange }
            />
          </div>
          <div>
            <textarea
              id="comment"
              name="comment"
              value={ comment }
              data-testid="product-detail-evaluation"
              placeholder="Comentários"
            />
          </div>
          <button
            type="submit"
            disabled={ !validadeEmail }
          >
            AVALIAR
          </button>
        </form>
      </div>
    );
  }
}
EvaluetingForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
