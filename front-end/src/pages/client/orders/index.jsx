import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../../components/header';
import OrdersCard from '../../../components/ordersCard';
// import apiRequestSalesGetAll from '../../../services/api';

function Orders() {
  const navigate = useNavigate();
  // const { token } = JSON.parse(localStorage.getItem('user'));

  // const requestSales = async () => {
  //   const allSales = await apiRequestSalesGetAll(token);
  //   console.log('===================');
  //   console.log('ALLSALES', allSales);
  // };
  // useEffect(() => {
  //   requestSales();
  // }, []);

  return (
    <div>
      <Header />
      <Link to="/customer/products">
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => { navigate('/customer/products'); } }
        >
          Meus pedidos
        </button>
      </Link>
      <OrdersCard />
    </div>
  );
}
export default Orders;
