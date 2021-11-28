import React from "react";
import {observer} from "mobx-react-lite";

import { categoryApiService } from "data/API"

import Layout from "presentation/layout"
import Banners from 'presentation/common/block/Banners';
import Category from 'presentation/common/block/Category';
import Promotion from 'presentation/common/block/Promotion';
import {ICategory} from "domain/interfaces/ICategory";

interface IHome{
	categories: Array<ICategory>
}

const Home = observer(({ categories } : IHome) => {

	return (
		<Layout categories={categories} title={"Главная страница - CATS"}>
			<main id="homepage-5">
				<div className="container">
					<Banners categories={categories}/>
					<Category categories={categories} />
					<Promotion />
				</div>
			</main>
		</Layout>
	);
})


export async function getStaticProps({ locale, req } : any){
	console.log(locale)
	const categoryResponse = await categoryApiService.getCategoriesByLanguage(locale)

	return {
		props:{ categories: categoryResponse.data.data},
		revalidate: 60
	};
}

export default Home;
