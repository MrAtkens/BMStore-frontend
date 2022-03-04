import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { Popover } from 'antd';

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
			title: 'Причина',
			dataIndex: 'reason',
			rowKey: 'reason',
			key: 'reason',
			render: (record) => {
				return (
					<Popover title={`ID оплаты ${record.id}`} trigger="hover">
						{record.reason}
					</Popover>
				);
			},
			sorter: (a, b) => a.reason - b.reason
		},
		{
			title: 'Сумма',
			rowKey: 'amount',
			dataIndex: 'amount',
			key: 'amount',
			width: '25%',
			render: (text, record) => {
				return (
					<span className="text-right">{record.amount}&nbsp;тг</span>
				);
			},
			sorter: (a, b) => a.amount - b.amount
		},
		{
			title: 'Статус',
			key: 'status',
			dataIndex: 'status',
			rowKey: 'status',
			width: '150px'
		}
	];
	if (isMobile)
		return (
			<Table
				scroll={{ x: 1200, y: 500 }}
				columns={tableColumn}
				dataSource={penalties}
				rowKey={(record) => record.id}
			/>
		);
	else
		return (
			<Table
				columns={tableColumn}
				dataSource={penalties}
				rowKey={(record) => record.id}
			/>
		);
};

export default TablePenalties;
