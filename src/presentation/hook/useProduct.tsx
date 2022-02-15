import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LazyLoad from 'react-lazyload';

import { IImage, IProduct } from 'domain/interfaces/IProduct';
import { PRODUCT } from 'constant/routes';

function getImageURL(images: Array<IImage>) {
	let imageURL;
	let isMainNotFound = true;
	if (images) {
		images.map((image) => {
			if (image.isMain) {
				if (image.url === null) imageURL = `/static/img/not-found.webp`;
				else imageURL = image.url;
				isMainNotFound = false;
			}
		});
	} else {
		imageURL = `/static/img/not-found.webp`;
	}
	if (isMainNotFound) imageURL = `/static/img/not-found.webp`;
	return imageURL;
}

export default function useProduct() {
	return {
		getImage: (product: IProduct) => {
			return (
				<LazyLoad>
					<Image
						layout="responsive"
						width={250}
						height={250}
						src={getImageURL(product.images)}
						alt={product.title}
					/>
				</LazyLoad>
			);
		},
		getRecommendImage: (productUrl: string, productAlt: string) => {
			return (
				<LazyLoad>
					<Image
						layout="responsive"
						width={250}
						height={250}
						src={
							productUrl !== undefined || true
								? productUrl
								: '/static/img/not-found.webp'
						}
						alt={productAlt}
					/>
				</LazyLoad>
			);
		},
		price: (product: IProduct) => {
			let view;
			if (product.discountPrice < product.price) {
				view = (
					<p className="ps-product__price sale">
						{product.discountPrice}
						<span>тг</span>
						<del className="ml-2">
							{product.price}
							<span>тг</span>
						</del>
					</p>
				);
			} else {
				view = (
					<p className="ps-product__price">
						{product.price}
						<span>тг</span>
					</p>
				);
			}
			return view;
		},
		badge: (product: IProduct) => {
			let view;
			if (product.discountPrice < product.price) {
				const discountPercent = (
					((product.price - product.discountPrice) /
						product.discountPrice) *
					100
				).toFixed(0);
				return (
					<div className="ps-product__badge">-{discountPercent}%</div>
				);
			}
			return view;
		},
		filters: (product: IProduct) => {
			return product.filters.map((filter) => (
				<a key={filter.filterId} className="text-capitalize">
					{filter.filterGroupName} : {filter.name}
				</a>
			));
		},
		title: (product: IProduct) => {
			return (
				<Link href={PRODUCT(product.id)}>
					<a className="ps-product__title">{product.title}</a>
				</Link>
			);
		}
	};
}
