import React from 'react';
import Head from 'next/head';

import { categoryApiService } from 'data/API';
import { ICategory } from 'domain/interfaces/ICategory';

import BreadCrumb from 'presentation/common/typography/BreadCrumb';
import Register from 'presentation/page/Register';
import Layout from 'presentation/layout';

interface IRegisterPage{
	categories: Array<ICategory>
}


const RegisterPage = ({categories} : IRegisterPage) => {
	const breadCrumb = [
		{
			text: 'Главная',
			url: '/',
		},
		{
			text: 'Регистрация аккаунта',
			url: null
		},
	];

	return (
		<Layout categories={categories} title={"Главная страница - CATS"}>
			<Head>
				<title>Регистрация - CATS</title>
				<meta name="description" content="CATS-Магазин стройматериалов в Нур-Султан"/>
				<meta name="keywords" content="стройматериалы, ремонт, материалы, инструменты, техника, стройка"/>
				<meta name="author" content="Bazar-Jok Group"/>
			</Head>
			<div className="ps-page--my-account">
				<BreadCrumb breadcrumb={breadCrumb} layout={"normal"}/>
				<Register />
			</div>
		</Layout>
);
};

export async function getStaticProps({ locale, req } : any){
	const categoryResponse = await categoryApiService.getCategoriesByLanguage("ru")
	console.log(categoryResponse.data)
	return {
		props:{ categories: categoryResponse.data},
		revalidate: 600
	};
}


export default RegisterPage;
