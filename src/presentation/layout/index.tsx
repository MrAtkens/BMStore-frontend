import React from 'react';
import Head from 'next/head';

import Header from 'presentation/layout/headers/Header';
import HeaderMobile from 'presentation/layout/headers/HeaderMobile';
import Footer from 'presentation/layout/footers/Footer';
import NavigationList from 'presentation/common/layout/header/modules/NavigationList';

import {ICategory} from "domain/interfaces/ICategory";

interface IPageContainer{
    children?: any,
    title: string,
    categories: Array<ICategory>
}

const Layout = ({
    children,
    title = 'CATS',
    categories
} : IPageContainer) => {
    let titleView;

    if (title !== '') {
        titleView = process.env.title + ' | ' + title;
    } else {
        titleView = process.env.title + ' | ' + process.env.titleDescription;
    }

    return (
        <>
            <Head>
                <title>{titleView}</title>
            </Head>
            <Header categories={categories} />
            <HeaderMobile />
                {children}
            <Footer />
            <NavigationList categories={categories}/>
        </>
    );
};

export default Layout;