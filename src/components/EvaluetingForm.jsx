import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-rating-component';

export default class EvaluatingForm extends Component {
  constructor() {
    super();

    this.state = {
      rating: 0,
      comment: '',
      user: '',
    };
  }

  handleClick = (event, addEvaluation) => {
    event.preventDefault();

    const { id } = this.props;

    addEvaluation({ ...this.state, id });

    this.setState({
      rating: 0,
      comment: '',
      user: '',
    });
  };

  handleStarChange = (rating) => {
    this.setState({
      rating,
    });
  };

  render() {
    const { rating, user } = this.state;

    return (
      <div className="evaluation-section">
        <h1>Avaliações</h1>
        <form className="evaluation-form">
          <div className="email-rating">
            <input
              id="user"
              name="user"
              type="text"
              value={ user }
              onChange={ this.handleChange }
              placeholder="Email"
            />

            <StarRatings
              rating={ rating }
              starRatedColor="rgb(255, 194, 25)"
              starHoverColor="rgb(255, 194, 25)"
              changeRating={ this.handleStarChange }
              numberOfStars={ 5 }
              name="rating"
              starDimension="2em"
              starSpacing="0.5em"
            />
          </div>

          <textarea
            onChange={ this.handleChange }
            data-testid="product-detail-evaluation"
            placeholder="Comentários"
          />

          <button
            type="submit"
          >
            Avaliar
          </button>
        </form>
      </div>
    );
  }
}

EvaluatingForm.propTypes = {
  id: PropTypes.string.isRequired,
};
