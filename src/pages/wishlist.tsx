import React from 'react';
import { categoryApiService } from 'data/API';
import { ICategory } from 'domain/interfaces/ICategory';

import BreadCrumb from 'presentation/common/typography/BreadCrumb';
import Wishlist from 'presentation/page/Wishlist';
import Layout from 'presentation/layout';

interface IWishlistPage{
    categories: Array<ICategory>
}

const breadCrumb = [
    {
        text: 'Главная',
        url: '/',
    },
    {
        text: 'Избранное',
        url: null
    },
];

const WishlistPage = ({ categories } : IWishlistPage) => {

    return (
        <Layout categories={categories} title={"Главная страница - CATS"}>
            <div className="ps-page--simple">
                <BreadCrumb breadcrumb={breadCrumb} layout={"default"} />
                <Wishlist />
            </div>
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

export default WishlistPage;
