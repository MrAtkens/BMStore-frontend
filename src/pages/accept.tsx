import React from "react";
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import { HOME } from '../constant/routes';

const Accept = () => {

	return (
		<>
			<Head>
				<title>CATS — Интернет-магазин стройматериалов</title>
				<meta name="description" content="CATS — Интернет-магазин стройматериалов"/>
				<meta name="keywords" content="стройматериалы, ремонт, материалы, инструменты, техника, стройка"/>
				<meta name="author" content="Bazar-Jok Group"/>
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
									alt="Accept CATS"
								/>
								<h3>Подтверждение пароля</h3>
								<p>
									Ожидайте вас должно перекинуть на главную страницу
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
}

export async function getServerSideProps({ locale, req } : any){
	return{

	}
}

export default Accept;
