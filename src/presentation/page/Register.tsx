import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import Link from 'next/link';

import { Form, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import { LOGIN, REGISTER } from 'constant/routes';

import userStore from 'data/stores/userStore';

const Register = observer(() => {

	const [phone, setPhone] = useState(0)

	const onFinish = async (values: any) => {
		console.log('Success:', values);
		await userStore.registration(values.name, values.phone, values.email, values.password, values.address)
	};

	const onNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newNumber = parseInt(e.target.value || '0', 10);
		if (Number.isNaN(phone)) {
			return;
		}
		else
			setPhone(newNumber)
	};

	return (
		<div className="ps-my-account">
			<div className="container">
				<Form
					className="ps-form--account"
					onFinish={onFinish}>
					<ul className="ps-tab-list">
						<li>
							<Link href={LOGIN}>
								<a>Вход</a>
							</Link>
						</li>
						<li className="active">
							<Link href={REGISTER}>
								<a>Регистрация</a>
							</Link>
						</li>
					</ul>
					<div className="ps-tab active" id="register">
						<div className="ps-form__content">
							<h5>Регистрация аккаунта</h5>
							<div className="form-group">
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
							<div className="form-group">
								<Form.Item
									name="phone"
									rules={[
										{
											required: true,
											message: 'Пожалуйста введите ваш номер телефона',
										},
										{
											min: 10,
											max: 20,
											message: 'Не корректный номер телефона',
										}
									]}>
									<Input
										defaultValue={""}
										value={phone}
										onChange={onNumberChange}
										className="form-control"
										placeholder="+7"
									/>
								</Form.Item>
							</div>
							<div className="form-group">
								<Form.Item
									name="email"
									rules={[
										{
											required: true,
											message: 'Пожалуйста введите вашу почту',
										},
										{
											type: "email",
											message: 'Пожалуйста введите корректную почту',
										},

									]}>
									<Input
										className="form-control"
										type="text"
										placeholder="Почта"
									/>
								</Form.Item>
							</div>
							<div className="form-group">
								<Form.Item
									name="address"
									rules={[
										{
											required: true,
											type: 'string',
											min: 2,
											max: 200,
											message: 'Пожалуйста введите адресс доставки',
										},
									]}>
									<Input
										className="form-control"
										type="text"
										placeholder="Адресс"
									/>
								</Form.Item>
							</div>
							<div className="form-group form-forgot">
								<Form.Item
									name="password"
									rules={[
										{
											required: true,
											message:
												'Пожалуйста, введите пароль!',
										},
										{
											min: 6,
											max: 60,
											message: 'Пароль должен содержать минимум 6 символов'
										},
									]}>
									<Input.Password
										className="form-control"
										type="password"
										iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
										placeholder="Пароль..."
									/>
								</Form.Item>
							</div>
							<div className="form-group submit">
								<button
									type="submit"
									className="ps-btn ps-btn--fullwidth">
									Регистрация
								</button>
							</div>
						</div>
					</div>
				</Form>
			</div>
		</div>
	);
})

export default Register;
