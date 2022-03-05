import React, { useEffect, useState } from 'react';
import { Table } from 'antd';

import { IInvoice } from 'domain/interfaces/IInvoice';

interface ITableInvoices {
	invoices: Array<IInvoice>;
}

const TableInvoices = ({ invoices }: ITableInvoices) => {
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
			title: 'ФИО',
			dataIndex: 'fullname',
			rowKey: 'fullname',
			key: 'fullname',
			sorter: (a, b) => a.fullname - b.fullname
		},
		{
			title: 'Почта',
			dataIndex: 'email',
			rowKey: 'email',
			key: 'email',
			sorter: (a, b) => a.email - b.email
		},
		{
			title: 'Телефон',
			dataIndex: 'phone',
			rowKey: 'phone',
			key: 'phone',
			sorter: (a, b) => a.phone - b.phone
		},
		{
			title: 'Адрес',
			dataIndex: 'userAddress',
			rowKey: 'userAddress',
			key: 'userAddress',
			sorter: (a, b) => a.userAddress - b.userAddress
		},
		{
			title: 'Сумма',
			rowKey: 'fullPrice',
			dataIndex: 'fullPrice',
			key: 'fullPrice',
			width: '150px',
			render: (text, record) => {
				return (
					<span className="text-right">
						{record.fullPrice}&nbsp;тг
					</span>
				);
			},
			sorter: (a, b) => a.fullPrice - b.fullPrice
		},
		{
			title: 'Дата',
			key: 'creationDate',
			dataIndex: 'creationDate',
			rowKey: 'creationDate',
			render: (text, record) => {
				return (
					<>
						{new Date(record.creationDate).getUTCDay() >= 10
							? new Date(record.creationDate).getUTCDay()
							: `0${new Date(record.creationDate).getUTCDay()}`}
						.
						{new Date(record.creationDate).getUTCMonth() >= 10
							? new Date(record.creationDate).getUTCMonth() + 1
							: `0${
									new Date(
										record.creationDate
									).getUTCMonth() + 1
							  }`}
						.{new Date(record.creationDate).getUTCFullYear()}
					</>
				);
			}
		}
	];

	if (isMobile)
		return (
			<Table
				scroll={{ x: 1200, y: 500 }}
				columns={tableColumn}
				dataSource={invoices}
				rowKey={(record) => record.id}
			/>
		);
	else
		return (
			<Table
				columns={tableColumn}
				dataSource={invoices}
				rowKey={(record) => record.id}
			/>
		);
};

export default TableInvoices;
