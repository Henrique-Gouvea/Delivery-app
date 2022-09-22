import React from 'react';
import Header from '../../../components/header';
import OrdersCard from '../../../components/ordersCard';

function Orders() {
  return (
    <div>
      <Header />
      <h2>Meus pedidos</h2>
      <OrdersCard />
    </div>
  );
}
export default Orders;
