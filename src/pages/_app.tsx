import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {AppProps} from "next/app";
import Script from 'next/script'

import MasterLayout from 'presentation/layout/MasterLayout';
import { getUser } from 'helper/commons/userHelper';

import userStore from 'data/stores/userStore';
import cartStore from 'data/stores/cartStore';
import productStore from 'data/stores/productStore';

import '../../public/static/fonts/Linearicons/Font/demo-files/demo.css';
import '../../public/static/fonts/font-awesome/css/font-awesome.min.css';
import '../../public/static/css/bootstrap.min.css';
import '../../public/static/css/slick.min.css';
import 'styles/scss/style.scss';
import 'styles/scss/home-default.scss';

const App = observer(({ Component, pageProps } : AppProps) => {

	useEffect(() => {
		const nextLoaded = document.getElementById('__next')
		setTimeout(function () {
			if(nextLoaded !== null)
				nextLoaded.classList.add('loaded')
		}, 100);
		if(getUser() !== 'undefined.undefined.undefined') {
			userStore.getUserData().then(async () => {
				await cartStore.getCartFromApi()
				await productStore.setWishList()
			})
		}
		else{
			cartStore.getCartFromApi().then(async () => {
				await productStore.setWishList()
			})
		}
	});

	return (
		<MasterLayout>
			<Script strategy="afterInteractive" src="https://widget.cloudpayments.ru/bundles/cloudpayments" />
			<Script id="payWindow" strategy="afterInteractive">
				{`function getPayWindow(publicId, description, amount, currency, accountId, email) {
					const widget = new cp.CloudPayments();
					widget.pay('auth', // или 'charge'
					{ //options
						publicId: publicId, //id из личного кабинета
						description: description, //назначение
						amount: amount, //сумма
						currency: currency, //валюта
						accountId: accountId, //идентификатор плательщика (необязательно)
						email: email, //email плательщика (необязательно)
					},
					{
						onSuccess: "/",
						onFail: async function(reason, options) {
						const response = await fetch(\`https://bazarjok-group.com:20000/api/client/invoice?userId=\${accountId}&status=2\`, {
						method: 'PUT', // *GET, POST, PUT, DELETE, etc.
						mode: 'cors', // no-cors, *cors, same-origin
						cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
						credentials: 'same-origin', // include, *same-origin, omit
						headers: {
						'Content-Type': 'application/json'
					},
						redirect: 'follow', // manual, *follow, error
						referrerPolicy: 'no-referrer', // no-referrer, *client
					});
						console.log(response)
					},
					onComplete: async function(paymentResult, options) {
					if (paymentResult.success === true){
					const response = await fetch(\`https://bazarjok-group.com:20000/api/client/invoice?userId=\${accountId}&status=\${paymentResult.code}\`, {
					method: 'PUT', // *GET, POST, PUT, DELETE, etc.
					mode: 'cors', // no-cors, *cors, same-origin
					cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
					credentials: 'same-origin', // include, *same-origin, omit
					headers: {
					'Content-Type': 'application/json'
					},
					referrerPolicy: 'no-referrer', // no-referrer, *client
					});
					console.log(response)
					}}})}`}
			</Script>
			<Component {...pageProps}/>
		</MasterLayout>
	);
})

export default App
