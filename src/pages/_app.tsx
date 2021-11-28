import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {AppProps} from "next/app";

import MasterLayout from 'presentation/layout/MasterLayout';

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
			<Component {...pageProps}/>
		</MasterLayout>
	);
})

export default App
