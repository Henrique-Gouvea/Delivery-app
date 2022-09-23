import React, { Component } from 'react';
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
      <header>
        <div>

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
            {nameHeader}

          </h2>
          <Link to="/login">
            <button
              type="button"
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
