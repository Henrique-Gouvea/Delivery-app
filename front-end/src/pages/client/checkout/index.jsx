import React, { Component } from 'react';
import Header from '../../../components/header';
import TableCheckout from '../../../components/tableCheckout';
import { getCartTotal } from '../../../helpers/localStorageProducts';
import BtnSubmitOrder from '../../../components/btnSubmitOrder';
import { apiRequestSellers } from '../../../services/api';
import { getStorageUser } from '../../../helpers/localStorage';

// function Checkout() {
class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      numberDelivery: 0,
      adressDelivery: '',
      sellers: [],
    };
  }

  async componentDidMount() {
    const user = getStorageUser();
    const sellers = await apiRequestSellers(user.token);
    console.log(sellers);
    this.setState({
      total: getCartTotal(),
      sellers,
    });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  changeTotal = (value) => {
    this.setState({ total: value });
  };

  render() {
    const {
      total,
      adressDelivery,
      numberDelivery,
      sellers,
    } = this.state;
    return (

      <div>
        <Header />
        <h2>Finalizar Pedido</h2>
        <div>
          <TableCheckout changeTotal={ this.changeTotal } />
          <p>Valor Total:</p>
          <p
            data-testid="customer_checkout__element-order-total-price"
          >
            {total.toString().replace('.', ',')}
          </p>
        </div>
        <div>
          <h2>
            Detalhes e Endereço de entrega
          </h2>
          <p>
            Vendedor responsabel
          </p>
          <select
            data-testid="customer_checkout__select-seller"
            name="select"
          >
            {sellers
              ? sellers.map((sel) => (
                <option key={ sel.id } value={ sel.name }>{sel.name}</option>
              )) : ''}
          </select>
          <p>Endereço</p>
          <input
            type="text"
            name="adressDelivery"
            data-testid="customer_checkout__input-address"
            value={ adressDelivery }
            onChange={ this.handleChange }
          />
          <p>Numero</p>
          <input
            type="number"
            name="numberDelivery"
            data-testid="customer_checkout__input-address-number"
            min="0"
            value={ numberDelivery }
            onChange={ this.handleChange }
          />
        </div>
        <BtnSubmitOrder
          total={ total }
          adressDelivery={ adressDelivery }
          numberDelivery={ numberDelivery }
        />
      </div>
    );
  }
}
export default Checkout;
