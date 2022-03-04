import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import Link from 'next/link';
import { Popover } from 'antd';

import { IOrder } from 'domain/interfaces/IOrder';
import { PRODUCT } from 'constant/routes';

interface ITableOrders {
	orders: Array<IOrder>;
}

const TableOrders = ({ orders }: ITableOrders) => {
	const [size, setSize] = useState(0);
	const [isMobile, setIsMobile] = useState(false);

	const updateWidth = () => {
		if (typeof window !== 'undefined') setSize(window.innerWidth);
	};

	useEffect(() => {
		if (typeof window !== 'undefined') updateWidth();
	}, []);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('resize', updateWidth);
			if (window.innerWidth < 700) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
			return () => window.removeEventListener('resize', updateWidth);
		} else return () => null;
	}, [size]);

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
				return <span className="text-right">{amount}&nbsp;тг</span>;
			},
			sorter: (a, b) => {
				let amountFirst,
					amountSecond = 0;
				a.productInOrders.map((product) => {
					amountFirst += product.price * product.count;
				});
				b.productInOrders.map((product) => {
					amountSecond += product.price * product.count;
				});
				return amountFirst - amountSecond;
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
	if (isMobile)
		return (
			<Table
				scroll={{ x: 1200, y: 500 }}
				columns={tableColumn}
				dataSource={orders}
				rowKey={(record) => record.id}
			/>
		);
	else
		return (
			<Table
				columns={tableColumn}
				dataSource={orders}
				rowKey={(record) => record.id}
			/>
		);
};

export default TableOrders;
