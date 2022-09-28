import React, { Component } from 'react';
import { apiRequestProductsGetAll } from '../../services/api';
import { getStorageUser } from '../../helpers/localStorage';
import {
  getStorageProducts,
  addProductStorage } from '../../helpers/localStorageProducts';
import './style.css';

const COMPARE_ONE = 1;
const COMPARE_ONE_NEGATIVE = -1;

class ProductCard extends Component {
// function ProductCard() {
  constructor(props) {
    super(props);
    this.state = {
      products: '',
    };
  }

  async componentDidMount() {
    const productsUpdated = await this.updateProducts();
    console.log(productsUpdated);
    this.setState({
      products: productsUpdated,
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

  incBtnClick = async (prod) => {
    const quantity = prod.quantity ? prod.quantity + 1 : 1;
    addProductStorage({ ...prod, quantity });
    const products = await this.updateProducts();
    this.setState({
      products,
    });
  };

  decBtnClick = async (prod) => {
    const quantity = prod.quantity ? prod.quantity - 1 : 1;
    addProductStorage({ ...prod, quantity });
    const products = await this.updateProducts();
    this.setState({
      products,
    });
  };

  render() {
    const {
      products,
    } = this.state;
    return (
      <div>
        {products ? (
          products.map((prod, index) => (
            <div key={ index }>
              <div>
                <p
                  data-testid={ `customer_products__element-card-price-${prod.id}` }
                >
                  {prod.price}
                </p>
                <img
                  data-testid={ `customer_products__img-card-bg-image-${prod.id}` }
                  src={ prod.url_image }
                  alt={ prod.name }
                />
              </div>
              <div>
                <p
                  data-testid={ `customer_products__element-card-title-${prod.id}` }
                >
                  {prod.name}
                </p>
                <button
                  data-testid={ `customer_products__button-card-rm-item-${prod.id}` }
                  type="button"
                  id={ prod.id }
                  onClick={ () => this.decBtnClick(prod) }
                >
                  -
                </button>
                <input
                  data-testid={ `customer_products__input-card-quantity-${prod.id}` }
                  id={ prod.id }
                  value={ prod.quantity ? prod.quantity : 0 }
                />
                <button
                  data-testid={ `customer_products__button-card-add-item-${prod.id}` }
                  type="button"
                  id={ prod.id }
                  onClick={ () => this.incBtnClick(prod) }
                >
                  +
                </button>
              </div>
            </div>))) : <p>Carregando</p>}
      </div>
    );
  }
}
export default ProductCard;
