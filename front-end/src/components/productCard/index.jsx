import React, { Component } from 'react';
import './style.css';

import { Link } from 'react-router-dom';
import { apiRequestProductsGetAll } from '../../services/api';
import { getStorageUser } from '../../helpers/localStorage';
import {
  getStorageProducts,
  getCartTotal,
} from '../../helpers/localStorageProducts';
import ProdCard from '../prodCard';

const COMPARE_ONE = 1;
const COMPARE_ONE_NEGATIVE = -1;

class ProductCard extends Component {
// function ProductCard() {
  constructor(props) {
    super(props);
    this.state = {
      products: '',
      total: '0,00',
    };
  }

  async componentDidMount() {
    const productsUpdated = await this.updateProducts();
    console.log(typeof getCartTotal());
    this.setState({
      products: productsUpdated,
      total: getCartTotal(),
    });
  }

  compare = (a, b) => {
    if (a.id < b.id) {
      return COMPARE_ONE_NEGATIVE;
    }
    if (a.id > b.id) {
      return COMPARE_ONE;
    }
    return 0;
  };

  updateProducts = async () => {
    const products = getStorageProducts();
    const allProducts = await this.getAllProducts();
    if (products) {
      let allProductsUpdated = allProducts;
      products.forEach((prod) => {
        allProductsUpdated = allProductsUpdated.filter(
          (prodFind) => prodFind.id !== prod.id,
        );
        allProductsUpdated.push(prod);
      });
      return allProductsUpdated.sort(this.compare);
    } return allProducts.sort(this.compare);
  };

  getAllProducts = async () => {
    const user = getStorageUser();
    const products = await apiRequestProductsGetAll(user.token);
    return products;
  };

  changeTotal = (value) => {
    this.setState({ total: value });
  };

  render() {
    const {
      products,
      total,
    } = this.state;
    return (
      <div>
        <div className="div-Products">
          {products ? (
            products.map((prod, index) => (
              <ProdCard
                className="productsCard"
                key={ index }
                product={ prod }
                changeTotal={ this.changeTotal }
                updateProducts={ this.updateProducts }
              />))) : ''}
        </div>
        <Link to="/customer/checkout">
          <button
            className="ver-carrinho"
            type="button"
            data-testid="customer_products__button-cart"
            disabled={ total === '0.00' }
          >
            Ver Carrinho: R$
            <p
              className="valor-carrinho"
              data-testid="customer_products__checkout-bottom-value"
            >
              { total.toString().replace('.', ',') }
            </p>
          </button>
        </Link>
      </div>
    );
  }
}
export default ProductCard;
