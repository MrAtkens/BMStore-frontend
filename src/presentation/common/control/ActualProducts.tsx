import React from 'react';
import Slider from 'react-slick';

import { carouselFullwidth, carouselStandard } from 'helper/carousel-helpers';
import { IProduct } from 'domain/interfaces/IProduct';
import { generateTempArray } from 'helper/commons/header';
import SkeletonProduct from 'presentation/common/block/normal/skeletons/SkeletonProduct';
import Product from 'presentation/common/control/products/Product';

interface IActualProducts {
	productItems: Array<IProduct>;
	layout: string;
}

const ActualProducts = ({ productItems, layout }: IActualProducts) => {
	// Views
	let carouselView;
	if (productItems !== undefined) {
		if (productItems.length > 0) {
			if (layout == 'fullwidth') {
				carouselView = (
					<Slider
						{...carouselFullwidth}
						className="ps-carousel outside"
					>
						{productItems.map((item: IProduct) => {
							return <Product product={item} key={item.id} />;
						})}
					</Slider>
				);
			} else {
				carouselView = (
					<Slider
						{...carouselStandard}
						className="ps-carousel outside"
					>
						{productItems.map((item: IProduct) => {
							return <Product product={item} key={item.id} />;
						})}
					</Slider>
				);
			}
		} else {
			carouselView = <p>Продукты не найдены.</p>;
		}
	} else {
		carouselView = carouselView = (
			<Slider {...carouselStandard} className="ps-carousel outside">
				{generateTempArray(8).map((item) => (
					<SkeletonProduct key={item} />
				))}
			</Slider>
		);
	}

	return (
		<div className="ps-search-trending">
			<div className="container">
				<div className="ps-section--default ps-customer-bought">
					<div className="ps-section__header">
						<h3>Популярные товары</h3>
					</div>
					<div className="ps-section__content">{carouselView}</div>
				</div>
			</div>
		</div>
	);
};

export default ActualProducts;
