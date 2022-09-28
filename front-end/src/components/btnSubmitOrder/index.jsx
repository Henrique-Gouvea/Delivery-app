import React from 'react';
import { useNavigate } from 'react-router-dom';

function BtnSubmitOrder() {
  const navigate = useNavigate();
  const id = 1;
  const clickSubmitOrder = () => {
    navigate(`/customer/orders/${id}`);
  };

  return (
    <button
      type="submit"
      data-testid="customer_checkout__button-submit-order"
      onClick={ clickSubmitOrder }
    >
      Finalizar pedido
    </button>
  );
}
export default BtnSubmitOrder;
