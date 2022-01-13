import React from 'react';

import OrderTracking from 'presentation/common/control/OrderTracking';
import { IOrder } from 'domain/interfaces/IOrder';

interface IOrders{
    orders: Array<IOrder>
}

const Orders = ({orders} : IOrders) => {
    return (
        <div className="ps-page__content">
            <div className="ps-section--account-setting">
                <OrderTracking orders={orders} />
            </div>
        </div>
    );
}
export default Orders;
