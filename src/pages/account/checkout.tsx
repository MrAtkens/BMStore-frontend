import React from 'react';

import { categoryApiService } from 'data/API';
import { ICategory } from 'domain/interfaces/ICategory';
import { CART, HOME } from 'constant/routes';

import BreadCrumb from 'presentation/common/typography/BreadCrumb';
import Checkout from 'presentation/page/Checkout';
import Layout from "presentation/layout"
import Head from 'next/head';


interface ICheckoutPage{
    categories: Array<ICategory>
}

const CheckoutPage = ({ categories } : ICheckoutPage) => {
    const breadCrumb = [
        {
            text: 'Главная',
            url: HOME,
        },
        {
            text: 'Корзина',
            url: CART,
        },
        {
            text: 'Оплата',
            url: null
        },
    ];

    return (
        <Layout categories={categories} title={"Главная страница - CATS"}>
            <Head>
                <title>CATS — Оплата</title>
                <meta name="description" content="CATS — Интернет-магазин стройматериалов"/>
                <meta name="keywords" content="стройматериалы, ремонт, материалы, инструменты, техника, стройка"/>
                <meta name="author" content="Bazar-Jok Group"/>
            </Head>
            <div className="ps-page--simple">
                <BreadCrumb breadcrumb={breadCrumb} layout='default' />
                <Checkout />
            </div>
        </Layout>
    );
};

export async function getStaticProps({ locale, req } : any){
    const categoryResponse = await categoryApiService.getCategoriesByLanguage("ru")
    return {
        props:{ categories: categoryResponse.data},
        revalidate: 600
    };
}


export default CheckoutPage;
