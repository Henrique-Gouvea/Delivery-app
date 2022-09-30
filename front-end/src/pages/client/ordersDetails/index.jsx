import React, { Component } from 'react';
import Header from '../../../components/header';
import TableOrders from '../../../components/tableOrders';
import {
  getStorageOrder,
  saveStorageOrder } from '../../../helpers/localStorageOrderDdetails';

const COMPARE_ONE = 1;
const COMPARE_ONE_NEGATIVE = -1;
// function OrdersDetails() {
class OrdersDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderDetails: '',
    };
  }

  componentDidMount() {
    const orderDetails = getStorageOrder();
    this.setState({
      orderDetails: orderDetails[orderDetails.length - 1],
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
        <h2>Detalhe do pedido</h2>
        <div>
          <p
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            {orderDetails.id}
          </p>
          <p
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            {orderDetails.seller_name}
          </p>
          <p
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            {orderDetails.sale_date ? this.convertDate(orderDetails.sale_date) : ''}
          </p>
          <p
            data-testid={ (
              `customer_order_details__element
            -order-details-label-delivery-status`
            ) }
          >
            {orderDetails.status}
          </p>
          <button
            data-testid="customer_order_details__button-delivery-check"
            type="button"
            id={ orderDetails.id }
            onClick={ this.btnDeliveryCheck }
          >
            Marcar como entregue
          </button>
        </div>
        <div>
          <TableOrders products={ orderDetails.products } />
          <p>Valor Total:</p>
          <p
            data-testid="customer_order_details__element-order-total-price"
          >
            {orderDetails.total}
          </p>
        </div>
      </div>
    );
  }
}
export default OrdersDetails;
