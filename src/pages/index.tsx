import React from "react";
import Head from 'next/head'

import {ICategory} from "domain/interfaces/ICategory";
import { categoryApiService } from "data/API"

import Layout from "presentation/layout"
import Banners from 'presentation/common/block/Banners';
import Category from 'presentation/common/block/Category';
import Promotion from 'presentation/common/block/Promotion';

interface IHome{
	categories: Array<ICategory>
}

const Home = ({ categories } : IHome) => {

	return (
		<Layout categories={categories} title={"Главная страница - CATS"}>
			<Head>
				<title>CATS-Интерен магазин стройматериалов</title>
				<meta name="description" content="CATS-Магазин стройматериалов в Нур-Султан"/>
				<meta name="keywords" content="стройматериалы, ремонт, материалы, инструменты, техника, стройка"/>
				<meta name="author" content="Bazar-Jok Group"/>
			</Head>
			<main id="homepage-5">
				<div className="container">
					<Banners categories={categories}/>
					<Category categories={categories} />
					<Promotion />
				</div>
			</main>
		</Layout>
	);
}


export async function getStaticProps({ locale, req } : any){
	const categoryResponse = await categoryApiService.getCategoriesByLanguage("ru")
	console.log(categoryResponse.data)
	return {
		props:{ categories: categoryResponse.data},
		revalidate: 600
	};
}

export default Home;
