import React from 'react';
import Header from '../../../components/header';
import OrdersCardSeller from '../../../components/ordersCardSeller';
import './style.css';

function Orders() {
  return (
    <div className="mae">
      <Header />
      <h2>Meus pedidos</h2>
      <div className="pageOrder-seller">
        <OrdersCardSeller
          className="divcardsOrder-seller"
        />
      </div>
    </div>
  );
}
export default Orders;
