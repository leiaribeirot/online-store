import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EvaluationZone from './EvaluationZone';

export default class EvaluatingForm extends Component {
  constructor() {
    super();
    this.state = { // estado inicial
      user: '',
      comment: '',
      disabled: true,
      selectedRadioButton: null,
      index: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getEvaluation();
    this.ratingArray();
  }

  componentDidUpdate() {
    const { disabled, selectedRadioButton } = this.state;
    if (selectedRadioButton && disabled) {
      this.setState({ disabled: false });
    } else if (!selectedRadioButton && !disabled) {
      this.setState({ disabled: true });
    }
  }

  handleChange({ target: { value, name } }) { // Mudando o estado apenas com 3 caracteres obrigatório pro email
    this.setState({
      [name]: value,
    });
  }

  handleRadioClick = ({ target }) => {
    const { name } = target;
    const value = target.type === 'radio' ? +target.value : target.value;
    this.setState({ [name]: value });
  }

  getEvaluation() {
    const arrayOfEvaluation = JSON.parse(localStorage.getItem('evaluations'));
    if (arrayOfEvaluation) {
      this.setState({ arrayOfEvaluation });
    }
  }

  isRadioSelected = (value) => {
    const { selectedRadioButton } = this.state;
    return selectedRadioButton === value;
  }

  onEvaluationClic = () => {
    const { user, comment, selectedRadioButton: rating } = this.state;
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
      comment: '',
      selectedRadioButton: null,
    });
    this.getEvaluation();
  }

  ratingArray() {
    const MAX_RATING = 5;
    const index = [];
    for (let e = 1; e <= MAX_RATING; e += 1) {
      index.push(e);
    }
    this.setState({ index });
  }

  render() {
    const { user, comment, index, disabled } = this.state;
    return (
      <div>
        <h1>Avaliações</h1>
        <form onSubmit={ this.handleSubmit }>
          <div>
            {
              index.map((e) => (
                <label htmlFor={ `radio${e}` } key={ e }>
                  { e }
                  <input
                    id={ `radio${e}` }
                    type="radio"
                    data-testid={ `${e}-rating` }
                    name="selectedRadioButton"
                    value={ e }
                    checked={ this.isRadioSelected(e) }
                    onChange={ this.handleRadioClick }
                  />
                </label>
              ))
            }
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
            disabled={ disabled }
            onClick={ this.onEvaluationClic }
          >
            AVALIA
          </button>
        </form>
        <EvaluationZone { ...this.state } { ...this.props } />
      </div>
    );
  }
}
EvaluatingForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
