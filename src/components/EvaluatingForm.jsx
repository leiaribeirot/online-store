import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import PropTypes from 'prop-types';

export default class EvaluatingForm extends Component {
  constructor() {
    super();
    this.state = { // estado inicial
      user: '',
      validadeEmail: false,
      comment: '',
      rating: 0,

    };
    this.MIN_NAME_LENGTH = 3; // o construtor encherga as funções que queremos mostrar
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value, name } }) { // Mudando o estado apenas com 3 caracteres obrigatório pro email
    this.setState({
      [name]: value,
      validadeEmail: value.length >= this.MIN_NAME_LENGTH,
    });
  }

  onEvaluationClic = () => {
    const { user, comment, rating } = this.state;
    const { match: { params: { id } } } = this.props;
    const arrayOfEvaluation = JSON.parse(localStorage.getItem('evaluations'));
    const evaluation = { user, comment, id, rating };

    if (arrayOfEvaluation) {
      arrayOfEvaluation.push(evaluation);
      localStorage.setItem('evaluations', JSON.stringify(arrayOfEvaluation));
    } else {
      localStorage.setItem('evaluations', JSON.stringify([evaluation]));
    }
    this.setState({
      user: '',
      validadeEmail: false,
      comment: '',
      rating: 0,
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
              numberOfStars={ 1 }
              name="rating"
              starDimension="1.5em"
              starSpacing="0.5em"
            />
            <StarRatings
              rating={ rating }
              defaultValue={2}
              starRatedColor="rgb(255, 194, 25)"
              starHoverColor="rgb(255, 194, 25)"
              changeRating={ this.handleStarChange }
              numberOfStars={ 1 }
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
              data-testid="product-detail-email"
            />
          </div>
          <div>
            <textarea
              id="comment"
              name="comment"
              value={ comment }
              data-testid="product-detail-evaluation"
              placeholder="Comentários"
              onChange={ this.handleChange }
            />
          </div>
          <button
            data-testid="submit-review-btn"
            type="button"
            disabled={ !validadeEmail }
            onClick={ this.onEvaluationClic }
          >
            AVALIA
          </button>
        </form>
      </div>
    );
  }
}
EvaluatingForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
