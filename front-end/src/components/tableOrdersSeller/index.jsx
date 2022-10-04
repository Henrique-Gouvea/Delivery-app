import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function TableOrdersSeller({ products }) {
  return (
    <table className="tableSellerOrders">
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
                `seller_order_details__element-order-table-item-number-${index}`
              }
            >
              {index}
            </td>
            <td
              data-testid={
                `seller_order_details__element-order-table-name-${index}`
              }
            >
              {prod.name}
            </td>
            <td
              className="quantidadeSeller"
              data-testid={
                `seller_order_details__element-order-table-quantity-${index}`
              }
            >
              {prod.quantity}
            </td>
            <td
              className="valorUnitSeller"
              data-testid={
                `seller_order_details__element-order-table-unit-price-${index}`
              }
            >
              {prod.price.toString().replace('.', ',')}
            </td>
            <td
              className="subTotalSeller"
              data-testid={
                `seller_order_details__element-order-table-sub-total-${index}`
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

TableOrdersSeller.propTypes = {
  products: PropTypes.object,
}.isRequired;

export default TableOrdersSeller;
