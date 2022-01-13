import React, { useEffect, useState } from 'react';
import { Form, Input, Steps, Button } from 'antd';
import { observer } from 'mobx-react-lite';

import TableInvoices from './account/TableInvoices';
import { getOrdersStorage } from 'helper/stores/ordersHelper';
import { getUser } from 'helper/commons/userHelper';
import { IOrder } from 'domain/interfaces/IOrder';

// const { Countdown } = Statistic;
const { Step } = Steps;


// 1000 = milliseconds, 60 seconds, 5 minutes
// const deadline = Date.now() + 5 * 60 * 1000

interface IOrderTracking{
    orders: Array<IOrder>
}

const OrderTracking = observer(({orders} : IOrderTracking) => {
    // const [phoneNumber, setPhoneNumber] = useState("")
    // const [isCodeRetry, setIsCodeRetry] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [current, setCurrent] = useState(0);
    const [orderTable, setOrderTable] = useState(orders)

    useEffect(() => {
        console.log("Order Tracking")
        console.log(orders)
        console.log(getUser())
        if (getUser() !== 'undefined.undefined.undefined') {
            setCurrent(1)
        } else {
            const storageOrders = getOrdersStorage()
            if (storageOrders.length !== 0) {
                setCurrent(1)
                setOrderTable(orderTable)
            }
        }
    }, [orderTable, orders])

    //First state
    const onPhoneFinish = async (values: any) => {
        setLoading(true)
        console.log('Success on Phone:', values);
        // setPhoneNumber(values.phoneNumber)
        setCurrent(1)
        setLoading(false)
    }

    // //Second state
    // const onCodeConfirm = async (values: any) => {
    //     setLoading(true)
    //     console.log(values)
    //     setCurrent(2)
    //     setLoading(false)
    // }
    //
    // //Second state
    // const onPhoneRetry = async () => {
    //     setLoading(true)
    //     console.log(phoneNumber)
    //     setLoading(false)
    // }
    //
    // const onTimeFinish = async () => {
    //     setIsCodeRetry(true)
    // }

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
                            name="phoneNumber"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Пожалуйста введите номер телефона!',
                                },
                                {
                                    min: 10,
                                    max: 20,
                                    message: 'Не корректный номер телефона !',
                                }
                            ]}>
                            <Input
                                className="form-control"
                                placeholder="Номер телефона"
                            />
                        </Form.Item>
                    </div>
                    <div className="form-group submit">
                        <Button htmlType="submit" loading={isLoading} type="primary" className="ps-btn ps-btn--fullwidth">Отправить код</Button>
                    </div>
                </Form>,
        },
        // {
        //     title: 'Ввод кода',
        //     content:
        //         <Form
        //             className="ps-form--order-tracking"
        //             onFinish={onCodeConfirm}>
        //             <h3 className="ps-form__heading">Введите код из смс</h3>
        //             <div className="form-group">
        //                 <Form.Item
        //                     name="code"
        //                     rules={[
        //                         {
        //                             required: true,
        //                             min: 6,
        //                             message:
        //                                 'Пожалуйста введите код!',
        //                         },
        //                     ]}>
        //                     <Input
        //                         className="form-control"
        //                         placeholder="Код подтверждение"
        //                         type="text"
        //                     />
        //                 </Form.Item>
        //             </div>
        //             <div className="form-group">
        //                 {isCodeRetry ? (
        //                     <Button htmlType="submit" type="primary" loading={isLoading} onClick={onPhoneRetry} className="ps-btn ps-btn--fullwidth">
        //                         Отправить код повторно
        //                     </Button>
        //                 ) : (
        //                     <Countdown title="Повторно оправить сообщение" value={deadline} onFinish={onTimeFinish}/>
        //                 )}
        //             </div>
        //             <div className="form-group">
        //                 <Button htmlType="submit" type="primary" loading={isLoading} className="ps-btn ps-btn--fullwidth">Подтвердить код</Button>
        //             </div>
        //         </Form>
        // },
        {
            title: 'Просмотр заказов',
            content: <TableInvoices orders={orderTable} />,
        },
    ];

    return(
        <div className="ps-order-tracking">
            <div className="container">
                <div className="ps-section__header">
                    <h3>Ваши заказы</h3>
                    <p>
                        Для того чтобы узнать ваши заказы вам надо пройти мобильную аутентификация
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

export default OrderTracking;
