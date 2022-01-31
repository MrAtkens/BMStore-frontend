import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { observer } from 'mobx-react-lite';

import { categoryApiService } from 'data/API';
import { ICategory } from 'domain/interfaces/ICategory';
import { CART, HOME } from 'constant/routes';
import cartStore  from "data/stores/cartStore"

import BreadCrumb from 'presentation/common/typography/BreadCrumb';
import Checkout from 'presentation/page/Checkout';
import Layout from "presentation/layout"


interface ICheckoutPage{
    categories: Array<ICategory>
}

const CheckoutPage = observer(({ categories } : ICheckoutPage) => {
    const Router = useRouter()

    useEffect(() => {
           cartStore.getCartFromApi().then(() => {
               if(cartStore.cart.length <= 0)
                   Router.push(HOME);
           })
    })

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
});


export async function getStaticProps({ locale, req } : any){
    const categoryResponse = await categoryApiService.getCategoriesByLanguage("ru")
    if(categoryResponse.data === undefined)
        return {
            props:{ categories: []},
            revalidate: 1800
        };
    return {
        props:{ categories: categoryResponse.data},
        revalidate: 1200
    };
}

export default CheckoutPage;
