import React from 'react';
import Head from 'next/head';
import { observer } from 'mobx-react-lite';

import { ICategory } from 'domain/interfaces/ICategory';
import Header from 'presentation/layout/headers/Header';
import HeaderMobile from 'presentation/layout/headers/HeaderMobile';
import Footer from 'presentation/layout/footers/Footer';
import NavigationList from 'presentation/common/layout/header/modules/NavigationList';

interface IPageContainer {
	children?: any;
	title: string;
	categories: Array<ICategory>;
}

const Layout = observer(({ children, title, categories }: IPageContainer) => {
	let titleView;

	if (title !== '') {
		titleView = process.env['NEXT_PUBLIC_TITLE'] + ' | ' + title;
	} else {
		titleView = process.env['NEXT_PUBLIC_TITLE'];
	}

	return (
		<>
			<Head>
				<title>{titleView}</title>
				<meta
					name="description"
					content={process.env['NEXT_PUBLIC_DESCRIPTION_META']}
				/>
				<meta
					name="keywords"
					content="стройматериалы, ремонт, материалы, инструменты, техника, стройка"
				/>
				<meta name="author" content="TACS" />
			</Head>
			<Header categories={categories} />
			<HeaderMobile />
			{children}
			<Footer />
			<NavigationList categories={categories} />
		</>
	);
});

export default Layout;
