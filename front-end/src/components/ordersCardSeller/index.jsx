import React from 'react';

function OrdersCard() {
  const id = '3';
  return (
    <div>
      <div>
        <p
          data-testid={ `seller_orders__element-order-id-${id}` }
        >
          Pedido ID
        </p>
        <p
          data-testid={ `seller_orders__element-delivery-status-${id}` }
        >
          Status Pedido
        </p>
        <p
          data-testid={ `seller_orders__element-order-date-${id}` }
        >
          Data Pedido
        </p>
        <p
          data-testid={ `seller_orders__element-card-price-${id}` }
        >
          Valor total
        </p>
        <p
          data-testid={ `seller_orders__element-card-address-${id}` }
        >
          Endereço
        </p>

      </div>
    </div>
  );
}
export default OrdersCard;
