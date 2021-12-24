import React from 'react';
import Head from 'next/head';

import { categoryApiService } from 'data/API';
import { accountLinks } from 'data/static/accountLinks';
import { ICategory } from 'domain/interfaces/ICategory';
import { HOME } from 'constant/routes';

import BreadCrumb from 'presentation/common/typography/BreadCrumb';
import AccountMenuSidebar from 'presentation/common/block/account/AccountMenuSidebar';
import Orders from 'presentation/page/account/Orders';
import Layout from 'presentation/layout';

interface ILoginPage{
	categories: Array<ICategory>
}

const LoginPage = ({categories} : ILoginPage) => {
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
							<div className="col-lg-4">
								<div className="ps-page__left">
									<AccountMenuSidebar data={accountLinks} />
								</div>
							</div>
							<Orders/>
						</div>
					</div>
				</section>
			</div>
		</Layout>
);
};

export async function getStaticProps({ locale, req } : any){
	const categoryResponse = await categoryApiService.getCategoriesByLanguage("ru")
	return {
		props:{ categories: categoryResponse.data},
		revalidate: 600
	};
}

export default LoginPage;
