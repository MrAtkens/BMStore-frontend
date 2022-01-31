import React from 'react';
import { observer } from 'mobx-react-lite';
import Link from 'next/link';

import { Form, Input } from 'antd';
import AutoComplete from "react-google-autocomplete";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import { LOGIN, REGISTER } from 'constant/routes';

import userStore from 'data/stores/userStore';

const Register = observer(() => {

	const [form] = Form.useForm();

	const onFinish = async (values: any) => {
		console.log('Success:', values);
		await userStore.registration(values.name, values.phone, values.email, values.password, values.address)
	};

	return (
		<div className="ps-my-account">
			<div className="container">
				<Form
					form={form}
					className="ps-form--account"
					onFinish={onFinish}>
					<ul className="ps-tab-list">
						<li>
							<Link passHref href={LOGIN}>
								<a>Вход</a>
							</Link>
						</li>
						<li className="active">
							<Link passHref href={REGISTER}>
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
											message: 'Пожалуйста, введите ваше ФИО',
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
									initialValue="+7"
									rules={[
										{
											required: true,
											message: 'Пожалуйста, введите номер телефона',
										},
										{
											min: 10,
											max: 18,
											message: 'Некорректный номер телефона. Номера телефонов начинаются со знаком "+"',
											pattern: /^[+][0-9]{10,18}$/i
										}
									]}>
									<Input
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
											message: 'Пожалуйста, введите вашу почту',
										},
										{
											type: "email",
											message: 'Некорректная почта',
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
											min: 3,
											max: 200,
											message: 'Пожалуйста, введите адрес доставки',
										},
									]}>
									<AutoComplete
										className="form-control"
										apiKey={process.env['NEXT_PUBLIC_PLACES_API_KEY']}
										placeholder="Адрес"
										onKeyDown={(e)=> e.key === "Enter" ? e.preventDefault(): ''}
										onPlaceSelected={(place) => {
											form.setFieldsValue({address: place.formatted_address})
										}}
										options={{
											fields: ["formatted_address"],
											types: ["address"],
											componentRestrictions: { country: "kz" },
										}}
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
