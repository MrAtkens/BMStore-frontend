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
		// Сборщик картинок
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
		// Сборщик картинок рекомендованных товаров
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
		// Сборщик цены и скидочной цены
		price: (product: IProduct) => {
			let view;
			if (product.discountPrice < product.price) {
				view = (
					<p className="ps-product__price sale">
						{product.discountPrice}&nbsp;<span>тг</span>
						<del className="ml-2">
							{product.price}&nbsp;<span>тг</span>
						</del>
					</p>
				);
			} else {
				view = (
					<p className="ps-product__price">
						{product.price}&nbsp;<span>тг</span>
					</p>
				);
			}
			return view;
		},
		// Бадж для скидок в процентах
		badge: (product: IProduct) => {
			let view;
			if (product.discountPrice < product.price) {
				const discountPercent =
					100 -
					Math.floor((product.discountPrice / product.price) * 100);
				return (
					<div className="ps-product__badge">-{discountPercent}%</div>
				);
			}
			return view;
		},
		// Сборщик фильтров продукта
		filters: (product: IProduct) => {
			return product.filters.map((filter) => (
				<a key={filter.filterId} className="text-capitalize">
					{filter.filterGroupName} : {filter.name}
				</a>
			));
		},
		// Заголовок ссылка
		title: (product: IProduct) => {
			return (
				<Link href={PRODUCT(product.id)}>
					<a className="ps-product__title">{product.title}</a>
				</Link>
			);
		}
	};
}
