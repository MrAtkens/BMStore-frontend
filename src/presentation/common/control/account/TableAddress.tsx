import React, { useEffect, useState } from 'react';
import {
	Table,
	Popconfirm,
	Form,
	Typography,
	Tooltip,
	Modal,
	Input
} from 'antd';

import { IAddress } from 'domain/interfaces/IAddress';
import { addressApiService } from 'data/API';
import AutoComplete from 'react-google-autocomplete';

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
	editing: boolean;
	dataIndex: string;
	title: any;
	inputType: 'number' | 'text' | 'address';
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
	const inputNode = <Input />;

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

	const onFinish = async (values: any) => {
		await addressApiService.addAddress(values.address).then(async () => {
			const response = await addressApiService.refreshAddresses();
			setData(response.data.data);
			setIsVisible(false);
			form.setFieldsValue({ address: '' });
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
				.editAddress(key, row.address)
				.then(async () => {
					const response = await addressApiService.refreshAddresses();
					setData(response.data.data);
				});
			form.setFieldsValue({ address: '' });
		} catch (errInfo) {}
	};

	const handleCancel = async () => {
		setIsVisible(false);
		form.setFieldsValue({ address: '' });
	};

	const columns = [
		{
			title: 'Адрес',
			dataIndex: 'address',
			rowKey: 'address',
			key: 'address',
			editable: true
		},
		{
			title: 'Операции',
			dataIndex: 'operation',
			width: '100px',
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
					<div className="btn ps-address-table__operations">
						<Typography.Link
							disabled={editingKey !== ''}
							onClick={() => edit(record)}
						>
							<Tooltip title="Изменить адрес" color="#196354">
								<i className="icon-pencil" />
							</Tooltip>
						</Typography.Link>
						<Typography.Link
							disabled={editingKey !== ''}
							onClick={() => deleteRecord(record)}
						>
							<Tooltip title="Удалить адрес" color="#196354">
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
				inputType: col.dataIndex === 'address' ? 'address' : 'text',
				dataIndex: col.dataIndex,
				title: col.title,
				editing: isEditing(record)
			})
		};
	});

	return (
		<>
			<Form form={form} component={false}>
				<button className="ps-btn--address-add mb-3" onClick={add}>
					Добавить адрес
				</button>
				{isMobile ? (
					<Table
						scroll={{ x: 900, y: 500 }}
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
				) : (
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
				)}
			</Form>
			<Modal
				visible={isVisible}
				onCancel={handleCancel}
				footer={<></>}
				title="Добавление адреса"
			>
				<Form form={form} onFinish={onFinish}>
					<div className="ps-form__content">
						<div className="row">
							<div className="col-sm-12">
								<Form.Item
									name="address"
									rules={[
										{
											required: true,
											type: 'string',
											min: 3,
											max: 200,
											message:
												'Пожалуйста, введите адрес доставки'
										}
									]}
								>
									<AutoComplete
										className="form-control"
										apiKey={
											process.env[
												'NEXT_PUBLIC_PLACES_API_KEY'
											]
										}
										placeholder="Адрес"
										onKeyDown={(e) =>
											e.key === 'Enter'
												? e.preventDefault()
												: ''
										}
										onPlaceSelected={(place) => {
											form.setFieldsValue({
												address: place.formatted_address
											});
										}}
										options={{
											fields: ['formatted_address'],
											types: ['address'],
											componentRestrictions: {
												country: 'kz'
											}
										}}
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
