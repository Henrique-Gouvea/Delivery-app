import React from 'react';
import Header from '../../../components/header';
import CadasterUserForm from '../../../components/cadasterUserForm';

function Manage() {
  return (
    <div>
      <Header />
      <h2>Gerenciar Usuarios</h2>
      <div>
        <h3>Cadastrar novo usuario</h3>
        <CadasterUserForm />
      </div>
    </div>
  );
}
export default Manage;
