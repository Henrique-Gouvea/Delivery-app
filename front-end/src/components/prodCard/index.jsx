import React, { Component } from 'react';
import {
  addProductStorage,
  getCartTotal,
} from '../../helpers/localStorageProducts';

class ProdCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputQtde: 0,
    };
  }

  async componentDidMount() {
    const { product } = this.props;
    this.setState({
      inputQtde: product.quantity ? product.quantity : 0,
    });
  }

  incBtnClick = async (prod) => {
    const { inputQtde } = this.state;
    const quantity = Number(inputQtde) + 1;
    addProductStorage({ ...prod, quantity });
    this.setState({
      inputQtde: quantity,
    });
    const { changeTotal } = this.props;
    changeTotal(getCartTotal());
  };

  decBtnClick = async (prod) => {
    const { inputQtde } = this.state;
    const quantity = Number(inputQtde - 1);
    // addProductStorage({ ...prod, quantity });
    // this.setState({
    //   inputQtde: quantity,
    // });
    if (quantity >= 0) {
      this.setState({
        inputQtde: quantity,
      });
      addProductStorage({ ...prod, quantity });
      updateProducts();
    } else {
      this.setState({
        inputQtde: 0,
      });
      const { changeTotal } = this.props;
      changeTotal(getCartTotal());
    }
  };

  handleChange = async ({ target }) => {
    const { updateProducts } = this.props;
    const valueInput = Number(target.value);
    if (valueInput >= 0) {
      this.setState({
        inputQtde: target.value,
      });
      const { product } = this.props;
      addProductStorage({ ...product, quantity: target.value });
      updateProducts();
    } else {
      this.setState({
        inputQtde: 0,
      });
    }
    const { changeTotal } = this.props;
    changeTotal(getCartTotal());
  };

  render() {
    const {
      inputQtde,
    } = this.state;
    const { product } = this.props;
    return (
      <div>
        <div>
          <div>
            <p
              data-testid={ `customer_products__element-card-price-${product.id}` }
            >
              {product.price.toString().replace('.', ',')}
            </p>
            <img
              data-testid={ `customer_products__img-card-bg-image-${product.id}` }
              src={ product.url_image }
              alt={ product.name }
            />
          </div>
          <div>
            <p
              data-testid={ `customer_products__element-card-title-${product.id}` }
            >
              {product.name}
            </p>
            <button
              data-testid={ `customer_products__button-card-rm-item-${product.id}` }
              type="button"
              id={ product.id }
              onClick={ () => this.decBtnClick(product) }
            >
              -
            </button>
            <input
              data-testid={ `customer_products__input-card-quantity-${product.id}` }
              id={ product.id }
              onChange={ this.handleChange }
              type="number"
              value={ inputQtde }
              min="0"
            />
            <button
              data-testid={ `customer_products__button-card-add-item-${product.id}` }
              type="button"
              id={ product.id }
              onClick={ () => this.incBtnClick(product) }
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default ProdCard;
