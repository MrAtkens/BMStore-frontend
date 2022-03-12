import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

import NextArrow from '../../typography/NextArrow';
import PrevArrow from '../../typography/PrevArrow';
import { IAuctionBanner } from 'domain/interfaces/IAuctionBanner';

interface IBanners {
	bannerItems: Array<IAuctionBanner>;
}

// Главный слайдер
const Banners = ({ bannerItems }: IBanners) => {
	const carouselSetting = {
		dots: false,
		arrows: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />
	};
	const clickHandle = (item) => {
		document.location.href = item;
	};

	return (
		<div className="ps-home-banner">
			<div className="container">
				<Slider {...carouselSetting} className="ps-carousel">
					{bannerItems.map((item) => (
						<Image
							key={item.imageUrl}
							loading="lazy"
							width={1250}
							height={600}
							onClick={() => clickHandle(item.redirectUrl)}
							priority
							src={item.imageUrl}
							alt="CATS"
						/>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default Banners;
