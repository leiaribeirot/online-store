import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Evaluation from './Evaluation';

export default class EvaluationsZone extends Component {
  render() {
    const { evaluations } = this.props;
    return (
      <div>
        {evaluations.map((element, index) => (
          <Evaluation
            key={ index }
            user={ element.user }
            rating={ element.rating }
            comment={ element.comment }
          />
        ))}
      </div>
    );
  }
}

EvaluationsZone.propTypes = {
  evaluations: PropTypes.arrayOf(PropTypes.object).isRequired,
};
