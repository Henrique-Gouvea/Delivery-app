import React from 'react';
import Header from '../../../components/header';
import CadasterUserForm from '../../../components/cadasterUserForm';
import TableUsers from '../../../components/tableUsers';

function Manage() {
  return (
    <div>
      <Header />
      <h2>Gerenciar Usuarios</h2>
      <div>
        <h3>Cadastrar novo usuario</h3>
        <CadasterUserForm />
      </div>
      <div>
        <h3>Lista Usuarios</h3>
        <TableUsers />
      </div>
    </div>
  );
}
export default Manage;
