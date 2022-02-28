import React, { useState } from 'react';
import {
	Table,
	Input,
	InputNumber,
	Popconfirm,
	Form,
	Typography,
	Tooltip,
	Modal
} from 'antd';

import { IAddress } from 'domain/interfaces/IAddress';
import { addressApiService } from 'data/API';

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
	editing: boolean;
	dataIndex: string;
	title: any;
	inputType: 'number' | 'text';
	record: IAddress;
	index: number;
	children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
	editing,
	dataIndex,
	title,
	inputType,
	record,
	index,
	children,
	...restProps
}) => {
	const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

	return (
		<td {...restProps}>
			{editing ? (
				<Form.Item
					name={dataIndex}
					style={{ margin: 0 }}
					rules={[
						{
							required: true,
							message: `Пожалуйста, введите ${title}!`
						}
					]}
				>
					{inputNode}
				</Form.Item>
			) : (
				children
			)}
		</td>
	);
};

interface ITableAddress {
	address: Array<IAddress>;
}

const TableAddress = ({ address }: ITableAddress) => {
	const [form] = Form.useForm();
	const [isVisible, setIsVisible] = useState(false);
	const [data, setData] = useState(address);
	const [editingKey, setEditingKey] = useState<any>('');

	const onFinish = async (values: any) => {
		await addressApiService
			.addAddress(values.city, values.address, values.additionalInfo)
			.then(async () => {
				const response = await addressApiService.refreshAddresses();
				setData(response.data.data);
				setIsVisible(false);
			});
	};
	const isEditing = (record: IAddress) => record.addressId === editingKey;

	const add = () => {
		setIsVisible(true);
	};

	const edit = (record: Partial<IAddress>) => {
		form.setFieldsValue({ address: '', ...record });
		setEditingKey(record.addressId);
	};

	const deleteRecord = async (record: Partial<IAddress>) => {
		await addressApiService
			.removeAddress(record.addressId)
			.then(async () => {
				const response = await addressApiService.refreshAddresses();
				setData(response.data.data);
			});
	};

	const cancel = () => {
		setEditingKey('');
	};

	const save = async (key: React.Key) => {
		try {
			const row = (await form.validateFields()) as IAddress;
			await addressApiService
				.editAddress(key, row.city, row.address, row.additionalInfo)
				.then(async () => {
					const response = await addressApiService.refreshAddresses();
					setData(response.data.data);
				});
		} catch (errInfo) {}
	};

	const handleCancel = async () => {
		setIsVisible(false);
	};

	const columns = [
		{
			title: 'Id',
			dataIndex: 'addressId',
			rowKey: 'addressId',
			key: 'addressId',
			width: '120px'
		},
		{
			title: 'Город',
			dataIndex: 'city',
			rowKey: 'city',
			key: 'city',
			editable: true
		},
		{
			title: 'Адресс',
			dataIndex: 'address',
			rowKey: 'address',
			key: 'address',
			editable: true
		},
		{
			title: 'Дополнительная информация',
			dataIndex: 'additionalInfo',
			rowKey: 'additionalInfo',
			key: 'additionalInfo',
			editable: true
		},
		{
			title: 'Операций',
			dataIndex: 'operation',
			render: (_: any, record: IAddress) => {
				const editable = isEditing(record);
				return editable ? (
					<span>
						<Typography.Link
							onClick={() => save(record.addressId)}
							style={{ marginRight: 8 }}
						>
							Сохранить
						</Typography.Link>
						<Popconfirm
							title="Вы точно хотите отменить?"
							onConfirm={cancel}
						>
							<a>Отменить</a>
						</Popconfirm>
					</span>
				) : (
					<div className="ps-address-table__operations">
						<Typography.Link
							disabled={editingKey !== ''}
							onClick={add}
						>
							<Tooltip title="Добавить адресс" color="#196354">
								<i className="icon-plus-circle" />
							</Tooltip>
						</Typography.Link>
						<Typography.Link
							disabled={editingKey !== ''}
							onClick={() => edit(record)}
						>
							<Tooltip title="Изменить адресс" color="#196354">
								<i className="icon-pencil" />
							</Tooltip>
						</Typography.Link>
						<Typography.Link
							disabled={editingKey !== ''}
							onClick={() => deleteRecord(record)}
						>
							<Tooltip title="Удалить адресс" color="#196354">
								<i className="icon-trash" />
							</Tooltip>
						</Typography.Link>
					</div>
				);
			}
		}
	];

	const mergedColumns = columns.map((col) => {
		if (!col.editable) {
			return col;
		}
		return {
			...col,
			onCell: (record: IAddress) => ({
				record,
				inputType: col.dataIndex === 'age' ? 'number' : 'text',
				dataIndex: col.dataIndex,
				title: col.title,
				editing: isEditing(record)
			})
		};
	});

	return (
		<>
			<Form form={form} component={false}>
				<Table
					components={{
						body: {
							cell: EditableCell
						}
					}}
					bordered
					dataSource={data}
					rowKey={(record) => record.addressId}
					columns={mergedColumns}
					rowClassName="editable-row"
				/>
			</Form>
			<Modal
				visible={isVisible}
				onCancel={handleCancel}
				footer={<></>}
				title="Добавление адресса"
			>
				<Form form={form} onFinish={onFinish}>
					<div className="ps-form__content">
						<div className="row">
							<div className="col-sm-12">
								<Form.Item
									name="city"
									rules={[
										{
											required: true,
											type: 'string',
											min: 2,
											max: 100,
											message: 'Пожалуйста, введите город'
										}
									]}
								>
									<Input
										className="form-control"
										type="text"
										placeholder="Город"
									/>
								</Form.Item>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12">
								<Form.Item
									name="address"
									rules={[
										{
											required: true,
											type: 'string',
											min: 2,
											max: 180,
											message:
												'Пожалуйста, введите адресс'
										}
									]}
								>
									<Input
										className="form-control"
										type="text"
										placeholder="Адресс"
									/>
								</Form.Item>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12">
								<Form.Item
									name="additionalInfo"
									rules={[
										{
											required: true,
											type: 'string',
											min: 2,
											max: 100,
											message:
												'Пожалуйста, введите дополнительную информацию'
										}
									]}
								>
									<Input
										className="form-control"
										type="text"
										placeholder="Дополнительная информация"
									/>
								</Form.Item>
							</div>
						</div>
						<div className="form-group submit mt-20 ps-address-form-buttons">
							<button onClick={handleCancel} className="ps-btn">
								Отменить
							</button>
							<button type="submit" className="ps-btn">
								Добавить
							</button>
						</div>
					</div>
				</Form>
			</Modal>
		</>
	);
};

export default TableAddress;
