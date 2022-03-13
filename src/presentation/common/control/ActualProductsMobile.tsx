import React from 'react';

import { IProduct } from 'domain/interfaces/IProduct';
import ProductMobile from './products/ProductMobile';

interface IActualProducts {
	productItems: Array<IProduct>;
	isRecommended: boolean;
}

const ActualProductsMobile = ({
	productItems,
	isRecommended
}: IActualProducts) => {
	// Views
	return (
		<div className="ps-actual-products--mobile-container">
			{isRecommended ? (
				<h4>С этим товаром берут</h4>
			) : (
				<h4>Популярные продукты</h4>
			)}
			<div className="ps-actual-products--mobile">
				{productItems.map((item: IProduct) => {
					return <ProductMobile product={item} key={item.id} />;
				})}
			</div>
		</div>
	);
};

export default ActualProductsMobile;
