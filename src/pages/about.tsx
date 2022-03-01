import React from 'react';
import Head from 'next/head';

import { ICategory } from 'domain/interfaces/ICategory';
import { categoryApiService } from 'data/API';

import Layout from 'presentation/layout';
import BreadCrumb from 'presentation/common/typography/BreadCrumb';
import AboutAwards from 'presentation/common/block/AboutAwards';

import { HOME } from 'constant/routes';

interface IAbout {
	categories: Array<ICategory>;
}

const About = ({ categories }: IAbout) => {
	const breadCrumb = [
		{
			text: 'Главная',
			url: HOME
		},
		{
			text: 'О нас',
			url: null
		}
	];
	return (
		<Layout categories={categories} title={'О Нас - TACS'}>
			<Head>
				<title>О Нас - TACS</title>
				<meta
					name="description"
					content="TACS — Интернет-магазин стройматериалов"
				/>
				<meta
					name="keywords"
					content="стройматериалы, ремонт, материалы, инструменты, техника, стройка"
				/>
				<meta name="author" content="Bazar-Jok Group" />
			</Head>
			<div className="ps-page--single" id="about-us">
				<img src="/static/img/about/about-us.webp" alt="TACS О нас" />
				<BreadCrumb breadcrumb={breadCrumb} layout={'default'} />
				<AboutAwards />
			</div>
		</Layout>
	);
};

export async function getStaticProps({ locale, req }: any) {
	const categoryResponse = await categoryApiService.getCategoriesByLanguage(
		'ru'
	);

	if (categoryResponse.data === undefined)
		return {
			props: { categories: [] },
			revalidate: 1800
		};
	return {
		props: {
			categories: categoryResponse.data
		},
		revalidate: 600
	};
}

export default About;
