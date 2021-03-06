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

import { categoryApiService, finesApiService } from 'data/API';
import { accountLinks } from 'data/static/accountLinks';
import { ICategory } from 'domain/interfaces/ICategory';
import { IPenaltie } from 'domain/interfaces/IPenaltie';

import AccountMenuSidebar from 'presentation/common/control/account/AccountMenuSidebar';
import TablePenalties from 'presentation/common/control/account/TablePenalties';
import BreadCrumb from 'presentation/common/typography/BreadCrumb';
import Layout from 'presentation/layout';

interface IPenaltiesPage {
	categories: Array<ICategory>;
	penalties: Array<IPenaltie>;
}

const PenaltiesPage = ({ categories, penalties }: IPenaltiesPage) => {
	const breadCrumb = [
		{
			text: 'Главная',
			url: HOME
		},
		{
			text: 'Штрафы',
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
		<Layout categories={categories} title={'Штрафы'}>
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
								<TablePenalties penalties={penalties} />
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
	let penalties = [];
	if (
		cookies[USER_FIRST_PART] !== undefined &&
		cookies[USER_SECOND_PART] !== undefined &&
		cookies[USER_THIRD_PART] !== undefined
	) {
		const response = await finesApiService.getFines(
			cookies[USER_FIRST_PART] +
				'.' +
				cookies[USER_SECOND_PART] +
				'.' +
				cookies[USER_THIRD_PART]
		);
		penalties = response.data.data;
	}
	if (categoryResponse === undefined)
		return {
			props: { categories: [], penalties: penalties }
		};
	return {
		props: { categories: categoryResponse.data, penalties: penalties }
	};
}

export default PenaltiesPage;
