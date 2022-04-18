import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { categoryApiService } from 'data/API';
import { ICategory } from 'domain/interfaces/ICategory';
import { isUserAuth } from 'helper/commons/userHelper';
import { HOME } from 'constant/routes';

import BreadCrumb from 'presentation/common/typography/BreadCrumb';
import ResetPassword from 'presentation/page/ResetPassword';
import Layout from 'presentation/layout';
import { GetServerSideProps } from 'next';

interface IResetPage {
	categories: Array<ICategory>;
	operationId: string;
}

const ResetPage = ({ categories, operationId }: IResetPage) => {
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
			text: 'Востановление пароля',
			url: null
		}
	];

	return (
		<Layout categories={categories} title={'Сброс пароля'}>
			<div className="ps-page--my-account">
				<BreadCrumb breadcrumb={breadCrumb} layout={'normal'} />
				<ResetPassword operationId={operationId} />
			</div>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { operationId } = context.query;
	if (operationId === undefined)
		return {
			redirect: {
				permanent: true,
				destination: HOME
			},
			props: {}
		};
	let category = [];
	const categoryResponse = await categoryApiService.getCategoriesByLanguage(
		'ru'
	);
	if (categoryResponse !== undefined) category = categoryResponse.data;
	return {
		props: { categories: category, operationId: operationId }
	};
};

export default ResetPage;
