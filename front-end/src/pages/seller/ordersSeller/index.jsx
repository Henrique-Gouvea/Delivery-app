import React from 'react';
import Header from '../../../components/header';
import OrdersCardSeller from '../../../components/ordersCardSeller';

function Orders() {
  return (
    <div>
      <Header />
      <h2>Meus pedidos</h2>
      <OrdersCardSeller />
    </div>
  );
}
export default Orders;
