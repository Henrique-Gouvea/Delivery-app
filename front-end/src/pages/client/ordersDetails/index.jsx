import React from 'react';
import Header from '../../../components/header';
import TableOrders from '../../../components/tableOrders';

function OrdersDetails() {
  const { token } = JSON.parse(localStorage.getItem('user'));
  console.log('===============');
  console.log('TOKEN', token.token);

  return (
    <div>
      <Header />
      <h2>Detalhe do pedido</h2>
      <div>
        <p
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          Pedido
        </p>
        <p
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          Vendedor
        </p>
        <p
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          Data
        </p>
        <p
          data-testid={ (
            `customer_order_details__element
            -order-details-label-delivery-status`
          ) }
        >
          Status
        </p>
        <button
          data-testid="customer_order_details__button-delivery-check"
          type="button"
        >
          Marcar como entregue
        </button>
      </div>
      <div>
        <TableOrders />
        <p
          data-testid="customer_order_details__element-order-total-price"
        >
          Valor Total:
        </p>
      </div>
    </div>
  );
}
export default OrdersDetails;
