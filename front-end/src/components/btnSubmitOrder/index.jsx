import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getStorageUser } from '../../helpers/localStorage';

function BtnSubmitOrder({ total, adressDelivery, numberDelivery }) {
  const navigate = useNavigate();
  const id = 1;

  const clickSubmitOrder = () => {
    const user = getStorageUser();
    console.log(user.token);
    console.log(total, adressDelivery, numberDelivery);
    // apiRequestSalesGetAll()
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
