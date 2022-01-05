import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {AppProps} from "next/app";
import Script from 'next/script'

import MasterLayout from 'presentation/layout/MasterLayout';
import { GOOGLE_ANALYTICS, GTM } from 'constant/webAnalytics';

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
	});

	return (
		<MasterLayout>
			<Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-RKPH5DDHTX" />
			<Script strategy="afterInteractive" src="https://widget.cloudpayments.ru/bundles/cloudpayments" />
			<Script id="google-analytics" strategy="afterInteractive">
				{GOOGLE_ANALYTICS}
			</Script>
			<Script id="google-tag-manager" strategy="afterInteractive">
				{GTM}
			</Script>
			<Script id="payWindow" strategy="afterInteractive">
				{`
					 function getPayWindow(publicId, description, amount, currency, accountId, invoiceId, email) {
						 var widget = new cp.CloudPayments();
						 widget.pay('auth', // или 'charge'
								{ //options
									publicId: publicId, //id из личного кабинета
									description: description, //назначение
									amount: amount, //сумма
									currency: currency, //валюта
									accountId: accountId, //идентификатор плательщика (необязательно)
									invoiceId: invoiceId, //номер заказа  (необязательно)
									email: email, //email плательщика (необязательно)
								},
								{
									onSuccess: function (options) { // success
										console.log(options)
									},
									onFail: function (reason, options) { // fail
										console.log(options)
										//действие при неуспешной оплате
									},
									onComplete: function (paymentResult, options) {
										console.log(options)
										console.log(paymentResult)
										return {paymentResult, options}
										//например вызов вашей аналитики Facebook Pixel
									}
								}
							)
					};
				`}
			</Script>
			<Component {...pageProps}/>
		</MasterLayout>
	);
})

export default App
