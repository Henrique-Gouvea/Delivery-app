import React, { Component } from 'react';
import './style.css';

import { Link } from 'react-router-dom';
import { getStorageOrder } from '../../helpers/localStorageOrderDdetails';
import { getStorageUser } from '../../helpers/localStorage';

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
      <div>
        {orders ? orders.map((ord) => (
          <Link to={ `/seller/orders/${ord.id}` } key={ ord.id }>
            <div className="div-mae-seller">
              <div>
                <div>
                  <p
                    data-testid={ `seller_orders__element-order-id-${ord.id}` }
                  >
                    {ord.id}
                  </p>
                  <p
                    data-testid={ `seller_orders__element-delivery-status-${ord.id}` }
                  >
                    {ord.status}
                  </p>
                  <p
                    data-testid={ `seller_orders__element-order-date-${ord.id}` }
                  >
                    {ord.sale_date ? this.convertDate(ord.sale_date) : ''}
                  </p>
                  <p
                    data-testid={ `seller_orders__element-card-price-${ord.id}` }
                  >
                    {ord.total_price.toString().replace('.', ',')}
                  </p>
                  <p
                    data-testid={ `seller_orders__element-card-address-${ord.id}` }
                  >
                    {`${ord.delivery_address} ${ord.delivery_number}`}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        )) : ''}
      </div>
    );
  }
}
export default OrdersCardSeller;
