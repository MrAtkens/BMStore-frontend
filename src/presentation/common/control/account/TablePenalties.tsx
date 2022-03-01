import React from 'react';
import { Table } from 'antd';
import { Popover } from 'antd';

import { IPenalties } from 'domain/interfaces/IPenalties';

interface ITablePenalties {
	penalties: Array<IPenalties>;
}

const TablePenalties = ({ penalties }: ITablePenalties) => {
	const tableColumn = [
		{
			title: 'Id',
			dataIndex: 'id',
			rowKey: 'id',
			key: 'id',
			width: '80px'
		},
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
			}
		},
		{
			title: 'Сумма',
			rowKey: 'amount',
			dataIndex: 'amount',
			key: 'amount',
			width: '25%',
			render: (text, record) => {
				return <span className="text-right">{record.amount} тг</span>;
			}
		},
		{
			title: 'Статус',
			key: 'status',
			dataIndex: 'status',
			rowKey: 'status',
			width: '150px'
		}
	];
	return (
		<Table
			columns={tableColumn}
			dataSource={penalties}
			rowKey={(record) => record.id}
		/>
	);
};

export default TablePenalties;
