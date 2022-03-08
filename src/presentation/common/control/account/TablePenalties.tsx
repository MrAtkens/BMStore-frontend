import React, { useEffect, useState } from 'react';
import { Table } from 'antd';

import { IPenaltie } from 'domain/interfaces/IPenaltie';

interface ITablePenalties {
	penalties: Array<IPenaltie>;
}

const TablePenalties = ({ penalties }: ITablePenalties) => {
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
			title: 'Телефон',
			dataIndex: 'phoneNumber',
			rowKey: 'phoneNumber',
			key: 'phoneNumber',
			width: '15%'
		},
		{
			title: 'Адрес',
			dataIndex: 'address',
			rowKey: 'address',
			key: 'address'
		},
		{
			title: 'Причина',
			dataIndex: 'cause',
			rowKey: 'cause',
			key: 'cause',
			render: (record) => {
				return record;
			}
		},
		{
			title: 'Дата',
			key: 'paymentDate',
			dataIndex: 'paymentDate',
			rowKey: 'paymentDate',
			width: '10%',
			render: (text, record) => {
				return (
					<>
						{new Date(record.paymentDate).getUTCDay() >= 10
							? new Date(record.paymentDate).getUTCDay()
							: `0${new Date(record.paymentDate).getUTCDay()}`}
						.
						{new Date(record.paymentDate).getUTCMonth() >= 10
							? new Date(record.paymentDate).getUTCMonth() + 1
							: `0${
									new Date(record.paymentDate).getUTCMonth() +
									1
							  }`}
						.{new Date(record.paymentDate).getUTCFullYear()}
					</>
				);
			}
		},
		{
			title: 'Сумма',
			rowKey: 'sum',
			dataIndex: 'sum',
			key: 'sum',
			width: '13%',
			render: (text, record) => {
				return <span className="text-right">{record.sum}&nbsp;тг</span>;
			},
			sorter: (a, b) => a.sum - b.sum
		},
		{
			title: 'Статус',
			key: 'status',
			dataIndex: 'status',
			rowKey: 'status',
			render: (text, record) => {
				if (record.status === 0) return <>Не оплачено</>;
				else if (record.status === 1) return <>Оплачено</>;
				else if (record.status === 2) return <>Отменён</>;
				else return <>В ожиданий</>;
			},
			sorter: (a, b) => a.status - b.status,
			width: '15%'
		}
	];
	if (isMobile)
		return (
			<Table
				scroll={{ x: 1200, y: 500 }}
				columns={tableColumn}
				dataSource={penalties}
				rowKey={(record) => record.userId}
			/>
		);
	else
		return (
			<Table
				columns={tableColumn}
				dataSource={penalties}
				rowKey={(record) => record.userId}
			/>
		);
};

export default TablePenalties;
