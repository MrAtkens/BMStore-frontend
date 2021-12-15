import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { categoryApiService, filtersApiService, productsApiService } from "data/API"
import filtersStore from "data/stores/filtersStore"
import productStore from "data/stores/productStore"

import { ICategory } from "domain/interfaces/ICategory";
import { IFilter } from 'domain/interfaces/IFilter';
import { IProduct } from 'domain/interfaces/IProduct';

import Layout from "presentation/layout"
import BreadCrumb from 'presentation/common/typography/BreadCrumb';
import WidgetShopFilter from 'presentation/page/catalog/WidgetShopFilter';
import WidgetShopCategories from 'presentation/page/catalog/WidgetShopCategories';
import WidgetShopFilterByPriceRange from 'presentation/page/catalog/WidgetShopFilterByPriceRange'
import ShopItems from 'presentation/page/catalog/ShopItems'


interface IShop{
	categoriesData: Array<ICategory>,
	products: Array<IProduct>,
	productCount: number,
	filtersData: Array<IFilter>,
}

const breadCrumb = [
	{
		text: 'Главная',
		url: '/',
	},
	{
		text: 'Каталог',
		url: null
	},
];

const Shop = observer(({ categoriesData, products, productCount, filtersData } : IShop) => {
	const Router = useRouter()
	const { filters } = Router.query

	useEffect(() => {
		if(filters !== undefined)
			filtersStore.setActiveFiltersFromUrl(filters)
	}, [])

	useEffect(() => {
		filtersStore.setFilters(filtersData)
		productStore.setProducts(products, productCount)
	}, [Router.query])

	return (
		<Layout categories={categoriesData} title={"Главная страница - CATS"}>
			<Head>
				<title>Каталог</title>
				<meta name="description" content="CATS-Магазин стройматериалов в Нур-Султан"/>
				<meta name="keywords" content="стройматериалы, ремонт, материалы, инструменты, техника, стройка"/>
				<meta name="author" content="Bazar-Jok Group"/>
			</Head>
			<BreadCrumb breadcrumb={breadCrumb} layout={"default"} />
			<div className="ps-page--shop" id="shop-sidebar">
				<div className="container">
					<div className="ps-layout--shop">
						<div className="ps-layout__left">
							<WidgetShopCategories categories={categoriesData}/>
							{filtersStore.filters === null || filtersStore.filters.map(item => (
									<WidgetShopFilter key={item.slug} filter={item}/>
							))}
							<WidgetShopFilterByPriceRange />
						</div>
						<div className="ps-layout__right">
							<div className="ps-page__header">
								<h1>Каталог</h1>
							</div>
							<ShopItems columns={4} pageSize={12}/>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
})

export const getServerSideProps: GetServerSideProps = async (context) => {
	let filterResponse = null
	let productResponse = [] as Array<IProduct>
	const {category, page, searchText, filters, price_min, price_max} = context.query

	if(category !== undefined){
		const response = await filtersApiService.getFilters("ru", category)
		filterResponse = response.data.data;
	}
	const categoryResponse = await categoryApiService.getCategoriesByLanguage("ru")
	console.log("Поиск")
	console.log(searchText)
	const response = await productsApiService.getProducts(parseInt(page as string)*12, (parseInt(page as string)-1)*12, searchText, category, filters, price_min, price_max)
	console.log(response)
	if(response.data !== undefined)
		productResponse = response.data.data
	return {
		props:{ categoriesData: categoryResponse.data, filtersData: filterResponse, products: productResponse, productCount: response.data.count},
	};
}


export default Shop;
