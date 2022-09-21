import React from 'react';
import Header from '../../../components/header';
import TableCheckout from '../../../components/tableCheckout';

function Checkout() {
  return (

    <div>
      <Header />
      <h2>Finalizar Pedido</h2>
      <div>
        <TableCheckout />
        <p data-testid="customer_checkout__element-order-total-price">Valor Total:</p>
      </div>
      <div>
        <h2>
          Detalhes e Endereço de entrega
        </h2>
        <p>
          Vendedor responsabel
        </p>
        <select
          data-testid="customer_checkout__select-seller"
          name="select"
        >
          <option value="valor1">Valor 1</option>
          <option value="valor2" selected>Valor 2</option>
          <option value="valor3">Valor 3</option>
        </select>
        <p>Endereço</p>
        <input
          data-testid="customer_checkout__input-address"
        />
        <p>Numero</p>
        <input
          data-testid="customer_checkout__input-address-number"
        />
      </div>
      <button
        type="submit"
        data-testid="customer_checkout__button-submit-order"
      >
        Finalizar pedido
      </button>
    </div>

  );
}
export default Checkout;
