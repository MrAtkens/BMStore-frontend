import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { categoryApiService } from 'data/API';
import { ICategory } from 'domain/interfaces/ICategory';
import { HOME } from 'constant/routes';

import BreadCrumb from 'presentation/common/typography/BreadCrumb';
import Login from 'presentation/page/Login';
import Layout from 'presentation/layout';
import { isUserAuth } from 'helper/commons/userHelper';

interface ILoginPage {
	categories: Array<ICategory>;
}

const LoginPage = ({ categories }: ILoginPage) => {
	const Router = useRouter();
	useEffect(() => {
		if (isUserAuth()) Router.push(HOME);
	});

	const breadCrumb = [
		{
			text: 'Главная',
			url: HOME
		},
		{
			text: 'Вход в аккаунт',
			url: null
		}
	];

	return (
		<Layout categories={categories} title={'Главная страница - TACS'}>
			<Head>
				<title>Авторизация - TACS</title>
				<meta
					name="description"
					content="TACS-Магазин стройматериалов в Нур-Султан"
				/>
				<meta
					name="keywords"
					content="стройматериалы, ремонт, материалы, инструменты, техника, стройка"
				/>
				<meta name="author" content="TACS" />
			</Head>
			<div className="ps-page--my-account">
				<BreadCrumb breadcrumb={breadCrumb} layout={'normal'} />
				<Login />
			</div>
		</Layout>
	);
};

export async function getStaticProps({ locale, req }: any) {
	const categoryResponse = await categoryApiService.getCategoriesByLanguage(
		'ru'
	);
	if (categoryResponse === undefined)
		return {
			props: { categories: [] },
			revalidate: 1800
		};
	return {
		props: { categories: categoryResponse.data },
		revalidate: 1200
	};
}

export default LoginPage;
