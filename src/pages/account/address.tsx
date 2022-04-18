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

import { categoryApiService, addressApiService } from 'data/API';
import { accountLinks } from 'data/static/accountLinks';
import { ICategory } from 'domain/interfaces/ICategory';
import { IAddress } from 'domain/interfaces/IAddress';

import AccountMenuSidebar from 'presentation/common/control/account/AccountMenuSidebar';
import BreadCrumb from 'presentation/common/typography/BreadCrumb';
import Layout from 'presentation/layout';
import AddressTable from 'presentation/page/account/AddressTable';

interface IAddressPage {
	categories: Array<ICategory>;
	address: Array<IAddress>;
}

const AddressPage = ({ categories, address }: IAddressPage) => {
	const breadCrumb = [
		{
			text: 'Главная',
			url: HOME
		},
		{
			text: 'Адреса',
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
		<Layout categories={categories} title={'Адреса'}>
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
								<AddressTable address={address} />
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
	let address = [];
	if (
		cookies[USER_FIRST_PART] !== undefined &&
		cookies[USER_SECOND_PART] !== undefined &&
		cookies[USER_THIRD_PART] !== undefined
	) {
		const response = await addressApiService.getAddresses(
			cookies[USER_FIRST_PART] +
				'.' +
				cookies[USER_SECOND_PART] +
				'.' +
				cookies[USER_THIRD_PART]
		);
		address = response.data.data;
	}
	if (categoryResponse.data === undefined)
		return {
			props: { categories: [], address: address }
		};
	return {
		props: { categories: categoryResponse.data, address: address }
	};
}

export default AddressPage;
