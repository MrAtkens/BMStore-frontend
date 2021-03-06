import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { categoryApiService } from 'data/API';
import { accountLinks } from 'data/static/accountLinks';
import { ICategory } from 'domain/interfaces/ICategory';
import { isUserAuth } from 'helper/commons/userHelper';
import { HOME } from 'constant/routes';

import BreadCrumb from 'presentation/common/typography/BreadCrumb';
import AccountMenuSidebar from 'presentation/common/control/account/AccountMenuSidebar';
import UserInformation from 'presentation/page/account/UserInformation';
import Layout from 'presentation/layout';

interface ILoginPage {
	categories: Array<ICategory>;
}

const UserPage = ({ categories }: ILoginPage) => {
	const Router = useRouter();
	useEffect(() => {
		if (!isUserAuth) Router.push(HOME);
	});

	const breadCrumb = [
		{
			text: 'Главная',
			url: HOME
		},
		{
			text: 'Заказы',
			url: null
		}
	];

	return (
		<Layout categories={categories} title={'Кабинет'}>
			<div className="ps-page--my-account">
				<BreadCrumb breadcrumb={breadCrumb} layout={'normal'} />
				<section className="ps-my-account ps-page--account">
					<div className="container">
						<div className="row">
							<div className="col-lg-4">
								<div className="ps-page__left">
									<AccountMenuSidebar data={accountLinks} />
								</div>
							</div>
							<div className="col-lg-8 user-top">
								<UserInformation />
							</div>
						</div>
					</div>
				</section>
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
		revalidate: 1200
	};
}

export default UserPage;
