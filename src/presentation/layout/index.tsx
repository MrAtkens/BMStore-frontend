import React, { useEffect } from 'react';
import Head from 'next/head';
import { observer } from 'mobx-react-lite';

import {ICategory} from 'domain/interfaces/ICategory';
import productStore from 'data/stores/productStore';
import cartStore from 'data/stores/cartStore';

import Header from 'presentation/layout/headers/Header';
import HeaderMobile from 'presentation/layout/headers/HeaderMobile';
import Footer from 'presentation/layout/footers/Footer';
import NavigationList from 'presentation/common/layout/header/modules/NavigationList';

interface IPageContainer{
    children?: any,
    title: string,
    categories: Array<ICategory>
}

const Layout = observer(({
    children,
    title = 'CATS',
    categories
} : IPageContainer) => {
    let titleView;

    useEffect(() => {
        cartStore.getCartFromApi()
        productStore.setWishList()
    }, [])

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
});

export default Layout;
