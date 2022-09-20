import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../login';

function RoutesApp(){
  return(
    <Routes>
      <Route exact path="/" element={ <Login/> } />
      <Route exact path="/login" element={ <Login/> } />
    </Routes>
  )
}

export default RoutesApp;
