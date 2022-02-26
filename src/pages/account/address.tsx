import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { notification } from 'antd';
import Head from 'next/head';

import {
	USER_FIRST_PART,
	USER_SECOND_PART,
	USER_THIRD_PART
} from 'constant/storageNames';
import { isUserAuth } from 'helper/commons/userHelper';
import { HOME } from 'constant/routes';

import { categoryApiService, ordersApiService } from 'data/API';
import { accountLinks } from 'data/static/accountLinks';
import { ICategory } from 'domain/interfaces/ICategory';
import { IAddress } from 'domain/interfaces/IAddress';

import AccountMenuSidebar from 'presentation/common/control/account/AccountMenuSidebar';
import TableAddress from 'presentation/common/control/account/TableAddress';
import BreadCrumb from 'presentation/common/typography/BreadCrumb';
import Layout from 'presentation/layout';

interface IAddressPage {
	categories: Array<ICategory>;
	address: Array<IAddress>;
}

const AddressPage = ({ categories, address }: IAddressPage) => {
	const breadCrumb = [
		{
			text: 'Главная',
			url: HOME
		},
		{
			text: 'Заказы',
			url: null
		}
	];

	const Router = useRouter();
	useEffect(() => {
		if (!isUserAuth()) {
			Router.push(HOME);
			notification.warn({
				message: 'Ошибка 401',
				description:
					'Для того чтобы узнать статус заказа просим вас зайти в систему или позвонить нам',
				duration: 10,
				placement: 'bottomRight'
			});
		}
	});

	return (
		<Layout categories={categories} title={'Главная страница - TACS'}>
			<Head>
				<title>Заказы - TACS</title>
				<meta
					name="description"
					content="TACS-Магазин стройматериалов в Нур-Султан"
				/>
				<meta
					name="keywords"
					content="стройматериалы, ремонт, материалы, инструменты, техника, стройка"
				/>
				<meta name="author" content="Bazar-Jok Group" />
			</Head>
			<div className="ps-page--my-account">
				<BreadCrumb breadcrumb={breadCrumb} layout={'normal'} />
				<section className="ps-my-account ps-page--account">
					<div className="container">
						<div className="row">
							<div className="col-lg-4">
								<div className="ps-page__left">
									<AccountMenuSidebar data={accountLinks} />
								</div>
							</div>
							<div className="col-lg-8 orders-top">
								<TableAddress address={address} />
							</div>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
};

export async function getServerSideProps({ locale, req }: any) {
	const { cookies } = req;
	const categoryResponse = await categoryApiService.getCategoriesByLanguage(
		'ru'
	);
	let orders = [];
	if (
		cookies[USER_FIRST_PART] !== undefined &&
		cookies[USER_SECOND_PART] !== undefined &&
		cookies[USER_THIRD_PART] !== undefined
	) {
		const response = await ordersApiService.getAuthorizeOrders(
			cookies[USER_FIRST_PART] +
				'.' +
				cookies[USER_SECOND_PART] +
				'.' +
				cookies[USER_THIRD_PART]
		);
		orders = response.data.orders;
	}
	if (categoryResponse.data === undefined)
		return {
			props: { categories: [], orders: orders }
		};
	return {
		props: { categories: categoryResponse.data, orders: orders }
	};
}

export default AddressPage;
