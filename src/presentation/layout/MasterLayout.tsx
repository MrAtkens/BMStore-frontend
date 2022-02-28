import React from 'react';
import { BackTop, Button } from 'antd';

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
		<>
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
		</>
	);
};

export default MasterLayout;
