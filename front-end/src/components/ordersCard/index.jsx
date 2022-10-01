import React from 'react';

function OrdersCard() {
  const id = '3';

  return (
    <div>
      <div>
        <p
          data-testid={ `customer_orders__element-order-id-${id}` }
        >
          Pedido ID
        </p>
        <p
          data-testid={ `customer_orders__element-delivery-status-${id}` }
        >
          Status Pedido
        </p>
        <p
          data-testid={ `customer_orders__element-order-date-${id}` }
        >
          Data Pedido
        </p>
        <p
          data-testid={ `customer_orders__element-card-price-${id}` }
        >
          Valor total
        </p>

      </div>
    </div>
  );
}
export default OrdersCard;
