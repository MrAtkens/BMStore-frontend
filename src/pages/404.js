import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { HOME } from '../constant/routes';
import Head from 'next/head';

const Error = () => {
	return (
		<>
			<Head>
				<title>404 потеряна страница TACS</title>
				<meta
					name="description"
					content="TACS-Магазин стройматериалов в Нур-Султан"
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
									src="/static/img/404.webp"
									alt="TACS страница 404"
								/>
								<h3>Упс, похоже, страница не найдена</h3>
								<p>
									Скорее всего, вы неверно ввели адрес, либо
									произошла ошибка
									<br />
									<Link href={HOME}>
										<a>Вернуться назад</a>
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

export default Error;
