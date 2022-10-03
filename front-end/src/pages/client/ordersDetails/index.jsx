import React, { Component } from 'react';
import './style.css';

import Header from '../../../components/header';
import TableOrders from '../../../components/tableOrders';
import {
  getStorageOrder,
  saveStorageOrder } from '../../../helpers/localStorageOrderDdetails';

const COMPARE_ONE = 1;
const COMPARE_ONE_NEGATIVE = -1;
const dataTstID = 'customer_order_details__element-order-details-label-delivery-status';
const orderId = 'customer_order_details__element-order-details-label-order-id';
const sallerName = 'customer_order_details__element-order-details-label-seller-name';
const orderDate = 'customer_order_details__element-order-details-label-order-date';
// function OrdersDetails() {
class OrdersDetails extends Component {
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

  btnDeliveryCheck = ({ target: { id } }) => {
    const orderDetails = getStorageOrder();
    const order = orderDetails.find((ord) => Number(ord.id) === Number(id));
    const orderFiltered = orderDetails.filter((ord) => Number(ord.id) !== Number(id));
    order.status = 'Entregue';
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
      <div>
        <Header />
        <div className="div-principal">
          <h2 className="detalhePedido">Detalhe do pedido</h2>
          <table className="user">
            <thead>
              <th>id</th>
              <th>Vendedor</th>
              <th>Data</th>
              <th>Status</th>
            </thead>
            <tbody>
              <td data-testid={ orderId }>{orderDetails.id}</td>
              <td data-testid={ sallerName }>{orderDetails.seller_name}</td>
              <td
                data-testid={ orderDate }
              >
                {orderDetails.sale_date
                  ? this.convertDate(orderDetails.sale_date) : ''}
              </td>
              <td data-testid={ dataTstID }>{orderDetails.status}</td>
            </tbody>
          </table>
          <button
            className="marcarButton"
            data-testid="customer_order_details__button-delivery-check"
            type="button"
            id={ orderDetails.id }
            onClick={ this.btnDeliveryCheck }
            disabled={ orderDetails.status !== 'Em Trânsito' }
          >
            Marcar como entregue
          </button>
          <div>
            <TableOrders products={ orderDetails.products } />
            <div className="valorTotal">
              <div>Valor Total: R$</div>
              <div
                className="valorTotalNum"
                data-testid="customer_order_details__element-order-total-price"
              >
                {orderDetails.total
                  ? orderDetails.total.toString().replace('.', ',') : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default OrdersDetails;
