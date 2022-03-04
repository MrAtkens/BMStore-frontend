import React from 'react';
import { Table } from 'antd';

import { IInvoice } from 'domain/interfaces/IInvoice';

interface ITableInvoices {
	invoices: Array<IInvoice>;
}

const TableInvoices = ({ invoices }: ITableInvoices) => {
	const tableColumn = [
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
				return (
					<span className="text-right">{record.fullPrice} тг</span>
				);
			}
		},
		{
			title: 'Дата',
			key: 'creationDate',
			dataIndex: 'creationDate',
			rowKey: 'creationDate',
			render: (text, record) => {
				return (
					<>
						{new Date(record.creationDate).getUTCDate()}.
						{new Date(record.creationDate).getUTCMonth()}.
						{new Date(record.creationDate).getUTCFullYear()}
					</>
				);
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
