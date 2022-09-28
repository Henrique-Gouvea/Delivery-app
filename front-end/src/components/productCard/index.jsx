import React, { Component } from 'react';
import { apiRequestProductsGetAll } from '../../services/api';
import { getStorageUser } from '../../helpers/localStorage';
import {
  getStorageProducts,
  getCartTotal,
} from '../../helpers/localStorageProducts';
import './style.css';
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
    console.log(productsUpdated);
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
    console.log(allProducts);
    console.log(products);
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
        {products ? (
          products.map((prod, index) => (
            <ProdCard
              key={ index }
              product={ prod }
              changeTotal={ this.changeTotal }
              updateProducts={ this.updateProducts }
            />))) : ''}
        <p
          data-testid="customer_products__checkout-bottom-value"
        >
          { total.toString().replace('.', ',') }
        </p>
      </div>
    );
  }
}
export default ProductCard;
