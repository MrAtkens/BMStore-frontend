import React from 'react';
import Head from 'next/head';

import { categoryApiService, ordersApiService } from 'data/API';
import { ICategory } from 'domain/interfaces/ICategory';
import { IOrder } from 'domain/interfaces/IOrder';
import { HOME } from 'constant/routes';

import BreadCrumb from 'presentation/common/typography/BreadCrumb';
import Orders from 'presentation/page/account/Orders';
import Layout from 'presentation/layout';
import { USER_FIRST_PART, USER_SECOND_PART, USER_THIRD_PART } from '../constant/storageNames';

interface ILoginPage{
	categories: Array<ICategory>,
	orders: Array<IOrder>
}

const OrdersPage = ({categories, orders} : ILoginPage) => {
	const breadCrumb = [
		{
			text: 'Главная',
			url: HOME,
		},
		{
			text: 'Заказы',
			url: null
		},
	];

	return (
		<Layout categories={categories} title={"Главная страница - CATS"}>
			<Head>
				<title>Заказы - CATS</title>
				<meta name="description" content="CATS-Магазин стройматериалов в Нур-Султан"/>
				<meta name="keywords" content="стройматериалы, ремонт, материалы, инструменты, техника, стройка"/>
				<meta name="author" content="Bazar-Jok Group"/>
			</Head>
			<div className="ps-page--my-account">
				<BreadCrumb breadcrumb={breadCrumb} layout={"normal"}/>
				<section className="ps-my-account ps-page--account">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<Orders orders={orders}/>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Layout>
);
};

export async function getServerSideProps({ locale, req } : any){
	const { cookies } = req
	const categoryResponse = await categoryApiService.getCategoriesByLanguage("ru")
	let orders = []
	if(cookies[USER_FIRST_PART] !== undefined && cookies[USER_SECOND_PART] !== undefined && cookies[USER_THIRD_PART] !== undefined) {
		const response = await ordersApiService.getAuthorizeOrders(cookies[USER_FIRST_PART] + '.' + cookies[USER_SECOND_PART] + '.' + cookies[USER_THIRD_PART])
		orders = response.data.orders
	}
	return {
		props:{ categories: categoryResponse.data, orders: orders},
	};
}

export default OrdersPage;
