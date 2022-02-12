import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

class Evaluation extends React.Component {
  render() {
    const { user, comment } = this.props;
    const { rating } = this.props;

    console.log(rating);
    return (
      <div>
        <div>
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

export default Evaluation;
