import React from 'react';

import { categoryApiService } from 'data/API';
import { ICategory } from 'domain/interfaces/ICategory';
import { HOME } from 'constant/routes';

import BreadCrumb from 'presentation/common/typography/BreadCrumb';
import ContactInfo from 'presentation/page/contact/ContactInfo';
import ContactMap from 'presentation/page/contact/ContactMap';
import Layout from 'presentation/layout';

interface IContactUsPage {
	categories: Array<ICategory>;
}

const ContactUsPage = ({ categories }: IContactUsPage) => {
	const breadCrumb = [
		{
			text: 'Главная',
			url: HOME
		},
		{
			text: 'Контакты',
			url: null
		}
	];

	return (
		<Layout categories={categories} title={'Контакты'}>
			<div className="ps-page--single" id="contact-us">
				<BreadCrumb breadcrumb={breadCrumb} layout={'default'} />
				<ContactMap />
				<ContactInfo />
			</div>
		</Layout>
	);
};

export async function getStaticProps({ locale, req }: any) {
	const categoryResponse = await categoryApiService.getCategoriesByLanguage(
		'ru'
	);
	if (categoryResponse === undefined)
		return {
			props: { categories: [] },
			revalidate: 1800
		};
	return {
		props: { categories: categoryResponse.data },
		revalidate: 600
	};
}

export default ContactUsPage;
