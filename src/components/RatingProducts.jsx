import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-rating-component';
import Evaluation from './Evaluation';

export default class RatingProducts extends Component {
  constructor() {
    super();

    this.state = {
      rating: 0,
      comment: '',
      user: '',
    };
  }

  handleClick = (event, Evaluation) => {
    event.preventDefault();

    const { id } = this.props;

    Evaluation({ ...this.state, id });

    this.setState({
      rating: 0,
      comment: '',
      user: '',
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  handleStarChange = (rating) => {
    this.setState({
      rating,
    });
  };

  render() {
    const { rating, comment, user } = this.state;
    const { addEvaluation } = this.props;

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
            id="comment"
            name="comment"
            value={ comment }
            onChange={ this.handleChange }
            data-testid="product-detail-evaluation"
            placeholder="Comentários"
          />

          <button
            type="submit"
            onClick={ (event) => this.handleClick(event, addEvaluation) }
          >
            Avaliar
          </button>
        </form>
      </div>
    );
  }
}

RatingProducts.propTypes = {
  id: PropTypes.string.isRequired,
  addEvaluation: PropTypes.func.isRequired,
};

