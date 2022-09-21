import React from 'react';

function ProductCard() {
  return (
    <div>
      <div>
        <p
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          Preco
        </p>
        <img
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src="teste"
          alt="teste"
        />
      </div>
      <div>
        <p
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          Nome Produto
        </p>
        <button
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value="0"
        />
        <button
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
        >
          +
        </button>
      </div>
    </div>

  );
}
export default ProductCard;
