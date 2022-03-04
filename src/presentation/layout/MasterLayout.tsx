import React from 'react';
import { BackTop, Button, ConfigProvider } from 'antd';
import ruRu from 'antd/lib/locale/ru_RU';

import PageLoader from 'presentation/common/block/PageLoader';
import { useRouter } from 'next/router';

const MasterLayout = ({ children }: any) => {
	const Router = useRouter();

	const onWhatsAppClick = async () => {
		await Router.push(
			'https://api.whatsapp.com/send/?phone=87077227589&text=Здравствуйте%2C+у+меня+есть+вопрос\n'
		);
	};

	return (
		<ConfigProvider locale={ruRu}>
			{children}
			<PageLoader />
			<BackTop>
				<button aria-label="to_top" className="ps-btn--backtop">
					<i className="icon-arrow-up" />
				</button>
			</BackTop>
			<Button
				className="ps-btn-whatsapp"
				onClick={onWhatsAppClick}
				shape="circle"
			>
				<i className="fa fa-whatsapp" />
			</Button>
		</ConfigProvider>
	);
};

export default MasterLayout;
