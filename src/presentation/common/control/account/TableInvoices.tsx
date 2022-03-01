import React from 'react';
import { Table } from 'antd';
import { Popover } from 'antd';

import { IInvoice } from 'domain/interfaces/IInvoice';

interface ITableInvoices {
	invoices: Array<IInvoice>;
}

const TableInvoices = ({ invoices }: ITableInvoices) => {
	const tableColumn = [
		{
			title: 'Id',
			dataIndex: 'id',
			rowKey: 'id',
			key: 'id',
			width: '80px',
			render: (text, record) => (
				<Popover title={`ID заказа ${record.orderId}`} trigger="hover">
					{record.id}
				</Popover>
			)
		},
		{
			title: 'ФИО',
			dataIndex: 'fullname',
			rowKey: 'fullname',
			key: 'fullname'
		},
		{
			title: 'Почта',
			dataIndex: 'email',
			rowKey: 'email',
			key: 'email'
		},
		{
			title: 'Телефон',
			dataIndex: 'phone',
			rowKey: 'phone',
			key: 'phone'
		},
		{
			title: 'Адрес',
			dataIndex: 'userAddress',
			rowKey: 'userAddress',
			key: 'userAddress'
		},
		{
			title: 'Сумма',
			rowKey: 'fullPrice',
			dataIndex: 'fullPrice',
			key: 'fullPrice',
			render: (text, record) => {
				let amount = 0;
				record.productInInvoices.map((product) => {
					amount += product.price * product.count;
				});
				return <span className="text-right">{amount} тг</span>;
			}
		},
		{
			title: 'Дата',
			key: 'creationDate',
			dataIndex: 'creationDate',
			rowKey: 'creationDate',
			render: (text, record) => {
				return <>{new Date(record.creationDate).getUTCDate()}</>;
			}
		}
	];
	return (
		<Table
			columns={tableColumn}
			dataSource={invoices}
			rowKey={(record) => record.id}
		/>
	);
};

export default TableInvoices;
