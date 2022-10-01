import React, { useEffect, useState } from 'react';
import { apiRequestUserGetAll } from '../../services/api';

export default function TableAdmin() {
  const [allUsers, setAllUsers] = useState([]);

  const users = async () => {
    const result = await apiRequestUserGetAll();
    const noAdmin = result.filter((elem) => elem.role !== 'administrator');
    setAllUsers(noAdmin);
  };

  console.log('USERS', allUsers);

  useEffect(() => {
    users();
  }, []);

  return (
    <table>
      <tr>
        <th>Item</th>
        <th>Nome</th>
        <th>Email</th>
        <th>Tipo</th>
        <th>Excluir</th>
      </tr>
      {
        allUsers.map(({ id, name, email, role }, index) => (
          <tr key={ id }>
            <td data-testid={ `admin_manage__element-user-table-item-number-${index}` }>
              {index + 1}
            </td>
            <td data-testid={ `admin_manage__element-user-table-name-${index}` }>
              {name}
            </td>
            <td data-testid={ `admin_manage__element-user-table-email-${index}` }>
              {email}
            </td>
            <td data-testid={ `admin_manage__element-user-table-role-${index}` }>
              {role === 'seller' ? 'P. Vendedora' : 'Cliente'}
            </td>
            <td data-testid={ `admin_manage__element-user-table-remove-${index}` }>
              <button type="button">
                Excluir
              </button>
            </td>
          </tr>

        ))
      }

    </table>

  );
}
