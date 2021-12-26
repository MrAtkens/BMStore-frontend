import React from 'react';
import { Form, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const UserInformationForm = () => {
	return (
		<form className="ps-form--account-setting">
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
									message: 'Пожалуйста введите ваше ФИО!',
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
							name="phone"
							rules={[
								{
									required: true,
									type: 'number',
									min: 11,
									max: 11,
									message: 'Пожалуйста введите ваш номер телефона!',
								},
							]}>
							<Input
								className="form-control"
								type="phone"
								placeholder="Номер телефона"
							/>
						</Form.Item>
					</div>
					<div className="col-sm-12">
						<Form.Item
							className="form-group"
							name="password"
							rules={[
								{
									required: true,
									message:
										'Пожалуйста, введите пароль!',
								},
								{
									pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/i,
									min: 8,
									max: 60,
									message: 'Пароль должен содержать минимум 8 символов и содержать минимум 1 заглавный символ и не алфавитный символ',
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
				</div>

				<div className="form-group submit">
					<button className="ps-btn">Обновить профиль</button>
				</div>
			</div>
		</form>
	);
};

export default UserInformationForm;
