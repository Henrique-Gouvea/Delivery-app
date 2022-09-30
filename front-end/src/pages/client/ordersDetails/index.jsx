import React, { Component } from 'react';
import Header from '../../../components/header';
import TableOrders from '../../../components/tableOrders';
import { getStorageOrder } from '../../../helpers/localStorageOrderDdetails';

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
      orderDetails,
    });
  }

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
            {orderDetails.sale_date}
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
