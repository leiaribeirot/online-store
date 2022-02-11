import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-rating-component';

export default class Evaluation extends Component {
  render() {
    let { user, comment } = this.props;
    const { rating } = this.props;
    if (user === '') {
      user = 'Anônimo';
    }
    if (comment === '') {
      comment = 'Usuário não teceu comentários';
    }

    console.log(rating);
    return (
      <div className="evaluation">
        <div className="email-rating">
          <p className="email">{ user }</p>
          <StarRatings
            rating={ Number(rating) }
            starRatedColor="rgb(255, 194, 25)"
            starHoverColor="rgb(255, 194, 25)"
            numberOfStars={ 5 }
            name="rating"
            starDimension="1.5em"
            starSpacing="0.5em"
          />
        </div>
        <p>{ comment }</p>
      </div>
    );
  }
}

Evaluation.propTypes = {
  user: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
