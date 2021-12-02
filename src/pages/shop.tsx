import React from "react";
import {observer} from "mobx-react-lite";

import { categoryApiService } from "data/API"
import {ICategory} from "domain/interfaces/ICategory";

import Layout from "presentation/layout"
import BreadCrumb from 'presentation/common/typography/BreadCrumb';
import WidgetShopBrands from 'presentation/page/catalog/WidgetShopBrands';
import WidgetShopCategories from 'presentation/page/catalog/WidgetShopCategories';
import WidgetShopFilterByPriceRange from 'presentation/page/catalog/WidgetShopFilterByPriceRange'

interface IHome{
	categories: Array<ICategory>
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

const Shop = observer(({ categories } : IHome) => {

	return (
		<Layout categories={categories} title={"Главная страница - CATS"}>
			<BreadCrumb breadcrumb={breadCrumb} layout={"default"} />
			<div className="ps-page--shop" id="shop-sidebar">
				<div className="container">
					<div className="ps-layout--shop">
						<div className="ps-layout__left">
							<WidgetShopCategories  categories={categories}/>
							<WidgetShopBrands />
							<WidgetShopFilterByPriceRange />
						</div>
						<div className="ps-layout__right">
							<div className="ps-page__header">
								<h1>Каталог</h1>
							</div>
							<ShopItems columns={4} pageSize={12} />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
})


export async function getStaticProps({ locale, req } : any){
	const categoryResponse = await categoryApiService.getCategoriesByLanguage("ru")
	console.log(categoryResponse)
	return {
		props:{ categories: categoryResponse.data.data},
		revalidate: 600
	};
}

export default Shop;
