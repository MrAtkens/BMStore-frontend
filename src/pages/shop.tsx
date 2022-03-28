import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

import {
	categoryApiService,
	filtersApiService,
	productsApiService
} from 'data/API';
import filtersStore from 'data/stores/filtersStore';
import productStore from 'data/stores/productStore';

import { ICategory } from 'domain/interfaces/ICategory';
import { IFilter } from 'domain/interfaces/IFilter';
import { IProduct } from 'domain/interfaces/IProduct';
import { HOME, SHOP_PAGE } from 'constant/routes';

import Layout from 'presentation/layout';
import ShopItems from 'presentation/page/catalog/ShopItems';
import BreadCrumb from 'presentation/common/typography/BreadCrumb';
import CategoryMenuMobile from 'presentation/common/typography/CategoryMenuMobile';

import WidgetShopFilter from 'presentation/page/catalog/WidgetShopFilter';
import WidgetShopCategories from 'presentation/page/catalog/WidgetShopCategories';
import WidgetShopFilterMobile from 'presentation/page/catalog/WidgetShopFilterMobile';
import WidgetShopFilterByPriceRange from 'presentation/page/catalog/WidgetShopFilterByPriceRange';

interface IShop {
	categoriesData: Array<ICategory>;
	products: Array<IProduct>;
	minPrice: number;
	maxPrice: number;
	productCount: number;
	filtersData: Array<IFilter>;
}

const breadCrumb = [
	{
		text: 'Главная',
		url: HOME
	},
	{
		text: 'Каталог',
		url: null
	}
];

const Shop = observer(
	({
		categoriesData,
		products,
		productCount,
		filtersData,
		minPrice,
		maxPrice
	}: IShop) => {
		const Router = useRouter();
		const { filters } = Router.query;

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
				if (window.innerWidth < 700) {
					setIsMobile(true);
				} else {
					setIsMobile(false);
				}
				return () => window.removeEventListener('resize', updateWidth);
			} else return () => null;
		}, [size]);

		useEffect(() => {
			if (filters !== undefined)
				filtersStore.setActiveFiltersFromUrl(filters);
			productStore.setPrice(minPrice, maxPrice);
		}, []);

		useEffect(() => {
			filtersStore.setFilters(filtersData);
			productStore.setProducts(products, productCount);
			productStore.setPrice(minPrice, maxPrice);
		}, [Router.query]);

		return (
			<Layout
				categories={categoriesData}
				title={'Главная страница - TACS'}
			>
				<Head>
					<title>Каталог - TACS</title>
					<meta
						name="description"
						content="TACS-Магазин стройматериалов в Нур-Султан"
					/>
					<meta
						name="keywords"
						content="стройматериалы, ремонт, материалы, инструменты, техника, стройка"
					/>
					<meta name="author" content="Bazar-Jok Group" />
				</Head>
				<BreadCrumb breadcrumb={breadCrumb} layout={'default'} />
				<div className="ps-page--shop" id="shop-sidebar">
					<div className="container">
						<div className="ps-layout--shop">
							<div className="ps-layout__left">
								{isMobile ? (
									<>
										{filtersStore.filters === null ||
											filtersStore.filters.map((item) => (
												<WidgetShopFilterMobile
													key={item.slug}
													filter={item}
												/>
											))}
										<WidgetShopFilterByPriceRange />
										<button
											onClick={() =>
												Router.push(SHOP_PAGE())
											}
											className="ps-btn ps-btn--fullwidth"
										>
											Сбросить все фильтры
										</button>
										<CategoryMenuMobile
											categories={categoriesData}
										/>
									</>
								) : (
									<>
										<WidgetShopCategories
											categories={categoriesData}
										/>
										{filtersStore.filters === null ||
											filtersStore.filters.map((item) => (
												<WidgetShopFilter
													key={item.slug}
													filter={item}
												/>
											))}
										<WidgetShopFilterByPriceRange />
										<button
											onClick={() =>
												Router.push(SHOP_PAGE())
											}
											className="ps-btn ps-btn--fullwidth"
										>
											Сбросить все фильтры
										</button>
									</>
								)}
							</div>
							<div className="ps-layout__right">
								<div className="ps-page__header">
									<h1>Каталог</h1>
								</div>
								<ShopItems
									columns={4}
									pageSize={16}
									size={size}
								/>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
);

export const getServerSideProps: GetServerSideProps = async (context) => {
	let filterResponse = [];
	let categoriesList = [] as Array<ICategory>;
	let productsList = [] as Array<IProduct>;
	let totalCount,
		minPrice,
		maxPrice = 0;
	const { category, page, searchText, filters, price_min, price_max } =
		context.query;
	let currentPage = parseInt(page as string);
	if (category !== undefined) {
		const response = await filtersApiService.getFilters('ru', category);
		if (response !== undefined) filterResponse = response.data.data;
	} else {
		const response = await filtersApiService.getFilters(
			'ru',
			'00000000-0000-0000-0000-000000000000'
		);
		if (response !== undefined) filterResponse = response.data.data;
	}
	const categoryResponse = await categoryApiService.getCategoriesByLanguage(
		'ru'
	);
	if (currentPage <= 0 || isNaN(currentPage)) currentPage = 1;
	const productResponse = await productsApiService.getProducts(
		16,
		(currentPage - 1) * 16,
		searchText,
		category,
		filters,
		price_min,
		price_max
	);
	if (categoryResponse !== undefined) categoriesList = categoryResponse.data;
	if (productResponse !== undefined) {
		productsList = productResponse.data.data;
		totalCount = productResponse.data.totalCount;
		minPrice = productResponse.data.minPrice;
		maxPrice = productResponse.data.maxPrice;
	}
	return {
		props: {
			categoriesData: categoriesList,
			filtersData: filterResponse,
			products: productsList,
			productCount: totalCount,
			minPrice: minPrice,
			maxPrice: maxPrice
		}
	};
};

export default Shop;
