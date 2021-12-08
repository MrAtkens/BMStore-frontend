import React from 'react';
import Head from 'next/head';

import { categoryApiService } from 'data/API';
import { ICategory } from 'domain/interfaces/ICategory';

import BreadCrumb from 'presentation/common/typography/BreadCrumb';
import Login from 'presentation/page/Login';
import Layout from 'presentation/layout';

interface ILoginPage{
	categories: Array<ICategory>
}

const LoginPage = ({categories} : ILoginPage) => {
	const breadCrumb = [
		{
			text: 'Главная',
			url: '/',
		},
		{
			text: 'Вход в аккаунт',
			url: null
		},
	];

	return (
		<Layout categories={categories} title={"Главная страница - CATS"}>
			<Head>
				<title>Авторизация - CATS</title>
				<meta name="description" content="CATS-Магазин стройматериалов в Нур-Султан"/>
				<meta name="keywords" content="стройматериалы, ремонт, материалы, инструменты, техника, стройка"/>
				<meta name="author" content="Bazar-Jok Group"/>
			</Head>
			<div className="ps-page--my-account">
			<BreadCrumb breadcrumb={breadCrumb} layout={"normal"}/>
			<Login />
			</div>
		</Layout>
);
};

export async function getStaticProps({ locale, req } : any){
	const categoryResponse = await categoryApiService.getCategoriesByLanguage("ru")
	console.log(categoryResponse)
	return {
		props:{ categories: categoryResponse.data},
		revalidate: 600
	};
}

export default LoginPage;
