import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LazyLoad from 'react-lazyload';

import { ICartProduct } from 'domain/interfaces/ICartProduct';
import { PRODUCT } from 'constant/routes';

function getImageURL(url: string) {
	let imageURL;

	if (url) {
		imageURL = url;
	} else {
		imageURL = `/static/img/not-found.webp`;
	}
	return imageURL;
}

export default function useCartProduct() {
	return {
		// Сборщик картинок
		getImage: (product: ICartProduct) => {
			return (
				<LazyLoad>
					<Image
						width={150}
						height={150}
						src={getImageURL(product.imageUrl)}
						alt={product.title}
					/>
				</LazyLoad>
			);
		},
		// Заголовок ссылка
		title: (product: ICartProduct) => {
			return (
				<Link href={PRODUCT(product.productId)}>
					<a className="ps-product__title">{product.title}</a>
				</Link>
			);
		}
	};
}
