import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import FinishingForm from '../components/FinishingForm';
import PurchaseItem from '../components/PurchaseItem';
import Header from '../components/Header';
import '../Styles/FinishingProduct.css';
// FIZ O ESQUELETO - FALTA CONECTAR COM AS OUTRAS PARTES DA PÁGINA
class FinishingProduct extends React.Component {
    state = {
      totalPrice: 0,
      name: '',
      email: '',
      cpf: '',
      phone: '',
      postalCode: '',
      address: '',
      purchaseFinished: false,
    };

    componentDidMount() {
      this.handlePrice();
    }

  handlePrice = () => {
    const { cartItems } = this.props;
    const totalPrice = cartItems.map((item) => item.totalPrice)
      .reduce((acc, current) => acc + current);
    this.setState({ totalPrice });
  }

  handleClick = () => {
    this.setState({
      // items: [],
      name: '',
      email: '',
      cpf: '',
      phone: '',
      postalCode: '',
      address: '',
      purchaseFinished: true,
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { cartItems } = this.props;
    const { totalPrice } = this.state;
    const { name, email, cpf, phone, postalCode, address, purchaseFinished } = this.state;
    return (
      <div className="body">
        <Header />
        {purchaseFinished && <Redirect to="/" /> }
        <div>
          <div className="item-container">
            {cartItems.map((item) => (
              <PurchaseItem
                key={ item.id }
                title={ item.title }
                price={ (item.totalPrice).toFixed(2) }
                amount={ item.cartQuantity }
                thumbnail={ item.thumbnail }
              />
            ))}
          </div>
          <section className="form">
            <p>{`Total a pagar: ${(totalPrice).toFixed(2)}`}</p>
            <FinishingForm
              name={ name }
              email={ email }
              cpf={ cpf }
              phone={ phone }
              postalCode={ postalCode }
              address={ address }
              onClick={ this.handleClick }
              onChange={ this.handleChange }
            />
          </section>
        </div>
      </div>
    );
  }
}

FinishingProduct.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object),
};
FinishingProduct.defaultProps = {
  cartItems: [],
};

export default FinishingProduct;
