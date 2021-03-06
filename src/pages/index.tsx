import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { IAuctionBanner } from 'domain/interfaces/IAuctionBanner';
import { ICategory } from 'domain/interfaces/ICategory';
import { IProduct } from 'domain/interfaces/IProduct';
import {
	categoryApiService,
	productsApiService,
	auctionBannerApiService
} from 'data/API';
import { toastBuySuccess } from 'helper/toastify';

import Layout from 'presentation/layout';
import Banners from 'presentation/common/block/normal/Banners';
import CategoryMainPage from 'presentation/common/block/normal/CategoryMainPage/CategoryMainPage';
import PromotionMainPage from 'presentation/common/block/normal/PromotionMainPage';
import BannersMobile from 'presentation/common/block/mobile/BannersMobile';
import ActualProducts from 'presentation/common/control/ActualProducts';
import CategoryMobilePage from 'presentation/common/block/mobile/CategoryMobilePage';
import ActualProductsMobile from 'presentation/common/control/ActualProductsMobile';

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

	const [size, setSize] = useState(0);
	const [isMobile, setIsMobile] = useState(false);

	const updateWidth = () => {
		if (typeof window !== 'undefined') setSize(window.innerWidth);
	};

	useEffect(() => {
		if (typeof window !== 'undefined') updateWidth();
	}, []);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('resize', updateWidth);
			if (window.innerWidth < 500) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
			return () => window.removeEventListener('resize', updateWidth);
		} else return () => null;
	}, [size]);

	return (
		<Layout
			categories={categories}
			title="интернет магазин строительных материалов"
		>
			<main id="homepage-1">
				{isMobile ? (
					<div>
						<BannersMobile bannerItems={bannerItems} />
						<CategoryMobilePage categories={categories} />
						{actualProducts.length > 0 ? (
							<ActualProductsMobile
								productItems={actualProducts}
								isRecommended={false}
							/>
						) : null}
					</div>
				) : (
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
				)}
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
				categoryResponse === undefined
					? []
					: Array.isArray(categoryResponse.data)
					? categoryResponse.data
					: [],
			actualProducts:
				actualProductsResponse === undefined
					? []
					: Array.isArray(actualProductsResponse.data.data)
					? actualProductsResponse.data.data
					: [],
			bannerItems:
				bannerResponse === undefined
					? []
					: Array.isArray(bannerResponse.data)
					? bannerResponse.data
					: []
		},
		revalidate: 600
	};
}

export default Home;
