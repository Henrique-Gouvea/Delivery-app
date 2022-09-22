import React from 'react';
import Header from '../../../components/header';
import TableOrdersSeller from '../../../components/tableOrdersSeller';

function OrdersDetails() {
  return (
    <div>
      <Header />
      <h2>Detalhe do pedido</h2>
      <div>
        <p
          data-testid="seller_order_details__element-order-details-label-order-id"
        >
          Pedido
        </p>
        <p
          data-testid="seller_order_details__element-order-details-label-order-date"
        >
          Data
        </p>
        <p
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
          Status
        </p>
        <button
          data-testid="seller_order_details__button-preparing-check"
          type="button"
        >
          Preparar Pedido
        </button>
        <button
          data-testid="seller_order_details__button-dispatch-check"
          type="button"
        >
          Saiu para entrega
        </button>
      </div>
      <div>
        <TableOrdersSeller />
        <p
          data-testid="seller_order_details__element-order-total-price"
        >
          Valor Total:
        </p>
      </div>
    </div>
  );
}
export default OrdersDetails;
