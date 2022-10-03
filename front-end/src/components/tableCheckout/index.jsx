import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

import {
  getStorageProducts,
  saveStorageProducts,
  getCartTotal,
} from '../../helpers/localStorageProducts';

// function TableCheckout() {
class TableCheckout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    const products = getStorageProducts();
    this.setState({
      products,
    });
  }

  removeBtnClick = ({ target }) => {
    const { id } = target;
    const products = getStorageProducts();

    const productsFiltered = products.filter((prod) => Number(prod.id) !== Number(id));
    saveStorageProducts(productsFiltered);
    this.setState({
      products: productsFiltered,
    });
    const { changeTotal } = this.props;
    changeTotal(getCartTotal());
  };

  render() {
    const {
      products,
    } = this.state;
    return (
      <table className="customers">
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitario</th>
            <th>Subtotal</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((prod, index) => (
            <tr key={ index + 1 }>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                {index + 1 }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-name-${index}`
                }
              >
                {prod.name}
              </td>
              <td
                className="quantidade"
                data-testid={
                  `customer_checkout__element-order-table-quantity-${index}`
                }
              >
                {prod.quantity}
              </td>
              <td
                className="valorUnit"
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                {prod.price.toString().replace('.', ',')}
              </td>
              <td
                className="subTotal"
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                {((prod.quantity * prod.price).toFixed(2)).toString().replace('.', ',')}
              </td>
              <td>
                <button
                  type="button"
                  className="remover"
                  onClick={ this.removeBtnClick }
                  id={ prod.id }
                  data-testid={
                    `customer_checkout__element-order-table-remove-${index}`
                  }
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

TableCheckout.propTypes = {
  changeTotal: PropTypes.function,
}.isRequired;

export default TableCheckout;
