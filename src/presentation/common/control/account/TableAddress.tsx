import React from 'react';
import { Table } from 'antd';
import { IAddress } from 'domain/interfaces/IAddress';

interface ITableInvoices {
	address: Array<IAddress>;
}

const TableAddress = ({ address }: ITableInvoices) => {
	const tableColumn = [
		{
			title: 'Адрес',
			key: 'address',
			dataIndex: 'address',
			rowKey: 'address',
			sorter: (a, b) => a.length - b.length
		}
	];
	return (
		<Table
			columns={tableColumn}
			dataSource={address}
			rowKey={(record) => record.id}
		/>
	);
};

export default TableAddress;
