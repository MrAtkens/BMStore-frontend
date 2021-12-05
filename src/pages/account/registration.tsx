import React from 'react';

import { categoryApiService } from 'data/API';

import BreadCrumb from 'presentation/common/typography/BreadCrumb';
import Register from 'presentation/page/Register';
import Layout from 'presentation/layout';
import { ICategory } from 'domain/interfaces/ICategory';

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
