import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { notification } from 'antd';

import {
	USER_FIRST_PART,
	USER_SECOND_PART,
	USER_THIRD_PART
} from 'constant/storageNames';
import { isUserAuth } from 'helper/commons/userHelper';
import { HOME } from 'constant/routes';

import { categoryApiService, invoiceApiService } from 'data/API';
import { accountLinks } from 'data/static/accountLinks';
import { ICategory } from 'domain/interfaces/ICategory';
import { IInvoice } from 'domain/interfaces/IInvoice';

import AccountMenuSidebar from 'presentation/common/control/account/AccountMenuSidebar';
import InvoicesTable from 'presentation/page/account/InvoicesTable';
import BreadCrumb from 'presentation/common/typography/BreadCrumb';
import Layout from 'presentation/layout';

interface IInvoicePage {
	categories: Array<ICategory>;
	invoices: Array<IInvoice>;
}

const InvoicePage = ({ categories, invoices }: IInvoicePage) => {
	const breadCrumb = [
		{
			text: 'Главная',
			url: HOME
		},
		{
			text: 'Финансы',
			url: null
		}
	];

	const Router = useRouter();
	useEffect(() => {
		if (!isUserAuth()) {
			Router.push(HOME);
			notification.warn({
				message: 'Ошибка 401',
				description:
					'Для того чтобы узнать статус заказа просим вас зайти в систему или позвонить нам',
				duration: 10,
				placement: 'bottomRight'
			});
		}
	});

	return (
		<Layout categories={categories} title={'Финансы'}>
			<div className="ps-page--my-account">
				<BreadCrumb breadcrumb={breadCrumb} layout={'normal'} />
				<section className="ps-my-account ps-page--account">
					<div className="container">
						<div className="row">
							<div className="col-lg-3">
								<div className="ps-page__left">
									<AccountMenuSidebar data={accountLinks} />
								</div>
							</div>
							<div className="col-lg-9 orders-top">
								<InvoicesTable invoices={invoices} />
							</div>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
};

export async function getServerSideProps({ locale, req }: any) {
	const { cookies } = req;
	const categoryResponse = await categoryApiService.getCategoriesByLanguage(
		'ru'
	);
	let invoices = [];
	if (
		cookies[USER_FIRST_PART] !== undefined &&
		cookies[USER_SECOND_PART] !== undefined &&
		cookies[USER_THIRD_PART] !== undefined
	) {
		const response = await invoiceApiService.getInvoices(
			cookies[USER_FIRST_PART] +
				'.' +
				cookies[USER_SECOND_PART] +
				'.' +
				cookies[USER_THIRD_PART]
		);
		invoices = response.data;
	}
	if (categoryResponse.data === undefined || invoices === undefined)
		return {
			props: { categories: [], invoices: invoices }
		};
	return {
		props: { categories: categoryResponse.data, invoices: invoices }
	};
}

export default InvoicePage;
