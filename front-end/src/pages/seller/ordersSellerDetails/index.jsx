import React, { Component } from 'react';
import Header from '../../../components/header';
import TableOrdersSeller from '../../../components/tableOrdersSeller';
import {
  getStorageOrder,
  saveStorageOrder,
} from '../../../helpers/localStorageOrderDdetails';
import './style.css';

const COMPARE_ONE = 1;
const COMPARE_ONE_NEGATIVE = -1;
const dataTstID = 'seller_order_details__element-order-details-label-delivery-status';
// function OrdersDetails() {
class OrdersSellerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderDetails: '',
    };
  }

  componentDidMount() {
    const orderDetailsStorage = getStorageOrder();
    // const id = GetIdRoute();
    const url = window.location.pathname;
    const id = url.substring(url.lastIndexOf('/') + 1);
    const orderDetails = orderDetailsStorage.find((ord) => Number(ord.id) === Number(id));
    this.setState({
      orderDetails,
    });
  }

  compare = (a, b) => {
    if (a.id < b.id) {
      return COMPARE_ONE_NEGATIVE;
    }
    if (a.id > b.id) {
      return COMPARE_ONE;
    }
    return 0;
  };

  btnDeliveryCheck = ({ target: { id, name } }) => {
    const orderDetails = getStorageOrder();
    const order = orderDetails.find((ord) => Number(ord.id) === Number(id));
    const orderFiltered = orderDetails.filter((ord) => Number(ord.id) !== Number(id));
    order.status = name;
    orderFiltered.push(order);
    orderFiltered.sort(this.compare);
    saveStorageOrder(orderFiltered);
    this.setState({
      orderDetails: order,
    });
  };

  convertDate = (date) => {
    const VALUE_REMOVED_DATE = 10;
    const removedDate = date.substr(0, VALUE_REMOVED_DATE);
    const dateFormatted = removedDate.split('-').reverse().join('/');
    console.log(dateFormatted);
    return dateFormatted;
  };

  render() {
    const {
      orderDetails,
    } = this.state;
    return (
      <div className="div-mae-order">
        <Header />
        <h2 className="detalhe">Detalhe do pedido</h2>
        <div>
          <p
            data-testid="seller_order_details__element-order-details-label-order-id"
          >
            {orderDetails.id}
          </p>
          <p
            data-testid="seller_order_details__element-order-details-label-order-date"
          >
            {orderDetails.sale_date ? this.convertDate(orderDetails.sale_date) : ''}
          </p>
          <p
            data-testid={ dataTstID }
          >
            {orderDetails.status}
          </p>
          <button
            data-testid="seller_order_details__button-preparing-check"
            type="button"
            id={ orderDetails.id }
            onClick={ this.btnDeliveryCheck }
            name="Preparando"
            disabled={ orderDetails.status !== 'Pendente' }
          >
            Preparar Pedido
          </button>
          <button
            data-testid="seller_order_details__button-dispatch-check"
            type="button"
            id={ orderDetails.id }
            onClick={ this.btnDeliveryCheck }
            disabled={ orderDetails.status !== 'Preparando' }
            name="Em Trânsito"
          >
            Saiu para entrega
          </button>
        </div>
        <div>
          <TableOrdersSeller products={ orderDetails.products } />
          <p
            data-testid="seller_order_details__element-order-total-price"
          >
            {orderDetails.total ? orderDetails.total.toString().replace('.', ',') : ''}
          </p>
        </div>
      </div>
    );
  }
}
export default OrdersSellerDetails;
