import React from 'react';

import { categoryApiService } from 'data/API';
import { ICategory } from 'domain/interfaces/ICategory';
import { HOME } from 'constant/routes';

import BreadCrumb from 'presentation/common/typography/BreadCrumb';
import Wishlist from 'presentation/page/Wishlist';
import Layout from 'presentation/layout';

interface IWishlistPage {
	categories: Array<ICategory>;
}

const breadCrumb = [
	{
		text: 'Главная',
		url: HOME
	},
	{
		text: 'Избранное',
		url: null
	}
];

const WishlistPage = ({ categories }: IWishlistPage) => {
	return (
		<Layout categories={categories} title={'Избранные'}>
			<div className="ps-page--simple">
				<BreadCrumb breadcrumb={breadCrumb} layout={'default'} />
				<Wishlist />
			</div>
		</Layout>
	);
};

export async function getStaticProps({ locale, req }: any) {
	const categoryResponse = await categoryApiService.getCategoriesByLanguage(
		'ru'
	);
	if (categoryResponse === undefined)
		return {
			props: { categories: [] },
			revalidate: 1800
		};
	return {
		props: { categories: categoryResponse.data },
		revalidate: 1200
	};
}

export default WishlistPage;
