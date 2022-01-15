import React, { useEffect } from 'react';
import Head from 'next/head';

import { categoryApiService } from 'data/API';
import { isUserAuth } from 'helper/commons/userHelper';
import { ICategory } from 'domain/interfaces/ICategory';
import { HOME } from 'constant/routes';

import BreadCrumb from 'presentation/common/typography/BreadCrumb';
import Register from 'presentation/page/Register';
import Layout from 'presentation/layout';
import { useRouter } from 'next/router';

interface IRegisterPage{
	categories: Array<ICategory>
}


const RegisterPage = ({categories} : IRegisterPage) => {

	const Router = useRouter()
	useEffect(() => {
		if(isUserAuth())
			Router.push(HOME)
	})

	const breadCrumb = [
		{
			text: 'Главная',
			url: HOME,
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
	return {
		props:{ categories: categoryResponse.data},
		revalidate: 600
	};
}


export default RegisterPage;
