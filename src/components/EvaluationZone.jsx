import React from 'react';
import PropTypes from 'prop-types';
import Evaluation from './Evaluation';

class EvaluationZone extends React.Component {
  render() {
    const { arrayOfEvaluation, match: { params: { id } } } = this.props;
    const filterEvaluation = arrayOfEvaluation
      .filter((evaluation) => evaluation.id === id);
    return (
      <div>
        {filterEvaluation.map((evaluation, index) => (
          <Evaluation
            key={ index }
            user={ evaluation.user }
            rating={ evaluation.rating }
            comment={ evaluation.comment }
          />
        ))}
      </div>
    );
  }
}

EvaluationZone.propTypes = {
  arrayOfEvaluation: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
EvaluationZone.defaultProps = {
  arrayOfEvaluation: [],
};

export default EvaluationZone;
