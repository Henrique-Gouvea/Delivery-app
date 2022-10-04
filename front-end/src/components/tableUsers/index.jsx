import React from 'react';
import './style.css';

function TableUsers() {
  const index = '3';
  return (
    <div>
      <table className="tableAdm">
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Senha</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {/* {users?.map((plan) => ( */}
          <tr key={ index }>
            <td
              data-testid={
                `admin_manage__element-user-table-item-number-${index}`
              }
            >
              Index-usuario
            </td>
            <td
              data-testid={
                `admin_manage__element-user-table-name-${index}`
              }
            >
              Nome usuario
            </td>
            <td
              data-testid={
                `admin_manage__element-user-table-email-${index}`
              }
            >
              Email usuario
            </td>
            <td
              data-testid={
                `admin_manage__element-user-table-role-${index}`
              }
            >
              Tipo usuario
            </td>
            <td
              data-testid={
                `admin_manage__element-user-table-remove-${index}`
              }
            >
              Excluir
            </td>
          </tr>
          {/* ))} */}
        </tbody>
      </table>
    </div>
  );
}
export default TableUsers;
