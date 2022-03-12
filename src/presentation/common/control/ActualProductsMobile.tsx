import React from 'react';

import { IProduct } from 'domain/interfaces/IProduct';
import ProductMobile from './products/ProductMobile';

interface IActualProducts {
	productItems: Array<IProduct>;
}

const ActualProductsMobile = ({ productItems }: IActualProducts) => {
	// Views
	return (
		<div className="ps-actual-products--mobile">
			{productItems.map((item: IProduct) => {
				return <ProductMobile product={item} key={item.id} />;
			})}
		</div>
	);
};

export default ActualProductsMobile;
