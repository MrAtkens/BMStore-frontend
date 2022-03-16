import React from 'react';
import LazyLoad from 'react-lazyload';

import { IAuctionBanner } from 'domain/interfaces/IAuctionBanner';

interface IBanners {
	bannerItems: Array<IAuctionBanner>;
}

// Главный слайдер
const BannersMobile = ({ bannerItems }: IBanners) => {
	const clickHandle = (item) => {
		document.location.href = item;
	};
	return (
		<div className="ps-shop-banner--mobile">
			{bannerItems.map((item) => {
				if (item.imageUrl === null || item.redirectUrl === null) {
					return null;
				} else
					return (
						<div
							key={item.imageUrl}
							className="banner--mobile-image"
						>
							<LazyLoad>
								<img
									onClick={() =>
										clickHandle(item.redirectUrl)
									}
									src={item.imageUrl}
									alt="CATS"
								/>
							</LazyLoad>
						</div>
					);
			})}
		</div>
	);
};

export default BannersMobile;
