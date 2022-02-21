import React from 'react';
import Head from 'next/head';

import { ICategory } from 'domain/interfaces/ICategory';
import { categoryApiService } from 'data/API';

import Layout from 'presentation/layout';
import Banners from 'presentation/common/block/Banners';
import CategoryMainPage from 'presentation/common/block/CategoryMainPage/CategoryMainPage';
import PromotionMainPage from 'presentation/common/block/PromotionMainPage';

interface IHome {
	categories: Array<ICategory>;
}

const Home = ({ categories }: IHome) => {
	return (
		<Layout categories={categories} title={'Главная страница - TACS'}>
			<Head>
				<title>TACS — Интернет-магазин стройматериалов</title>
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
			<main id="homepage-1">
				<div className="container">
					<Banners />
					<CategoryMainPage categories={categories} />
					<PromotionMainPage />
				</div>
			</main>
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
		props: { categories: categoryResponse.data },
		revalidate: 600
	};
}

export default Home;
