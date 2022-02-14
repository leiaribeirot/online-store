import React from 'react';
import PropTypes from 'prop-types';

class FinishingForm extends React.Component {
  render() {
    const { name, email, cpf, phone, postalCode, address, onClick, onChange } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="name">
            Nome Completo:
            <input
              required
              name="name"
              type="text"
              data-testid="checkout-fullname"
              onChange={ onChange }
              value={ name }
            />
          </label>
          <label htmlFor="email">
            E-mail:
            <input
              required
              name="email"
              type="email"
              data-testid="checkout-email"
              onChange={ onChange }
              value={ email }
            />
          </label>
          <label htmlFor="cpf">
            CPF:
            <input
              required
              name="cpf"
              type="text"
              data-testid="checkout-cpf"
              placeholder="xxx.xxx.xxx-xx"
              onChange={ onChange }
              value={ cpf }
            />
          </label>
          <label htmlFor="phone">
            Telefone:
            <input
              required
              name="phone"
              type="text"
              data-testid="checkout-phone"
              onChange={ onChange }
              value={ phone }
            />
          </label>
          <label htmlFor="postalCode">
            CEP:
            <input
              required
              name="postalCode"
              type="text"
              data-testid="checkout-cep"
              onChange={ onChange }
              value={ postalCode }
            />
          </label>
          <label htmlFor="address">
            Endereço:
            <input
              required
              name="address"
              type="text"
              data-testid="checkout-address"
              onChange={ onChange }
              value={ address }
            />
          </label>
          <button
            type="submit"
            onClick={ onClick }
          >
            Finalizar Compra
          </button>
        </form>
      </div>
    );
  }
}

FinishingForm.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FinishingForm;
