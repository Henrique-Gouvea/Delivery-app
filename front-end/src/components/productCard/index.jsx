import React, { Component } from 'react';
import { apiRequestProductsGetAll } from '../../services/api';
import { getStorageUser } from '../../helpers/localStorage';

class ProductCard extends Component {
// function ProductCard() {
  constructor(props) {
    super(props);
    this.state = {
      products: '',
    };
  }

  async componentDidMount() {
    const products = await this.getAllProducts();
    console.log(products);
    this.setState({
      products,
    });
  }

  getAllProducts = async () => {
    const user = getStorageUser();
    const products = await apiRequestProductsGetAll(user.token);
    return products;
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
                >
                  -
                </button>
                <input
                  data-testid={ `customer_products__input-card-quantity-${prod.id}` }
                  value="0"
                />
                <button
                  data-testid={ `customer_products__button-card-add-item-${prod.id}` }
                  type="button"
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
