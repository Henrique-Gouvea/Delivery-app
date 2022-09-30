import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import Header from '../../../components/header';
import OrdersCard from '../../../components/ordersCard';
// import apiRequestSalesGetAll from '../../../services/api';

function Orders() {
  return (
    <div>
      <Header />
      <OrdersCard />
    </div>
  );
}
export default Orders;
