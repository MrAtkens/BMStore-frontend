import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import { ICategory } from 'domain/interfaces/ICategory';
import defaultCategories from './defaultCategories';
import mobileCategories from './mobileCategories';

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

	const [size, setSize] = useState(0);
	const [isMobile, setIsMobile] = useState(false);

	const updateWidth = () => {
		if (typeof window !== 'undefined') setSize(window.innerWidth);
	};

	useEffect(() => {
		if (typeof window !== 'undefined') updateWidth();
	}, []);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('resize', updateWidth);
			if (window.innerWidth < 700) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
			return () => window.removeEventListener('resize', updateWidth);
		} else return () => null;
	}, [size]);

	return (
		<div className="ps-search-trending">
			<div className="container">
				<div className="ps-section__header">
					<h3>
						Категории
						{isMobile ? null : <span>популярных товаров</span>}
					</h3>
				</div>
				<div className="ps-section__content">
					<div className="ps-block--categories-tabs ps-tab-root">
						<div className="ps-block__header">
							<Slider
								{...carouselSetting}
								className="ps-carousel"
							>
								{isMobile
									? mobileCategories(categories).map(
											(item) => (
												<div
													key={item.id}
													className="ps-block__item"
												>
													{item}
												</div>
											)
									  )
									: defaultCategories(categories).map(
											(item) => (
												<div
													key={item.id}
													className="ps-block__item"
												>
													{item}
												</div>
											)
									  )}
							</Slider>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CategoryMainPage;
