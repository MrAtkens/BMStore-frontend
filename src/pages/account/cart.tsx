import React from 'react';
import { observer } from 'mobx-react-lite';
import Link from 'next/link';
import Head from 'next/head';

import { CHECKOUT, HOME, SHOP_PAGE } from 'constant/routes';
import { ICategory } from 'domain/interfaces/ICategory';
import { categoryApiService } from 'data/API';
import cartStore  from "data/stores/cartStore"


import CartItems from 'presentation/page/cart/CartItems';
import ModuleCartSummary from 'presentation/page/cart/ModuleCartSummary'
import BreadCrumb from 'presentation/common/typography/BreadCrumb';
import Layout from 'presentation/layout'


interface IShoppingCartScreen{
    categories: Array<ICategory>,
}

const ShoppingCartScreen = observer(({ categories } : IShoppingCartScreen) => {

    const breadCrumb = [
        {
            text: 'Главная',
            url: HOME,
        },
        {
            text: 'Корзина',
            url: null
        },
    ];

    // View
    let contentView;
    if (cartStore.cart) {
        if (cartStore.cart.length > 0) {
            contentView = (
                <>
                    <div className="ps-section__content">
                        <CartItems/>
                        <div className="ps-section__cart-actions">
                            <Link href={SHOP_PAGE()}>
                                <a className="ps-btn">Каталог</a>
                            </Link>
                        </div>
                    </div>
                    <div className="ps-section__footer">
                        <div className="row justify-space-between">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                                <div className="row">
                                    <div className="col-lg-6">
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                                <ModuleCartSummary />
                                <Link href={CHECKOUT}>
                                    <a className="ps-btn ps-btn--fullwidth">
                                        Перейти к оплате
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            );
        } else {
            contentView = (
                <>
                    <div className="ps-section__content">
                        <div className="alert alert-info">
                            <p className="mb-0">
                                Ваша корзина пуста
                            </p>
                        </div>

                        <div className="ps-section__cart-actions">
                            <Link href={SHOP_PAGE()}>
                                <a className="ps-btn">Вернуться в каталог</a>
                            </Link>
                        </div>
                    </div>
                </>
            );
        }
    }

    return (
        <Layout categories={categories} title={"Главная страница - CATS"}>
            <Head>
                <title>CATS — Корзина</title>
                <meta name="description" content="CATS — Интернет-магазин стройматериалов"/>
                <meta name="keywords" content="стройматериалы, ремонт, материалы, инструменты, техника, стройка"/>
                <meta name="author" content="Bazar-Jok Group"/>
            </Head>
                <div className="ps-page--simple">
                    <BreadCrumb breadcrumb={breadCrumb} layout='default' />
                    <div className="ps-section--shopping ps-shopping-cart">
                        <div className="container">
                            <div className="ps-section__header">
                                <h1>Корзина </h1>
                            </div>
                            {contentView}
                        </div>
                    </div>
                </div>
        </Layout>
    );
})


export async function getStaticProps({ locale, req } : any){
    const categoryResponse = await categoryApiService.getCategoriesByLanguage("ru")
    return {
        props:{ categories: categoryResponse.data},
        revalidate: 600
    };
}


export default ShoppingCartScreen;
