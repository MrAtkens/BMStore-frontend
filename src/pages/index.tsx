import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { IAuctionBanner } from 'domain/interfaces/IAuctionBanner';
import { ICategory } from 'domain/interfaces/ICategory';
import { IProduct } from 'domain/interfaces/IProduct';
import { categoryApiService, productsApiService } from 'data/API';
import { toastBuySuccess } from 'helper/toastify';

import Layout from 'presentation/layout';
import Banners from 'presentation/common/block/Banners';
import CategoryMainPage from 'presentation/common/block/CategoryMainPage/CategoryMainPage';
import PromotionMainPage from 'presentation/common/block/PromotionMainPage';
import ActualProducts from 'presentation/common/control/ActualProducts';
import { auctionBannerApiService } from '../data/API';

interface IHome {
	categories: Array<ICategory>;
	actualProducts: Array<IProduct>;
	bannerItems: Array<IAuctionBanner>;
}

const Home = ({ categories, actualProducts, bannerItems }: IHome) => {
	const Router = useRouter();
	useEffect(() => {
		if (Router.asPath === '/?status=true') toastBuySuccess();
	}, []);

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
					<Banners bannerItems={bannerItems} />
					<CategoryMainPage categories={categories} />
					<PromotionMainPage />
					{actualProducts.length > 0 ? (
						<ActualProducts
							layout="fullwidth"
							productItems={actualProducts}
						/>
					) : null}
				</div>
			</main>
		</Layout>
	);
};

export async function getStaticProps({ locale, req }: any) {
	const categoryResponse = await categoryApiService.getCategoriesByLanguage(
		'ru'
	);
	const actualProductsResponse =
		await productsApiService.getProductActualProducts();
	const bannerResponse = await auctionBannerApiService.getAuctionBanner();

	return {
		props: {
			categories:
				categoryResponse.data === undefined
					? []
					: categoryResponse.data,
			actualProducts:
				actualProductsResponse.data.data === undefined
					? []
					: actualProductsResponse.data.data,
			bannerItems:
				bannerResponse.data === undefined ? [] : bannerResponse.data
		},
		revalidate: 600
	};
}

export default Home;
