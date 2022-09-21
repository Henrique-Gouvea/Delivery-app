import React from 'react';
import Header from '../../../components/header';
import TableCheckout from '../../../components/tableCheckout';

function Checkout() {
  return (

    <div>
      <Header />
      <div>
        <TableCheckout />
        <p data-testid="customer_checkout__element-order-total-price">Valor Total:</p>
      </div>
    </div>

  );
}
export default Checkout;
