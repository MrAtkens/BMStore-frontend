import React, { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { categoryApiService, productsApiService } from 'data/API';
import { ICategory } from 'domain/interfaces/ICategory';
import { IProduct } from 'domain/interfaces/IProduct';

import ProductDetailBox from 'presentation/common/control/ProductDetailBox';

import SkeletonProductDetail from 'presentation/common/block/skeletons/SkeletonProductDetail';
import BreadCrumb from 'presentation/common/typography/BreadCrumb';
import Layout from 'presentation/layout';

interface IProductPage{
    categoriesData: Array<ICategory>,
    product: IProduct,
}

const ProductPage = ({categoriesData, product} : IProductPage) => {
    const Router = useRouter();
    const [pageProduct, setPageProduct] = useState(product)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setPageProduct(product);
        setLoading(false)
    }, [Router.query]);

    const breadCrumb = [
        {
            text: 'Главная',
            url: '/',
        },
        {
            text: 'Каталог',
            url: '/shop'
        },
        {
            text: pageProduct ? pageProduct.title : 'Загрузка...',
            url: null
        },
    ];
    // Views
    let productView;
    if (!loading) {
        if (pageProduct) {
            productView = <ProductDetailBox product={pageProduct} />;
        } else {
        }
    } else {
        productView = <SkeletonProductDetail />;
    }
    return (
        <Layout categories={categoriesData} title={"Главная страница - CATS"}>
            <Head>
                <title>Продукт - {pageProduct.title}</title>
                <meta name="description" content="CATS-Магазин стройматериалов в Нур-Султан"/>
                <meta name="keywords" content="стройматериалы, ремонт, материалы, инструменты, техника, стройка"/>
                <meta name="author" content="Bazar-Jok Group"/>
            </Head>
            <div className="ps-page--simple">
                <BreadCrumb breadcrumb={breadCrumb} layout={"default"} />
                <div className="ps-page--product ps-page--product-box">
                    <div className="container">
                        {productView}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { pid } = context.query
    const categoryResponse = await categoryApiService.getCategoriesByLanguage("ru")
    const productResponse = await productsApiService.getProductById(pid)
    return {
        props:{ categoriesData: categoryResponse.data, product: productResponse.data},
    };
}

export default ProductPage;
