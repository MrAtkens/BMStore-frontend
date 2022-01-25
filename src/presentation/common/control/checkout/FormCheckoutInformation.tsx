import React, { useEffect } from 'react';
import Link from 'next/link';
import { Form, Input } from 'antd';
import { observer } from 'mobx-react-lite';
import AutoComplete from 'react-google-autocomplete';

import { CART } from 'constant/routes';
import { getWidget } from 'constant/payment';

import { calculateAmount } from 'helper/stores/cartHelper';
import cartStore from 'data/stores/cartStore';
import userStore from 'data/stores/userStore'
import { getUserId } from 'helper/stores/userHelper';
import { invoiceApiService } from 'data/API';

const FormCheckoutInformation = observer(() =>{

    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue({
            name: userStore.user.fullName,
            address: userStore.user.address,
            email: userStore.user.email,
            phone: userStore.user.phone
        })
    },[userStore.user.fullName, userStore.user.phone])

    const onFinish = async (values: any) => {
        const amount = parseInt(calculateAmount(cartStore.cart))
        let id;
        if(userStore.user.id === "" || userStore.user.id === null)
            id = getUserId()
        else
            id = userStore.user.id
        console.log(values.address)
        await invoiceApiService.createInvoice(id, values.name, values.email, values.phone, values.address).then(response => {
            console.log(response)
            getWidget(process.env['NEXT_PUBLIC_CLOUD_PAYMENTS_ID'], 'Оплата товаров в магазине стройматериалов CATS', amount, 'KZT', id, values.email)
        })
    };

    return (
        <Form
            form={form}
            className="ps-form__billing-info"
            onFinish={onFinish}>
            <h3 className="ps-form__heading">Данные доставки</h3>
            <div className="form-group">
                <Form.Item
                    name="address"
                    initialValue={userStore.user.address}
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста введите адрес доставки',
                        },
                    ]}>
                    <AutoComplete
                        className="form-control"
                        apiKey={process.env['NEXT_PUBLIC_PLACES_API_KEY']}
                        placeholder="Адрес"
                        onKeyDown={(e)=> e.key === "Enter" ? e.preventDefault(): ''}
                        onPlaceSelected={(place) => {
                            console.log(place.formatted_address)
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
            <h3 className="ps-form__heading">Контактные данные</h3>
            <div className="form-group">
                <Form.Item
                    name="name"
                    initialValue={userStore.user.fullName}
                    rules={[
                        {
                            required: true,
                            message: 'Введите ваше ФИО',
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
                    name="phone"
                    initialValue={userStore.user.phone || "+7"}
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста введите номер телефона',
                        },
                        {
                            min: 10,
                            max: 18,
                            message: 'Не корректный номер телефона',
                            pattern: /^[+][0-9]{10,18}$/i
                        }
                    ]}>
                    <Input
                        className="form-control"
                        placeholder="Номер телефона"
                        type="text"
                    />
                </Form.Item>
            </div>
            <div className="form-group">
                <Form.Item
                    name="email"
                    initialValue={userStore.user.email}
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
                    <button type="submit" className="ps-btn">Продолжить</button>
                </div>
            </div>
        </Form>
    );
})

export default FormCheckoutInformation;
