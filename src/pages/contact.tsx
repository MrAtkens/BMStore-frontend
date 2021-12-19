import React from 'react';
import Head from 'next/head';

import { categoryApiService } from 'data/API';
import { ICategory } from 'domain/interfaces/ICategory';
import { HOME } from 'constant/routes';

import BreadCrumb from 'presentation/common/typography/BreadCrumb';
import ContactInfo from 'presentation/page/contact/ContactInfo';
import ContactForm from 'presentation/page/contact/ContactForm';
import ContactMap from 'presentation/page/contact/ContactMap';
import Layout from 'presentation/layout';

interface IContactUsPage{
    categories: Array<ICategory>
}

const ContactUsPage = ({ categories } : IContactUsPage) => {
    const breadCrumb = [
        {
            text: 'Главная',
            url: HOME,
        },
        {
            text: 'Контакты',
            url: null
        },
    ];

    return (
        <Layout categories={categories} title={"Главная страница - CATS"}>
            <Head>
                <title>CATS — Контакты</title>
                <meta name="description" content="CATS — Интернет-магазин стройматериалов"/>
                <meta name="keywords" content="стройматериалы, ремонт, материалы, инструменты, техника, стройка"/>
                <meta name="author" content="Bazar-Jok Group"/>
            </Head>
            <div className="ps-page--single" id="contact-us">
                <BreadCrumb breadcrumb={breadCrumb} layout={"default"} />
                <ContactMap />
                <ContactInfo />
                <ContactForm />
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


export default ContactUsPage;
