import React from 'react';
import './style.css';

import Header from '../../../components/header';
import OrdersCardSeller from '../../../components/ordersCardSeller';

function Orders() {
  return (
    <div>
      <Header />
      <h2 className="sellerPedidos">Meus pedidos</h2>
      <OrdersCardSeller />
    </div>
  );
}
export default Orders;
