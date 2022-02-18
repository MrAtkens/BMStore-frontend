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
		badge: (product: ICartProduct) => {
			let view;
			if (product.discountPrice < product.price) {
				const discountPercent = (
					100 -
					(product.discountPrice / product.price) * 100
				).toFixed(0);
				return (
					<div className="ps-product__badge">-{discountPercent}%</div>
				);
			}
			return view;
		},
		title: (product: ICartProduct) => {
			return (
				<Link href={PRODUCT(product.productId)}>
					<a className="ps-product__title">{product.title}</a>
				</Link>
			);
		}
	};
}
