import React from 'react';
import PropTypes from 'prop-types';

class Evaluation extends React.Component {
  state = {
    index: [],
  }

  isRadioSelected = (value) => {
    const { rating } = this.props;
    return rating === value;
  };

  ratingArray() {
    const MAX_RATING = 5;
    const index = [];
    for (let e = 1; e <= MAX_RATING; e += 1) {
      index.push(e);
    }
    this.setState({ index });
  }

  render() {
    const { user, comment } = this.props;
    const { index } = this.state;

    return (
      <div>
        <div>
          <p className="email">{ user }</p>
          {
            index.map((e) => (
              <label htmlFor={ `radio${e}` } key={ e }>
                { e }
                <input
                  id={ `radio${e}` }
                  type="radio"
                  name={ `${e}-rating` }
                  value={ e }
                  checked={ this.isRadioSelected(e) }
                  disabled
                />
              </label>
            ))
          }
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
