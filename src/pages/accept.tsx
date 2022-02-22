import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { GetServerSideProps } from 'next';

import { HOME } from 'constant/routes';
import { authenticationService } from 'data/API';
import { userAcceptMailStatus } from 'helper/responseStatus';

const Accept = () => {
	return (
		<>
			<Head>
				<title>TACS — Интернет-магазин стройматериалов</title>
				<meta
					name="description"
					content="TACS — Интернет-магазин стройматериалов"
				/>
				<meta
					name="keywords"
					content="стройматериалы, ремонт, материалы, инструменты, техника, стройка"
				/>
				<meta name="author" content="Bazar-Jok Group" />
			</Head>
			<div className="site-content">
				<div className="ps-page--404">
					<div className="container">
						<div className="ps-section__content">
							<figure>
								<Image
									width={800}
									height={360}
									src="/static/img/accept.webp"
									alt="Accept TACS"
								/>
								<h3>Подтверждение пароля</h3>
								<p>
									Ожидайте вас должно перекинуть на главную
									страницу
									<br />
									<Link href={HOME}>
										<a>Вернуться на главную</a>
									</Link>
								</p>
							</figure>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { userId } = context.query;
	const response = await authenticationService.userMailAccepts(userId);
	userAcceptMailStatus(response.status);
	if (response.status === 200)
		return {
			redirect: {
				permanent: true,
				destination: HOME
			},
			props: {}
		};
	else {
		setTimeout(() => {
			return {
				redirect: {
					permanent: true,
					destination: HOME
				},
				props: {}
			};
		}, 5000);
	}
	return {
		props: {}
	};
};

export default Accept;
