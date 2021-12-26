import React from 'react';
import Link from 'next/link';
import { Form, Input } from 'antd';

import { CART } from 'constant/routes';

const FormCheckoutInformation = () =>{

    const onFinish = async (values: any) => {
        console.log('Success:', values);
        // await userStore.authenticate(values.email, values.password)
    };

    return (
        <Form
            className="ps-form__billing-info"
            onFinish={onFinish}>
            <h3 className="ps-form__heading">Контактные данные</h3>
            <div className="form-group">
                <Form.Item
                    name="phoneNumber"
                    rules={[
                        {
                            required: true,
                            message:
                                'Пожалуйста введите номер телефона!',
                        },
                    ]}>
                    <Input
                        className="form-control"
                        placeholder="Номер телефона"
                        type="text"
                    />
                </Form.Item>
            </div>
            <h3 className="ps-form__heading">Данные доставки</h3>
            <div className="form-group">
                <Form.Item
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Введите ваше ФИО!',
                        },
                    ]}>
                    <Input
                        className="form-control"
                        type="text"
                        placeholder="ФИО получателя"
                    />
                </Form.Item>
            </div>
            <div className="form-group">
                <Form.Item
                    name="address"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста введите адресс!',
                        },
                    ]}>
                    <Input
                        className="form-control"
                        type="text"
                        placeholder="Адресс"
                    />
                </Form.Item>
            </div>
            {/*<div className="form-group">*/}
            {/*    <div className="ps-checkbox">*/}
            {/*        <input*/}
            {/*            className="form-control"*/}
            {/*            type="checkbox"*/}
            {/*            id="keep-update"*/}
            {/*        />*/}
            {/*        <label htmlFor="keep-update">*/}
            {/*            Keep me up to date on news and exclusive offers?*/}
            {/*        </label>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="ps-form__submit">
                <Link href={CART}>
                    <a>
                        <i className='icon-arrow-left mr-2'/>
                        Вернуться в корзину
                    </a>
                </Link>
                <div className="ps-block__footer">
                    <button className="ps-btn">Продолжить</button>
                </div>
            </div>
        </Form>
    );
}

export default FormCheckoutInformation;
