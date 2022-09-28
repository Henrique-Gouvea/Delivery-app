import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    console.log(products);
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
      <table>
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
                  `customer_checkout__element-order-table-item-number-${index + 1}`
                }
              >
                {index + 1 }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-name-${index + 1}`
                }
              >
                {prod.name}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-quantity-${index + 1}`
                }
              >
                {prod.quantity}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index + 1}`
                }
              >
                {prod.price.toString().replace('.', ',')}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index + 1}`
                }
              >
                {((prod.quantity * prod.price).toFixed(2)).toString().replace('.', ',')}
              </td>
              <td>
                <button
                  type="button"
                  onClick={ this.removeBtnClick }
                  id={ prod.id }
                  data-testid={
                    `customer_checkout__element-order-table-remove-${index + 1}`
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
