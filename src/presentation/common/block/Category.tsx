import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { SHOP_PAGE } from 'constant/routes';
import { ICategory } from 'domain/interfaces/ICategory';
import Slider from 'react-slick';

interface ICategoryBlock {
	categories: Array<ICategory>;
}

const Category = ({ categories }: ICategoryBlock) => {
	const carouselSetting = {
		dots: true,
		arrows: false,
		infinite: false,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1
	};

	const carouselMobileSetting = {
		dots: false,
		arrows: false,
		infinite: true,
		swipe: true,
		speed: 800,
		slidesToShow: 3,
		centerMode: true,
		swipeToSlide: true,
		centerPadding: '60px'
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

	let count = 0;
	const list: any = [];
	let listBuffer: any = [];
	if (categories.length >= 6) {
		categories.map((category) => {
			count++;
			if (count === 6) {
				const categoryItem = (
					<Link
						passHref
						href={SHOP_PAGE('category', category.id)}
						key={category.id}
					>
						<div className="image-container">
							<Image
								loading="lazy"
								layout="responsive"
								width={600}
								height={600}
								src={category.imageUrl}
								alt={category.name}
							/>
							<span className="category-title">
								{category.name}
							</span>
						</div>
					</Link>
				);
				listBuffer.push(categoryItem);
				list.push(listBuffer);
				listBuffer = [];
				count = 0;
			} else {
				const categoryItem = (
					<Link
						passHref
						href={SHOP_PAGE('category', category.id)}
						key={category.id}
					>
						<div className="image-container">
							<Image
								loading="lazy"
								layout="responsive"
								width={600}
								height={600}
								src={
									category.imageUrl !== null &&
									category.imageUrl !== undefined
										? category.imageUrl
										: '/static/img/not-found.webp'
								}
								alt={category.name}
							/>
							<span className="category-title">
								{category.name}
							</span>
						</div>
					</Link>
				);
				listBuffer.push(categoryItem);
			}
		});
	} else {
		categories.map((category) => {
			if (category.imageUrl !== null && category.imageUrl !== undefined) {
				count++;
				const categoryItem = (
					<Link
						passHref
						href={SHOP_PAGE('category', category.id)}
						key={category.id}
					>
						<div className="image-container">
							<Image
								loading="lazy"
								layout="responsive"
								width={600}
								height={600}
								src={
									category.imageUrl !== null &&
									category.imageUrl !== undefined
										? category.imageUrl
										: '/static/img/not-found.webp'
								}
								alt={category.name}
							/>
							<span className="category-title">
								{category.name}
							</span>
						</div>
					</Link>
				);
				listBuffer.push(categoryItem);
			}
		});
		list.push(listBuffer);
	}
	return (
		<>
			{isMobile ? (
				<Slider {...carouselMobileSetting} className="ps-carousel">
					{categories.map((item) => (
						<Link
							passHref
							href={SHOP_PAGE('category', item.id)}
							key={item.id}
						>
							<div className="image-container">
								<Image
									loading="lazy"
									layout="responsive"
									width={600}
									height={600}
									src={
										item.imageUrl !== null &&
										item.imageUrl !== undefined
											? item.imageUrl
											: '/static/img/not-found.webp'
									}
									alt={item.name}
								/>
								<span className="category-title">
									{item.name}
								</span>
							</div>
						</Link>
					))}
				</Slider>
			) : (
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
										fade={true}
										className="ps-carousel"
									>
										{list.map((item) => (
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
			)}
		</>
	);
};
export default Category;
