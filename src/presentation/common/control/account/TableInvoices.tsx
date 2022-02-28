import React from 'react';
import { Table } from 'antd';
import Link from 'next/link';
import { Popover } from 'antd';

import { IOrder } from 'domain/interfaces/IOrder';
import { PRODUCT } from 'constant/routes';

interface ITableInvoices {
	orders: Array<IOrder>;
}

const TableInvoices = ({ orders }: ITableInvoices) => {
	const tableColumn = [
		{
			title: 'Id',
			dataIndex: 'orderNumber',
			rowKey: 'orderNumber',
			key: 'orderNumber',
			width: '80px',
			render: (text, record) => (
				<Popover
					title={`ID оплаты ${record.invoiceId}`}
					trigger="hover"
				>
					{record.orderNumber}
				</Popover>
			)
		},
		{
			title: 'Товары',
			dataIndex: 'productInOrders',
			rowKey: 'productInOrders',
			key: 'productInOrders',
			render: (productInOrders) => {
				return (
					<>
						{productInOrders.map((product) => {
							return (
								<Link
									key={product.productId}
									passHref
									href={PRODUCT(product.productId)}
								>
									<a className="ml-3">
										{product.title}
										<sup>{product.count}</sup>
									</a>
								</Link>
							);
						})}
					</>
				);
			}
		},
		{
			title: 'Сумма',
			rowKey: 'amount',
			dataIndex: 'amount',
			key: 'amount',
			width: '25%',
			render: (text, record) => {
				let amount = 0;
				record.productInOrders.map((product) => {
					amount += product.price * product.count;
				});
				return <span className="text-right">{amount} тг</span>;
			}
		},
		{
			title: 'Статус',
			key: 'orderStatusName',
			dataIndex: 'orderStatusName',
			rowKey: 'orderStatusName',
			width: '150px'
		}
	];
	return (
		<Table
			columns={tableColumn}
			dataSource={orders}
			rowKey={(record) => record.id}
		/>
	);
};

export default TableInvoices;
