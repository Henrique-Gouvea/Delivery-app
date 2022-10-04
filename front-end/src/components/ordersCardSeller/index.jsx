import React, { Component } from 'react';
import './style.css';

import { Link } from 'react-router-dom';
import { getStorageOrder } from '../../helpers/localStorageOrderDdetails';
import { getStorageUser } from '../../helpers/localStorage';
import './style.css';

class OrdersCardSeller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: '',
    };
  }

  componentDidMount() {
    const orders = getStorageOrder();
    const user = getStorageUser();
    const orderFiltered = orders ? orders.filter((ord) => ord.seller_id === user.id) : [];
    console.log(orderFiltered);
    this.setState({
      orders: orderFiltered,
    });
  }

  convertDate = (date) => {
    const VALUE_REMOVED_DATE = 10;
    const removedDate = date.substr(0, VALUE_REMOVED_DATE);
    const dateFormatted = removedDate.split('-').reverse().join('/');
    return dateFormatted;
  };

  render() {
    const {
      orders,
    } = this.state;
    return (
      <div className="div-mae-order-seller">
        {orders ? orders.map((ord) => (

          <Link to={ `/seller/orders/${ord.id}` } key={ ord.id }>
            <div className="div-filha-order-seller">
              <div className="pedido">
                Pedido
                <div
                  className="order-id-seller"
                  data-testid={ `seller_orders__element-order-id-${ord.id}` }
                >
                  {ord.id}
                </div>
                <div className={ `${ord.status}` }>
                  <div
                    data-testid={ `seller_orders__element-delivery-status-${ord.id}` }
                    className="order-status-seller text-seller"
                  >
                    {ord.status}
                  </div>
                </div>
                <div className="date-price-seller">
                  <div
                    data-testid={ `seller_orders__element-order-date-${ord.id}` }
                    className="sale-date-seller text-seller"
                  >
                    {ord.sale_date ? this.convertDate(ord.sale_date) : ''}
                  </div>
                  <p
                    data-testid={ `seller_orders__element-card-price-${ord.id}` }
                    className="sale-price-seller text-seller"
                  >
                    {ord.total_price.toString().replace('.', ',')}
                  </p>
                </div>
                <p
                  data-testid={ `seller_orders__element-card-address-${ord.id}` }
                >
                  {`${ord.delivery_address} ${ord.delivery_number}`}
                </p>
              </div>
            </div>
          </Link>
        )) : ''}
      </div>
    );
  }
}
export default OrdersCardSeller;
