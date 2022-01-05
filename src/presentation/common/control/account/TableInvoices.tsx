import React from 'react';
import { Table } from 'antd';
import Link from 'next/link';

const TableInvoices = () => {
    const tableData = [
        {
            id: '1',
            invoiceId: '500884010',
            title: 'Marshall Kilburn Portable Wireless Speaker',
            dateCreate: '20-1-2020',
            amount: '42.99',
            status: 'Successful delivery',
        },
    ];
    const tableColumn = [
        {
            title: 'Id',
            dataIndex: 'invoiceId',
            rowKey: 'invoiceId',
            key: 'invoiceId',
            width: '120px',
            render: (text, record) => (
                <Link href="">
                    {record.invoiceId}
                </Link>
            ),
        },
        {
            title: 'Название',
            dataIndex: 'title',
            rowKey: 'title',
            key: 'title',
        },
        {
            title: 'Дата',
            rowKey: 'dateCreate',
            dataIndex: 'dateCreate',
            key: 'dateCreate',
            width: '120px',
        },
        {
            title: 'Сумма',
            rowKey: 'amount',
            dataIndex: 'amount',
            key: 'amount',
            render: (text, record) => (
                <span className="text-right">${record.amount}</span>
            ),
        },
        {
            title: 'Статус',
            key: 'status',
            dataIndex: 'status',
            rowKey: 'status',
            width: '150px',
            render: (text, record) => (
                <span className="text-right">{record.amount}</span>
            ),
        },
    ];
    return (
        <Table
            columns={tableColumn}
            dataSource={tableData}
            rowKey={record => record.id}
        />
    );
}

export default TableInvoices;
