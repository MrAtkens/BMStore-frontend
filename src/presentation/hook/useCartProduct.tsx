import React from 'react';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';

import { ICartProduct } from 'domain/interfaces/ICartProduct';
import { PRODUCT } from 'constant/routes';

function getImageURL(url : string) {
	let imageURL;

	if (url) {
		imageURL = url;
	} else {
		imageURL = `/static/img/not-found.jpg`;
	}
	return imageURL;
}

export default function useCartProduct() {
	return {
		getImage: (product : ICartProduct) => {
			return (
				<LazyLoad>
					<img src={getImageURL(product.imageUrl)} alt={product.title} />
			</LazyLoad>
		)
		},
		title: (product: ICartProduct) => {
			return (
				<Link href={PRODUCT(product.productId)}>
			<a className="ps-product__title">{product.title}</a>
				</Link>
		);
		},
	};
}
