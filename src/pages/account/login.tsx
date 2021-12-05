import React from 'react';

import { categoryApiService } from 'data/API';

import BreadCrumb from 'presentation/common/typography/BreadCrumb';
import Login from 'presentation/page/Login';
import Layout from 'presentation/layout';
import { ICategory } from 'domain/interfaces/ICategory';

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
