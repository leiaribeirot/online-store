import React from 'react';
import { Redirect } from 'react-router-dom';
import FinishingForm from '../components/FinishingForm';
import PurchaseItem from '../components/PurchaseItem';
import IconHome from '../components/IconHome';

// FIZ O ESQUELETO - FALTA CONECTAR COM AS OUTRAS PARTES DA PÁGINA
class FinishingProduct extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [],
      totalPrice: 0,
      name: '',
      email: '',
      cpf: '',
      phone: '',
      postalCode: '',
      adress: '',
      purchaseFinished: false,
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetch = () => { // ?? Seria o fetch para os produtos
    const items = getItemsFromLocalStorage(''); // colocar aqui cardItens
    const totalPrice = getItemFromLocalStorage(''); // colocar aqui total price

    this.setState({
      items,
      totalPrice,
    });
  };

  handleClick = () => {
    this.setState({
      items: [],
      name: '',
      email: '',
      cpf: '',
      phone: '',
      postalCode: '',
      adress: '',
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
    const { items, totalPrice } = this.state;
    const { name, email, cpf, phone, postalCode, adress, purchaseFinished } = this.state;
    return (
      <>
        <IconHome />
        <div>
          {purchaseFinished ? <Redirect to="/" /> : null}
          {items.map((element) => (
            <PurchaseItem
              key={ element.title }
              title={ element.title }
              price={ element.price }
              amount={ element.amount }
              thumbnail={ element.thumbnail }
            />
          ))}
          <p>{`Total a pagar: ${totalPrice}`}</p>
          <FinishingForm
            name={ name }
            email={ email }
            cpf={ cpf }
            phone={ phone }
            postalCode={ postalCode }
            adress={ adress }
            onClick={ this.handleClick }
            onChange={ this.handleChange }
          />
        </div>
      </>
    );
  }
}

export default FinishingProduct.jsx;