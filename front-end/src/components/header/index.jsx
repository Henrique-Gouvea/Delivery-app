import React, { Component } from 'react';
import './style.css';

import { Link } from 'react-router-dom';
import { getStorageUser, clearStorageUser } from '../../helpers/localStorage';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameHeader: '',
    };
  }

  componentDidMount() {
    this.setState({
      nameHeader: this.teste(),
    });
  }

  teste = () => {
    const user = getStorageUser();
    console.log(user);
    return user.name;
  };

  render() {
    const {
      nameHeader,
    } = this.state;
    return (
      <header className="nav">
        <div className="leftItens">
          <Link to="/customer/products">
            <button
              type="button"
              data-testid="customer_products__element-navbar-link-products"
            >
              Produtos
            </button>
          </Link>

          <Link to="/customer/orders">
            <button
              type="button"
              data-testid="customer_products__element-navbar-link-orders"
            >
              Meus Pedidos
            </button>
          </Link>
        </div>

        <div className="rightItens">
          <button
            type="button"
            className="client"
            data-testid="customer_products__element-navbar-user-full-name"
          >
            {nameHeader}

          </button>

          <Link to="/login">
            <button
              type="button"
              className="sair"
              data-testid="customer_products__element-navbar-link-logout"
              onClick={ () => clearStorageUser() }
            >
              Sair
            </button>
          </Link>
        </div>

      </header>
    );
  }
}
export default Header;
