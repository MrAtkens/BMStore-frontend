import React, { useEffect, useState } from 'react';
import { Form, Input, Steps, Button, Statistic, Result } from 'antd';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';

import { getOrdersStorage } from 'helper/stores/ordersHelper';
import { getUser } from 'helper/commons/userHelper';
import { LOGIN } from 'constant/routes';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const { Countdown } = Statistic;
const { Step } = Steps;


//1000 = milliseconds, 60 seconds, 5 minutes
const deadline = Date.now() + 5 * 60 * 1000


const ResetPassword = observer(() => {
	const Router = useRouter()
	const [mail, setMail] = useState("")
	const [isCodeRetry, setIsCodeRetry] = useState(false)
	const [isLoading, setLoading] = useState(false)
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		console.log("Order Tracking")
		console.log(getUser())
		if (getUser() !== 'undefined.undefined.undefined') {
			setCurrent(1)
		} else {
			const storageOrders = getOrdersStorage()
			if (storageOrders.length !== 0) {
				setCurrent(1)
			}
		}
	}, [])

	//First state
	const onPhoneFinish = async (values: any) => {
		setLoading(true)
		console.log('Success on Phone:', values);
		setMail(values.email)
		setCurrent(1)
		setLoading(false)
	}

	//Second state
	const onCodeConfirmFinish = async (values: any) => {
	    setLoading(true)
	    console.log(values)
	    setCurrent(2)
	    setLoading(false)
	}

	//Second state
	const onPhoneRetryClick = async () => {
	    setLoading(true)
	    console.log(mail)
	    setLoading(false)
	}

	const onTimeFinishClick = async () => {
	    setIsCodeRetry(true)
	}

	const onRedirectClick = async () => {
		await Router.push(LOGIN)
	}

	const steps = [
		{
			title: 'Подтверждение телефона',
			content:
				<Form
					className="ps-form--order-tracking"
					onFinish={onPhoneFinish}>
					<h3 className="ps-form__heading">Введите номер телефона для получение кода потдверждение личности</h3>
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
					<div className="form-group submit">
						<Button htmlType="submit" loading={isLoading} type="primary" className="ps-btn ps-btn--fullwidth">Отправить код</Button>
					</div>
				</Form>,
		},
		{
		    title: 'Ввод кода',
		    content:
		        <Form
		            className="ps-form--order-tracking"
		            onFinish={onCodeConfirmFinish}>
		            <h3 className="ps-form__heading">Введите код из письма</h3>
		            <div className="form-group">
		                <Form.Item
		                    name="code"
		                    rules={[
		                        {
		                            required: true,
		                            min: 6,
		                            message:
		                                'Пожалуйста введите код!',
		                        },
		                    ]}>
		                    <Input
		                        className="form-control"
		                        placeholder="Код подтверждение"
		                        type="text"
		                    />
		                </Form.Item>
		            </div>
					<div className="form-group">
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
		            <div className="form-group">
		                {isCodeRetry ? (
		                    <Button htmlType="submit" type="primary" loading={isLoading} onClick={onPhoneRetryClick} className="ps-btn ps-btn--fullwidth">
		                        Отправить код повторно
		                    </Button>
		                ) : (
		                    <Countdown title="Повторно оправить сообщение" value={deadline} onFinish={onTimeFinishClick}/>
		                )}
		            </div>
		            <div className="form-group">
		                <Button htmlType="submit" type="primary" loading={isLoading} className="ps-btn ps-btn--fullwidth">Подтвердить код</Button>
		            </div>
		        </Form>
		},
		{
			title: 'Просмотр заказов',
			content: <Result status="success" title="Вы успешно востановили пароль" subTitle="Нажмите на кнопку для входа в аккаунт" extra={[
				<button
					key="authorize"
					onClick={onRedirectClick}
					className="ps-btn ps-btn--fullwidth">
					Перейти к авторизаций
				</button>,
			]} />,
		},
	];

	return(
		<div className="ps-order-tracking">
			<div className="container">
				<div className="ps-section__header">
					<h3>Востановление пароля</h3>
					<p>
						Для того чтобы востановить пароль пожалуйста введите почту которую вы регистрировали
					</p>
				</div>
				<div className="ps-section__content">
					<Steps current={current}>
						{steps.map(item => (
							<Step key={item.title} title={item.title} />
						))}
					</Steps>
					<div className="steps-content">{steps[current].content}</div>
				</div>
			</div>
		</div>
	)
})

export default ResetPassword;
