import React, { useEffect } from 'react';
import { Form, Input } from 'antd';
import { observer } from 'mobx-react-lite';

import userStore from "data/stores/userStore"

const UserInformationForm = observer(() => {

	const onFinish = async (values: any) => {
		console.log('Success:', values);
		await userStore.userEdit(values.name, values.address, values.phone)
	};

	const [form] = Form.useForm();

	useEffect(() => {
		form.setFieldsValue({
			name: userStore.user.fullName,
			address: userStore.user.address,
			phone: userStore.user.phone
		})
	},[userStore.user.fullName, userStore.user.phone])

	return (
		<Form
			form={form}
			className="ps-form--account-setting"
			onFinish={onFinish}>
			<div className="ps-form__header">
				<h3>Информация пользователя</h3>
			</div>
			<div className="ps-form__content">
				<div className="row">
					<div className="col-sm-12">
						<Form.Item
							name="name"
							rules={[
								{
									required: true,
									type: 'string',
									min: 2,
									max: 100,
									message: 'Пожалуйста введите ваше ФИО',
								},
							]}>
							<Input
								className="form-control"
								type="text"
								placeholder="ФИО"
							/>
						</Form.Item>
					</div>
					<div className="col-sm-12">
						<Form.Item
							name="address"
							rules={[
								{
									required: true,
									message: 'Пожалуйста введите ваш адресс',
								},
							]}>
							<Input
								className="form-control"
								placeholder="Ваш адресс"
							/>
						</Form.Item>
					</div>
					<div className="col-sm-12">
						<Form.Item
							name="phone"
							rules={[
								{
									required: true,
									message: 'Пожалуйста введите ваш номер телефона',
								},
								{
									min: 10,
									max: 18,
									message: 'Не корректный номер телефона',
									pattern: /^[+][0-9]{10,18}$/i
								}
							]}>
							<Input
								className="form-control"
								placeholder="Номер телефона"
							/>
						</Form.Item>
					</div>
					{/*<div className="col-sm-12">*/}
					{/*	<Form.Item*/}
					{/*		className="form-group"*/}
					{/*		name="password"*/}
					{/*		rules={[*/}
					{/*			{*/}
					{/*				required: true,*/}
					{/*				message:*/}
					{/*					'Пожалуйста, введите пароль!',*/}
					{/*			},*/}
					{/*			{*/}
					{/*				pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/i,*/}
					{/*				min: 8,*/}
					{/*				max: 60,*/}
					{/*				message: 'Пароль должен содержать минимум 8 символов и содержать минимум 1 заглавный символ и не алфавитный символ',*/}
					{/*			},*/}
					{/*		]}>*/}
					{/*		<Input.Password*/}
					{/*			className="form-control"*/}
					{/*			type="password"*/}
					{/*			iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}*/}
					{/*			placeholder="Пароль..."*/}
					{/*		/>*/}
					{/*	</Form.Item>*/}
					{/*</div>*/}
				</div>

				<div className="form-group submit mt-20">
					<button className="ps-btn">Обновить профиль</button>
				</div>
			</div>
		</Form>
	);
});

export default UserInformationForm;
