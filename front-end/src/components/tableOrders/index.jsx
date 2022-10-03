import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function TableOrders({ products }) {
  return (
    <table className="tableOrders">
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
        {products?.map((prod, index) => (
          <tr key={ index }>
            <td
              data-testid={
                `customer_order_details__element-order-table-item-number-${index}`
              }
            >
              {index}
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-name-${index}`
              }
            >
              {prod.name}
            </td>
            <td
              className="quantidade"
              data-testid={
                `customer_order_details__element-order-table-quantity-${index}`
              }
            >
              {prod.quantity}
            </td>
            <td
              className="valorUnit"
              data-testid={
                `customer_order_details__element-order-table-unit-price-${index}`
              }
            >
              {prod.price.toString().replace('.', ',')}
            </td>
            <td
              className="subTotal"
              data-testid={
                `customer_order_details__element-order-table-sub-total-${index}`
              }
            >
              {(prod.price * prod.quantity).toString().replace('.', ',')}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TableOrders.propTypes = {
  products: PropTypes.object,
}.isRequired;

export default TableOrders;
