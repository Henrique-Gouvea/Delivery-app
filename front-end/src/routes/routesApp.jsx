import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/login';
import Cadaster from '../pages/cadaster';
import Products from '../pages/client/products';
import Checkout from '../pages/client/checkout';

function RoutesApp() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Cadaster /> } />
      <Route exact path="/customer/products" element={ <Products /> } />
      <Route exact path="/customer/checkout" element={ <Checkout /> } />
    </Routes>
  );
}

export default RoutesApp;
