import React  from 'react';
import { Form, Input } from 'antd';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';

import userStore from "data/stores/userStore"
import { HOME } from 'constant/routes';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

interface IResetPassword{
	operationId: string
}

const ResetPassword = observer(({operationId} : IResetPassword) => {
	const Router = useRouter()

	//First state
	const onMailFinish = async (values: any) => {
		await userStore.userResetPassword(values.password, operationId).then(async () => {
			await Router.push(HOME)
		})
	}

	return(
		<div className="ps-my-account">
			<div className="container">
				<Form
					className="ps-form--account"
					onFinish={onMailFinish}>
					<div className="ps-tab active" id="register">
						<div className="ps-form__content">
							<h3>Смена пароля</h3>
							<div className="form-group">
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
							<div className="form-group submit-reset">
								<button
									type="submit"
									className="ps-btn ps-btn--fullwidth">
									Сменить пароль
								</button>
							</div>
						</div>
					</div>
				</Form>
			</div>
		</div>
	)
})

export default ResetPassword;
