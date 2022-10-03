import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

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

  incBtnClick = (prod) => {
    const { inputQtde } = this.state;
    const quantity = Number(inputQtde) + 1;
    addProductStorage({ ...prod, quantity });
    this.setState({
      inputQtde: quantity,
    });
    const { changeTotal } = this.props;
    changeTotal(getCartTotal());
  };

  decBtnClick = (prod) => {
    const { inputQtde } = this.state;
    const { changeTotal } = this.props;
    const quantity = Number(inputQtde - 1);
    if (quantity >= 0) {
      this.setState({
        inputQtde: quantity,
      });
      addProductStorage({ ...prod, quantity });
    } else {
      this.setState({
        inputQtde: 0,
      });
    }
    changeTotal(getCartTotal());
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
      <div className="div-mae">
        <div className="div-filha">
          <div>
            R$
          </div>
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

        <div className="div-filha">
          <p
            className="card-title"
            data-testid={ `customer_products__element-card-title-${product.id}` }
          >
            {product.name}
          </p>
          <div className="div-neta">

            <button
              className="change-quantity"
              data-testid={ `customer_products__button-card-rm-item-${product.id}` }
              type="button"
              id={ product.id }
              onClick={ () => this.decBtnClick(product) }
            >
              -
            </button>
            <input
              className="input-number"
              data-testid={ `customer_products__input-card-quantity-${product.id}` }
              id={ product.id }
              onChange={ this.handleChange }
              type="number"
              value={ inputQtde }
              min="0"
            />
            <button
              className="change-quantity"
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

ProdCard.propTypes = {
  changeTotal: PropTypes.function,
}.isRequired;

export default ProdCard;
