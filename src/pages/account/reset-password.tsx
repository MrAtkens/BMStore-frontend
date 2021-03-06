import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { categoryApiService } from 'data/API';
import { ICategory } from 'domain/interfaces/ICategory';
import { isUserAuth } from 'helper/commons/userHelper';
import { HOME } from 'constant/routes';

import BreadCrumb from 'presentation/common/typography/BreadCrumb';
import Reset from 'presentation/page/Reset';
import Layout from 'presentation/layout';

interface IResetPageMail {
	categories: Array<ICategory>;
}

const ResetPageMail = ({ categories }: IResetPageMail) => {
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
			text: 'Запрос на востановление пароля',
			url: null
		}
	];

	return (
		<Layout categories={categories} title={'Смена пароля'}>
			<div className="ps-page--my-account">
				<BreadCrumb breadcrumb={breadCrumb} layout={'normal'} />
				<Reset />
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

export default ResetPageMail;
