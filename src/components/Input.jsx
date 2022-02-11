import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      labelId,
      inputId,
      labelText,
      name,
      type,
      onChange,
      onKeyDown,
      onClick,
      id } = this.props;
    return (
      <label data-testid={ labelId } htmlFor={ id }>
        {labelText}
        <input
          data-testid={ inputId }
          type={ type }
          name={ name }
          id={ id }
          onChange={ onChange }
          onKeyDown={ onKeyDown }
          onClick={ onClick }
        />
      </label>
    );
  }
}

Input.propTypes = {
  labelId: PropTypes.string,
  inputId: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onClick: PropTypes.func,
};

Input.defaultProps = {
  labelId: '',
  inputId: '',
  onChange: () => {},
  onKeyDown: () => {},
  onClick: () => {},
  id: '',
};

export default Input;
