import React from 'react';
import './style.css';

import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getStorageUser } from '../../helpers/localStorage';
import { getStorageProducts, removeProducts } from '../../helpers/localStorageProducts';
import { addOrdertorage } from '../../helpers/localStorageOrderDdetails';
import { apiRequestSalesPost } from '../../services/api';

function BtnSubmitOrder({ total, adressDelivery, numberDelivery, selected }) {
  const navigate = useNavigate();

  const createSales = async (createSalesOrder, token) => {
    const result = await apiRequestSalesPost(createSalesOrder, token);
    return result;
  };

  const clickSubmitOrder = async () => {
    const user = getStorageUser();
    const products = getStorageProducts();
    const teste = selected.key || 2;
    const teste2 = selected.value || 'Fulana Pereira';
    const productsIdQuantity = products.map((product) => ({
      product_id: product.id, quantity: product.quantity,
    }));
    const createSalesOrder = {
      user_id: Number(user.id),
      seller_id: Number(teste),
      delivery_address: adressDelivery,
      delivery_number: Number(numberDelivery),
      products: productsIdQuantity,
    };
    const detailOder = await createSales(createSalesOrder, user.token);
    addOrdertorage({ ...detailOder, products, seller_name: teste2, total });
    removeProducts();
    navigate(`/customer/orders/${detailOder.id}`);
  };

  return (
    <button
      className="finalizar"
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
