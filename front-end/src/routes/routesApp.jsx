import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/login';
import Cadaster from '../pages/cadaster';

function RoutesApp() {
  return (
    <Routes>
      <Route exact path="/" element={ <Login /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Cadaster /> } />

    </Routes>
  );
}

export default RoutesApp;
