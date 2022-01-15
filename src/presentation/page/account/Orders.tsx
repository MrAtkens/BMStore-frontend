import React from 'react';

import { IOrder } from 'domain/interfaces/IOrder';
import TableInvoices from 'presentation/common/control/account/TableInvoices';

interface IOrders{
    orders: Array<IOrder>
}

const Orders = ({orders} : IOrders) => {
    return (
        <div className="ps-page__content">
            <TableInvoices orders={orders} />
        </div>
    );
}
export default Orders;
