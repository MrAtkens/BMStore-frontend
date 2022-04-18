import React, { useEffect } from 'react';

import { categoryApiService } from 'data/API';
import { isUserAuth } from 'helper/commons/userHelper';
import { ICategory } from 'domain/interfaces/ICategory';
import { HOME } from 'constant/routes';

import BreadCrumb from 'presentation/common/typography/BreadCrumb';
import Register from 'presentation/page/Register';
import Layout from 'presentation/layout';
import { useRouter } from 'next/router';

interface IRegisterPage {
	categories: Array<ICategory>;
}

const RegisterPage = ({ categories }: IRegisterPage) => {
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
			text: 'Регистрация аккаунта',
			url: null
		}
	];

	return (
		<Layout categories={categories} title={'Регистрация'}>
			<div className="ps-page--my-account">
				<BreadCrumb breadcrumb={breadCrumb} layout={'normal'} />
				<Register />
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

export default RegisterPage;
