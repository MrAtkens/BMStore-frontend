import React  from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Form, Input } from 'antd';

import { CART } from 'constant/routes';

const FormCheckoutInformation = () =>{

    const handleLoginSubmit = () => {
        Router.push('/account/shipping');
    };

    return (
        <Form
            className="ps-form__billing-info"
            onFinish={handleLoginSubmit}>
            <h3 className="ps-form__heading">Контактная информация</h3>
            <div className="form-group">
                <Form.Item
                    name="name"
                    rules={[
                        {
                            required: true,
                            message:
                                'Пожалуйста введите номер телефона!',
                        },
                    ]}>
                    <Input
                        className="form-control"
                        type="text"
                        placeholder="Номер телефона"
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
            <h3 className="ps-form__heading">Адресс доставки</h3>
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <Form.Item
                            name="firstName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Пожалуйста введите имя!',
                                },
                            ]}>
                            <Input
                                className="form-control"
                                type="text"
                                placeholder="Имя"
                            />
                        </Form.Item>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <Form.Item
                            name="lastName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Пожалуйста введите фамилию!',
                                },
                            ]}>
                            <Input
                                className="form-control"
                                type="text"
                                placeholder="Фамилия"
                            />
                        </Form.Item>
                    </div>
                </div>
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
            <div className="form-group">
                <Form.Item
                    name="apartment"
                    rules={[
                        {
                            required: true,
                            message: 'Введите номер квартиры!',
                        },
                    ]}>
                    <Input
                        className="form-control"
                        type="text"
                        placeholder="Номер квартиры, офиса или что то ещё"
                    />
                </Form.Item>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <Form.Item
                            name="city"
                            rules={[
                                {
                                    required: true,
                                    message: 'Введите наименование город!',
                                },
                            ]}>
                            <Input
                                className="form-control"
                                type="city"
                                placeholder="Город"
                            />
                        </Form.Item>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <Form.Item
                            name="postalCode"
                            rules={[
                                {
                                    required: true,
                                    message: 'Введите почтовый индекс!',
                                },
                            ]}>
                            <Input
                                className="form-control"
                                type="postalCode"
                                placeholder="Почтовый индекс"
                            />
                        </Form.Item>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="ps-checkbox">
                    <input
                        className="form-control"
                        type="checkbox"
                        id="save-information"
                    />
                    <label htmlFor="save-information">
                        Сохранить данные на следующию покупку
                    </label>
                </div>
            </div>
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
