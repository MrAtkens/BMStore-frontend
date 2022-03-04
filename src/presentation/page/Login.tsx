import React from 'react';
import Link from 'next/link';
import { Form, Input } from 'antd';
import { observer } from 'mobx-react-lite';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import userStore from 'data/stores/userStore';
import { LOGIN, REGISTER, RESET } from 'constant/routes';

const Login = observer(() => {
	const [form] = Form.useForm();

	const onFinish = async (values: any) => {
		await userStore.authenticate(values.email, values.password).then(() => {
			form.setFieldsValue({ email: '', password: '' });
		});
	};

	return (
		<div className="ps-my-account">
			<div className="container">
				<Form
					form={form}
					className="ps-form--account"
					onFinish={onFinish}
				>
					<ul className="ps-tab-list">
						<li className="active">
							<Link passHref href={LOGIN}>
								<a>Вход</a>
							</Link>
						</li>
						<li>
							<Link passHref href={REGISTER}>
								<a>Регистрация</a>
							</Link>
						</li>
					</ul>
					<div className="ps-tab active" id="register">
						<div className="ps-form__content">
							<h5>Вход в аккаунт</h5>
							<div className="form-group">
								<Form.Item
									name="email"
									rules={[
										{
											required: true,
											message:
												'Пожалуйста, введите вашу почту'
										},
										{
											type: 'email',
											message:
												'Введена некорректная почта'
										}
									]}
								>
									<Input
										className="form-control"
										type="text"
										placeholder="Почта"
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
												'Пожалуйста, введите пароль'
										},
										{
											// pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/i,
											// message: 'Пароль должен содержать минимум 8 символов и содержать минимум 1 заглавный символ и не 1 знак',
											min: 6,
											max: 60,
											message:
												'Пароль должен содержать минимум 6 символов'
										}
									]}
								>
									<Input.Password
										className="form-control"
										type="password"
										iconRender={(visible) =>
											visible ? (
												<EyeTwoTone />
											) : (
												<EyeInvisibleOutlined />
											)
										}
										placeholder="Пароль..."
									/>
								</Form.Item>
							</div>
							<div className="form-group submit">
								<button
									type="submit"
									className="ps-btn ps-btn--fullwidth"
								>
									Войти
								</button>
							</div>
						</div>
						<div className="ps-form__footer">
							<Link href={RESET}>Забыли пароль?</Link>
						</div>
					</div>
				</Form>
			</div>
		</div>
	);
});

export default Login;
