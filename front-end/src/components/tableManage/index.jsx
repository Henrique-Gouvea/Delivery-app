import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function TableManage(props) {
  const { users } = props;

  return (
    <div>
      <table className="tableAdm">
        <tr>
          <th>Item</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Tipo</th>
          <th>Excluir</th>
        </tr>
        {
          users.map(({ id, name, email, role }, index) => (
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
                <button
                  type="button"
                  className="removerAdm"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))
        }
      </table>
    </div>
  );
}

TableManage.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  role: PropTypes.string,
}.isRequired;
