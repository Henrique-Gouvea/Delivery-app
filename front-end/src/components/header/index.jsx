import React from 'react';
import { getStorageUser } from '../../helpers/localStorage';

function Header() {
  const getName = () => {
    const teste = getStorageUser();
    return teste.name;
  };
  return (
    <header>
      <div>
        <nav>
          <h2
            data-testid="customer_products__element-navbar-link-products"
          >
            Produtos

          </h2>
          <h2
            data-testid="customer_products__element-navbar-link-orders"
          >
            Meus Pedidos

          </h2>
          <h2
            data-testid="customer_products__element-navbar-user-full-name"
          >
            {getName()}

          </h2>
          <h2
            data-testid="customer_products__element-navbar-link-logout"
          >
            Sair
          </h2>
        </nav>
      </div>
    </header>
  );
}
export default Header;
