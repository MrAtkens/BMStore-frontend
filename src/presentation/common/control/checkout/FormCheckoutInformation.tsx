import React, { useEffect, useState } from 'react';
import AutoComplete from 'react-google-autocomplete';
import { observer } from 'mobx-react-lite';
import { Form, Input, Result } from 'antd';
import { useRouter } from 'next/router';

import { CHECKOUT } from 'constant/routes';
import { getWidget } from 'constant/payment';

import { calculateAmount } from 'helper/stores/cartHelper';
import { getUserId } from 'helper/stores/userHelper';
import cartStore from 'data/stores/cartStore';
import userStore from 'data/stores/userStore';
import { invoiceApiService } from 'data/API';

const FormCheckoutInformation = observer(() =>{
    const [form] = Form.useForm();
    const [isActiveButton, setIsActiveButton] = useState(false)
    const [isProductEnough, setIsProductEnough] = useState(true)
    const Router = useRouter();

    useEffect(() => {
        cartStore.getCartFromApi().then(() => {
            if(cartStore.cart.length <= 0)
                setIsProductEnough(false)
        })
    }, [])

    useEffect(() => {
        form.setFieldsValue({
            name: userStore.user.fullName,
            address: userStore.user.address,
            email: userStore.user.email,
            phone: userStore.user.phone
        })
    },[userStore.user.fullName, userStore.user.phone])

    useEffect(() => {
        cartStore.getCartFromApi().then(() => {
            if(cartStore.cart.length <= 0)
                setIsProductEnough(false)
        })
    }, [cartStore.cart.length])


    const onFinish = async (values: any) => {
       if(cartStore.cart.length > 0){
           setIsActiveButton(true)
           const amount = parseInt(calculateAmount(cartStore.cart))
           console.log(amount)
           let id;
           if(userStore.user.id === "" || userStore.user.id === null)
               id = getUserId()
           else
               id = userStore.user.id
           await invoiceApiService.createInvoice(id, values.name, values.email, values.phone, values.address).then(response => {
               getWidget(process.env['NEXT_PUBLIC_CLOUD_PAYMENTS_ID'], 'Оплата товаров в магазине стройматериалов CATS', amount, 'KZT', id, values.email)
               setIsActiveButton(false)
           })
           setIsActiveButton(false)
       }
    };

    const onReturnClick = async () => {
        if (typeof window !== 'undefined') {
            if(window.innerWidth > 800){
                await Router.push(CHECKOUT)
            }
            else{
                cartStore.setIsMobileCartOpen(true)
            }
        }
        else
            await Router.push(CHECKOUT)
    }


    if(isProductEnough)
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
                <h3 className="ps-form__heading">Контактные данные</h3>
                <div className="form-group">
                    <Form.Item
                        name="name"
                        initialValue={userStore.user.fullName}
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
                    <div onClick={onReturnClick}>
                        <i className='icon-arrow-left mr-2'/>
                        Вернуться в корзину
                    </div>
                    <div className="ps-block__footer">
                        <button disabled={isActiveButton} type="submit" className="ps-btn">Продолжить</button>
                    </div>
                </div>
            </Form>
        );
    else
        return(
            <Result status="warning" title="Ваша корзина пуста" />
        )
})

export default FormCheckoutInformation;
