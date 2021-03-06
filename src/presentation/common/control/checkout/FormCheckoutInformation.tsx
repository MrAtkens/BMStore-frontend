import React, { useEffect, useState } from 'react';
import useGoogle from 'react-google-autocomplete/lib/usePlacesAutocompleteService';
import { observer } from 'mobx-react-lite';
import { Form, Input, Result, Radio, AutoComplete } from 'antd';
import { useRouter } from 'next/router';

import { CHECKOUT, HOME } from 'constant/routes';
import { getWidget } from 'constant/payment';

import { calculateAmount } from 'helper/stores/cartHelper';
import { getUserId } from 'helper/stores/userHelper';
import { paymentDelivery } from 'helper/responseStatus';
import cartStore from 'data/stores/cartStore';
import userStore from 'data/stores/userStore';
import { invoiceApiService } from 'data/API';
import { isUserAuth } from 'helper/commons/userHelper';
import { toastNotEnoughProducts, toastUnActiveProduct } from 'helper/toastify';

const FormCheckoutInformation = observer(() => {
	const [form] = Form.useForm();
	const Router = useRouter();
	const [isProductEnough, setIsProductEnough] = useState(true);
	const [options, setOptions] = useState<{ value: string }[]>([]);

	const { placePredictions, getPlacePredictions } = useGoogle({
		apiKey: process.env['NEXT_PUBLIC_PLACES_API_KEY'],
		options: {
			fields: ['formatted_address'],
			types: ['address'],
			componentRestrictions: { country: 'kz' }
		}
	});

	useEffect(() => {
		if (placePredictions.length) {
			let places = [] as any;
			if (isUserAuth()) {
				const addresses = userStore.user.addresses;
				if (addresses.length > 0)
					addresses.map((item) => {
						places.push({ value: item });
					});
			}
			placePredictions.map((item) => {
				places.push({ value: item.description });
			});
			setOptions(places);
		}
	}, [placePredictions]);

	useEffect(() => {
		cartStore.getCartFromApi().then(() => {
			if (cartStore.cart.length <= 0) setIsProductEnough(false);
		});
	}, []);

	useEffect(() => {
		form.setFieldsValue({
			name: userStore.user.fullName,
			email: userStore.user.email,
			phone: userStore.user.phone
		});
	}, [userStore.user.fullName, userStore.user.phone]);

	useEffect(() => {
		cartStore.getCartFromApi().then(() => {
			if (cartStore.cart.length <= 0) setIsProductEnough(false);
		});
	}, [cartStore.cart.length]);

	const onFinish = async (values: any) => {
		if (cartStore.cart.length > 0) {
			const amount = parseInt(calculateAmount(cartStore.cart));
			let id;
			if (userStore.user.id === '' || userStore.user.id === null)
				id = getUserId();
			else id = userStore.user.id;
			await invoiceApiService
				.createInvoice(
					id,
					values.name,
					values.email,
					values.phone,
					values.address
				)
				.then(async (responseCreate) => {
					console.log(responseCreate);
					if (responseCreate.status === 200) {
						if (values.isDelivery) {
							const response =
								await invoiceApiService.editInvoiceStatus(
									id,
									3
								);
							await Router.push(HOME).then(() => {
								paymentDelivery(response.status);
							});
						} else {
							getWidget(
								process.env['NEXT_PUBLIC_CLOUD_PAYMENTS_ID'],
								'???????????? ?????????????? ?? ???????????????? ?????????????????????????????? CATS',
								amount,
								'KZT',
								id,
								values.email
							);
						}
					} else if (responseCreate.status === 400) {
						toastUnActiveProduct();
					} else if (responseCreate.status === 406) {
						cartStore.cart.map((item) => {
							responseCreate.data.data.map((itemProduct) => {
								if (item.productId === itemProduct.productId) {
									toastNotEnoughProducts(
										item.title,
										itemProduct.count
									);
								}
							});
						});
					}
				});
		}
	};

	const onReturnClick = async () => {
		if (typeof window !== 'undefined') {
			if (window.innerWidth > 800) {
				await Router.push(CHECKOUT);
			} else {
				cartStore.setIsMobileCartOpen(true);
			}
		} else await Router.push(CHECKOUT);
	};

	const onSearchAddress = (value: string) => {
		getPlacePredictions({
			input: value
		});
	};

	const onSelectAddress = (data: string) => {
		form.setFieldsValue({
			address: data
		});
	};

	if (isProductEnough)
		return (
			<Form
				form={form}
				className="ps-form__billing-info"
				onFinish={onFinish}
			>
				<h3 className="ps-form__heading">???????????? ????????????????</h3>
				<div className="form-group">
					<Form.Item
						name="address"
						rules={[
							{
								required: true,
								type: 'string',
								min: 3,
								max: 200,
								message: '????????????????????, ?????????????? ?????????? ????????????????'
							}
						]}
					>
						<AutoComplete
							options={options}
							onSearch={onSearchAddress}
							onSelect={onSelectAddress}
						>
							<Input
								className="form-control"
								type="text"
								placeholder="??????????"
							/>
						</AutoComplete>
					</Form.Item>
				</div>
				<h3 className="ps-form__heading">???????????????????? ????????????</h3>
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
								message: '????????????????????, ?????????????? ???????? ??????'
							}
						]}
					>
						<Input
							className="form-control"
							type="text"
							placeholder="?????? ????????????????????"
						/>
					</Form.Item>
				</div>
				<div className="form-group">
					<Form.Item
						name="phone"
						initialValue={userStore.user.phone || '+7'}
						rules={[
							{
								required: true,
								message: '????????????????????, ?????????????? ?????????? ????????????????'
							},
							{
								min: 10,
								max: 18,
								message:
									'???????????????????????? ?????????? ????????????????. ???????????? ?????????????????? ???????????????????? ???? ???????????? "+"',
								pattern: /^[+][0-9]{10,18}$/i
							}
						]}
					>
						<Input
							className="form-control"
							placeholder="?????????? ????????????????"
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
								message: '????????????????????, ?????????????? ???????? ??????????'
							},
							{
								type: 'email',
								message: '???????????????????????? ??????????'
							}
						]}
					>
						<Input
							className="form-control"
							type="text"
							placeholder="??????????"
						/>
					</Form.Item>
				</div>
				<div className="form-group">
					<Form.Item label="???????????? ????????????" name="isDelivery">
						<Radio.Group defaultValue={false}>
							<Radio value={false}>
								???????????? ???????????? (cloudpayments)
							</Radio>
							<Radio value={true}>???????????? ??????????????</Radio>
						</Radio.Group>
					</Form.Item>
				</div>
				<div className="ps-form__submit">
					<div onClick={onReturnClick}>
						<i className="icon-arrow-left mr-2" />
						?????????????????? ?? ??????????????
					</div>
					<div className="ps-block__footer">
						<button type="submit" className="ps-btn">
							????????????????????
						</button>
					</div>
				</div>
			</Form>
		);
	else return <Result status="warning" title="???????? ?????????????? ??????????" />;
});

export default FormCheckoutInformation;
