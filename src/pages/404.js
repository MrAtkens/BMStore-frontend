import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { HOME } from '../constant/routes';

const Error = () => {
	return (
		<div className="site-content">
			<div className="ps-page--404">
				<div className="container">
					<div className="ps-section__content">
						<figure>
							<Image
								width={800}
								height={360}
								src="/static/img/404.webp"
								alt="CATS страница 404"
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
	);
};

export default Error;
