import React, { useState } from 'react';
import Link from 'next/link';
import { Form, Input } from 'antd';
import { observer } from 'mobx-react-lite';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';


import userStore from "data/stores/userStore"
import { LOGIN, REGISTER } from 'constant/routes';

const Login = observer(() => {

	const [phone, setPhone] = useState(0)

	const onFinish = async (values: any) => {
		console.log('Success:', values);
		await userStore.authenticate(values.phone, values.password)
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
						<li className="active">
							<Link href={LOGIN}>
								<a>Вход</a>
							</Link>
						</li>
						<li>
							<Link href={REGISTER}>
								<a>Регистрация</a>
							</Link>
						</li>
					</ul>
					<div className="ps-tab active" id="register">
						<div className="ps-form__content">
							<h5>Вход аккаунта</h5>
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
							<div className="form-group form-forgot">
								<Form.Item
									name="password"
									rules={[
										{
											required: true,
											message:
												'Пожалуйста, введите пароль',
										},
										{
											// pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/i,
											// message: 'Пароль должен содержать минимум 8 символов и содержать минимум 1 заглавный символ и не 1 знак',
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
									Войти
								</button>
							</div>
						</div>
						{/*<div className="ps-form__footer">*/}
						{/*	<p>Вход через соц сеть:</p>*/}
						{/*	<ul className="ps-list--social">*/}
						{/*		<li>*/}
						{/*			<a className="facebook" href="#">*/}
						{/*				<i className='fa fa-facebook'/>*/}
						{/*			</a>*/}
						{/*		</li>*/}
						{/*		<li>*/}
						{/*			<a className="google" href="#">*/}
						{/*				<i className='fa fa-google-plus'/>*/}
						{/*			</a>*/}
						{/*		</li>*/}
						{/*		<li>*/}
						{/*			<a className="instagram" href="#">*/}
						{/*				<i className='fa fa-instagram'/>*/}
						{/*			</a>*/}
						{/*		</li>*/}
						{/*	</ul>*/}
						{/*</div>*/}
					</div>
				</Form>
			</div>
		</div>
	);
})

export default Login;
