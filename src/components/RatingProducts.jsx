import React, { Component } from 'react';

class RatingProducts extends Component {
  state = {
    disabled: true,
    index: [1,2,3,4,5],
  }
  
  componentDidUpdate() {
    const { disabled } = this.state;
    const { selectedRadioButton } = this.props;
    if(selectedRadioButton && disabled) {
      this.setState({ disabled: false });
    } else if (!selectedRadioButton && !disabled) {
      this.setState({ disabled: true });
    }
  }

  isRadioSelected = (value) => {
    const { selectedRadioButton } = this.props;
    console.log('isRadioSelected', this.state)
    return selectedRadioButton === value; 
  }

  handleRadioClick = ({ target }) => {
    const { updateAppState } = this.props;
    const { name } = target;
    const value = target.type === 'radio' ? +target.value : target.value;
    updateAppState({ [name]: value })
  }

  render() {
    const { index, disabled  } = this.state;
    const { email } = this.props;
    return (
      <form>
        <input
          type="email"
          value={ email }
          name="email"
          data-testid="product-detail-email"
          placeholder="@email"
          onChange={ this.handleRadioClick }
        />
        <div>
          {
            index.map((e) => (
              <label key={ e }>
                { e }
                <input
                  type="radio"
                  data-testid={`${e}-rating`}
                  name="selectedRadioButton"
                  value={ e }
                  checked={ this.isRadioSelected(e) }
                  onChange={ this.handleRadioClick }
                />
              </label>
            ))
          }
        </div>
        <textarea
          data-testeid="product-detail-evaluation"
          placeholder="Mensagem (opcional)"
        />
        <button
          type="button"
          data-testid="submit-review-btn"
          disabled={ disabled }
          onClick={ this.handleOnClick }
        >
          Enviar
        </button>
      </form>
    )
  }
}

export default RatingProducts;
