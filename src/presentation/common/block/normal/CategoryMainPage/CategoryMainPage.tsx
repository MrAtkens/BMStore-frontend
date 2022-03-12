import React from 'react';
import Slider from 'react-slick';

import { ICategory } from 'domain/interfaces/ICategory';
import defaultCategories from './defaultCategories';
interface ICategoryBlock {
	categories: Array<ICategory>;
}

const CategoryMainPage = ({ categories }: ICategoryBlock) => {
	const carouselSetting = {
		dots: true,
		arrows: false,
		infinite: false,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	return (
		<div className="ps-search-trending">
			<div className="container">
				<div className="ps-section__header">
					<h3>
						Категории <span>популярных товаров</span>
					</h3>
				</div>
				<div className="ps-section__content">
					<div className="ps-block--categories-tabs ps-tab-root">
						<div className="ps-block__header">
							<Slider
								{...carouselSetting}
								className="ps-carousel"
							>
								{defaultCategories(categories).map((item) => (
									<div
										key={item.id}
										className="ps-block__item"
									>
										{item}
									</div>
								))}
							</Slider>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CategoryMainPage;
