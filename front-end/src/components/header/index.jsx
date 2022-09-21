import React from 'react';

function Header() {
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
            Nome

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
