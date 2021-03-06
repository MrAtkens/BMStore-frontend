import React  from 'react';
import { Form, Input } from 'antd';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';

import userStore from "data/stores/userStore"
import { HOME } from 'constant/routes';

const ResetPassword = observer(() => {
	const Router = useRouter()

	//First state
	const onMailFinish = async (values: any) => {
		await userStore.userReset(values.email).then(async () => {
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
							<h3>Востановление пароля</h3>
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
											message: 'Введена некорректная почта',
										},

									]}>
									<Input
										className="form-control"
										type="text"
										placeholder="Почта"
									/>
								</Form.Item>
							</div>
							<div className="form-group submit-reset">
								<button
									type="submit"
									className="ps-btn ps-btn--fullwidth">
									Подтвердить
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
