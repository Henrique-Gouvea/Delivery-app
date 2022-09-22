import React from 'react';

function TableOrders() {
  const index = '01';
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitario</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {/* {products?.map((plan) => ( */}
        <tr key={ index }>
          <td
            data-testid={
              `customer_order_details__element-order-table-item-number-${index}`
            }
          >
            Index-Item-Numero
          </td>
          <td
            data-testid={
              `customer_order_details__element-order-table-name-${index}`
            }
          >
            Nome Produto
          </td>
          <td
            data-testid={
              `customer_order_details__element-order-table-quantity-${index}`
            }
          >
            Quantidade
          </td>
          <td
            data-testid={
              `customer_order_details__element-order-table-unit-price-${index}`
            }
          >
            Preço unitario
          </td>
          <td
            data-testid={
              `customer_order_details__element-order-table-sub-total-${index}`
            }
          >
            SubTotal
          </td>
        </tr>
        {/* ))} */}
      </tbody>
    </table>
  );
}
export default TableOrders;
