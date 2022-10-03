import React, { Component } from 'react';
import './style.css';

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
      selected: '',
    };
  }

  async componentDidMount() {
    const user = getStorageUser();
    const sellers = await apiRequestSellers(user.token);
    console.log(sellers);
    this.setState({
      total: getCartTotal(),
      sellers,
      selected: { key: sellers[0].id, value: sellers[0].name },
    });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleChangeSelected = ({ target: { name, key, value } }) => {
    this.setState({ [name]: { key, value } });
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
      selected,
    } = this.state;
    return (

      <div>
        <Header />
        <div className="principal">

          <h2 className="finalizarPedido">Finalizar Pedido</h2>
          <TableCheckout changeTotal={ this.changeTotal } />

          <div>
            <div className="total">
              <div>Total: R$</div>
              <div
                data-testid="customer_checkout__element-order-total-price"
              >
                {total.toString().replace('.', ',')}
              </div>
            </div>
          </div>
          <div>
            <h2 className="detalhes">
              Detalhes e Endereço de entrega
            </h2>
            <div className="endereco">
              <div>
                Vendedor responsabel
              </div>
              <select
                data-testid="customer_checkout__select-seller"
                name="selected"
                onChange={ this.handleChangeSelected }
              >
                {sellers
                  ? sellers.map((sel) => (
                    <option
                      name="selected"
                      key={ sel.id }
                      value={ sel.name }
                    >
                      {sel.name}
                    </option>
                  )) : ''}
              </select>
              <div>Endereço</div>
              <input
                type="text"
                name="adressDelivery"
                data-testid="customer_checkout__input-address"
                value={ adressDelivery }
                onChange={ this.handleChange }
              />
              <p>Número</p>
              <input
                type="number"
                name="numberDelivery"
                data-testid="customer_checkout__input-address-number"
                min="0"
                value={ numberDelivery }
                onChange={ this.handleChange }
              />
            </div>
          </div>
          <BtnSubmitOrder
            total={ total }
            adressDelivery={ adressDelivery }
            numberDelivery={ numberDelivery }
            selected={ selected }
          />
        </div>
      </div>
    );
  }
}
export default Checkout;
