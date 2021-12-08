import React from "react";
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { categoryApiService, filtersApiService } from "data/API"
import { ICategory } from "domain/interfaces/ICategory";
import { IFilter } from 'domain/interfaces/IFilter';

// import { IProduct } from 'domain/interfaces/IProduct';

import Layout from "presentation/layout"
import BreadCrumb from 'presentation/common/typography/BreadCrumb';
import WidgetShopFilter from 'presentation/page/catalog/WidgetShopFilter';
import WidgetShopCategories from 'presentation/page/catalog/WidgetShopCategories';
import WidgetShopFilterByPriceRange from 'presentation/page/catalog/WidgetShopFilterByPriceRange'
// import ShopItems from 'presentation/page/catalog/ShopItems'

interface IShop{
	categories: Array<ICategory>,
	filters: Array<IFilter>
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

const Shop = ({ categories, filters } : IShop) => {

	return (
		<Layout categories={categories} title={"Главная страница - CATS"}>
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
							<WidgetShopCategories categories={categories}/>
							{filters === null || filters.map(item => (
									<WidgetShopFilter key={item.categoryId} filter={item}/>
							))}
							<WidgetShopFilterByPriceRange />
						</div>
						<div className="ps-layout__right">
							<div className="ps-page__header">
								<h1>Каталог</h1>
							</div>
							{/*<ShopItems columns={4} pageSize={12}  initialProducts={products}/>*/}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	console.log(context.query.category)
	let filterResponse = null

	if(context.query.category !== undefined){
		const response = await filtersApiService.getFilters("ru", context.query.category)
		console.log(response.data.data)
		filterResponse = response.data.data;
	}

	const categoryResponse = await categoryApiService.getCategoriesByLanguage("ru")
	// console.log(categoryResponse.data)
	return {
		props:{ categories: categoryResponse.data, filters: filterResponse},
	};
}


export default Shop;
