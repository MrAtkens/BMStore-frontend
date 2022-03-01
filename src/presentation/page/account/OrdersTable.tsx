import React from 'react';

import { IOrder } from 'domain/interfaces/IOrder';
import TableOrders from 'presentation/common/control/account/TableOrders';

interface IOrders {
	orders: Array<IOrder>;
}

const OrdersTable = ({ orders }: IOrders) => {
	return (
		<div className="ps-page__content">
			<TableOrders orders={orders} />
		</div>
	);
};
export default OrdersTable;
