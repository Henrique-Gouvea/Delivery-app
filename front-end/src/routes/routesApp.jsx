import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/login';
import Cadaster from '../pages/cadaster';
import Products from '../pages/client/products';
import Checkout from '../pages/client/checkout';
import OrdersDetails from '../pages/client/ordersDetails';
import Orders from '../pages/client/orders';
import Manage from '../pages/adm/manage';
import OrdersSellers from '../pages/seller/ordersSeller';
import OrdersSellersDetails from '../pages/seller/ordersSellerDetails';

function RoutesApp() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Cadaster /> } />
      <Route exact path="/customer/products" element={ <Products /> } />
      <Route exact path="/customer/checkout" element={ <Checkout /> } />
      <Route exact path="/customer/orders" element={ <Orders /> } />
      <Route exact path="/customer/orders/:id" element={ <OrdersDetails /> } />
      <Route exact path="/admin/manage" element={ <Manage /> } />
      <Route exact path="/seller/orders" element={ <OrdersSellers /> } />
      <Route exact path="/seller/orders/:id" element={ <OrdersSellersDetails /> } />
    </Routes>
  );
}

export default RoutesApp;
