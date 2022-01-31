import React from 'react';
import Head from 'next/head';

import { categoryApiService } from 'data/API';
import { ICategory } from 'domain/interfaces/ICategory';
import { HOME } from 'constant/routes';

import BreadCrumb from 'presentation/common/typography/BreadCrumb';
import Wishlist from 'presentation/page/Wishlist';
import Layout from 'presentation/layout';

interface IWishlistPage{
    categories: Array<ICategory>
}

const breadCrumb = [
    {
        text: 'Главная',
        url: HOME,
    },
    {
        text: 'Избранное',
        url: null
    },
];

const WishlistPage = ({ categories } : IWishlistPage) => {

    return (
        <Layout categories={categories} title={"Главная страница - CATS"}>
            <Head>
                <title>Избранные</title>
                <meta name="description" content="CATS-Магазин стройматериалов в Нур-Султан"/>
                <meta name="keywords" content="стройматериалы, ремонт, материалы, инструменты, техника, стройка"/>
                <meta name="author" content="Bazar-Jok Group"/>
            </Head>
            <div className="ps-page--simple">
                <BreadCrumb breadcrumb={breadCrumb} layout={"default"} />
                <Wishlist />
            </div>
        </Layout>
    );
}

export async function getStaticProps({ locale, req } : any){
    const categoryResponse = await categoryApiService.getCategoriesByLanguage("ru")
    if(categoryResponse === false)
        return {
            props:{ categories: []},
            revalidate: 1800
        };
    return {
        props:{ categories: categoryResponse.data},
        revalidate: 1200
    };
}

export default WishlistPage;
