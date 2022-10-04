import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getStorageOrder } from '../../helpers/localStorageOrderDdetails';

class OrdersCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: '',
    };
  }

  componentDidMount() {
    const orders = getStorageOrder();
    this.setState({
      orders,
    });
  }

  convertDate = (date) => {
    const VALUE_REMOVED_DATE = 10;
    const removedDate = date.substr(0, VALUE_REMOVED_DATE);
    const dateFormatted = removedDate.split('-').reverse().join('/');
    console.log(dateFormatted);
    return dateFormatted;
  };

  render() {
    const {
      orders,
    } = this.state;
    return (
      <div>
        {orders ? orders.map((ord) => (
          <Link to={ `/customer/orders/${ord.id}` } key={ ord.id }>
            <div>
              <p
                data-testid={ `customer_orders__element-order-id-${ord.id}` }
              >
                {ord.id}
              </p>
              <p
                data-testid={ `customer_orders__element-delivery-status-${ord.id}` }
              >
                {ord.status}
              </p>
              <p
                data-testid={ `customer_orders__element-order-date-${ord.id}` }
              >
                {ord.sale_date ? this.convertDate(ord.sale_date) : ''}
              </p>
              <p
                data-testid={ `customer_orders__element-card-price-${ord.id}` }
              >
                {ord.total_price.toString().replace('.', ',')}
              </p>
            </div>
          </Link>
        )) : ''}
      </div>
    );
  }
}
export default OrdersCard;
