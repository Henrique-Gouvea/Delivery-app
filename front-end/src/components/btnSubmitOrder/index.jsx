import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getStorageUser } from '../../helpers/localStorage';
import { getStorageProducts } from '../../helpers/localStorageProducts';
import { apiRequestSalesPost } from '../../services/api';

function BtnSubmitOrder({ adressDelivery, numberDelivery, selected }) {
  const navigate = useNavigate();

  const createSales = async (createSalesOrder, token) => {
    const result = await apiRequestSalesPost(createSalesOrder, token);
    console.log(result);
    return result.id;
  };

  const clickSubmitOrder = async () => {
    const user = getStorageUser();
    const products = getStorageProducts();
    const teste = selected || 2;
    console.log(selected);
    const productsIdQuantity = products.map((product) => ({
      product_id: product.id, quantity: product.quantity,
    }));
    const createSalesOrder = {
      user_id: Number(user.id),
      seller_id: Number(teste),
      // total_price: Number(total),
      delivery_address: adressDelivery,
      delivery_number: Number(numberDelivery),
      products: productsIdQuantity,
    };
    console.log(createSalesOrder);
    const id = await createSales(createSalesOrder, user.token);
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

BtnSubmitOrder.propTypes = {
  numberDelivery: PropTypes.number,
}.isRequired;
export default BtnSubmitOrder;
