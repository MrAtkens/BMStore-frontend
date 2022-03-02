import React from 'react';
import Link from 'next/link';

import { IWishProduct } from 'domain/interfaces/IWishProduct';
import { PRODUCT } from 'constant/routes';

import useProduct from 'presentation/hook/useWishProduct';

interface IProductWishList {
	product: IWishProduct;
}

const ProductWishList = ({ product }: IProductWishList) => {
	const { getImage, title } = useProduct();
	return (
		<div className="ps-product--cart">
			<div className="ps-product__thumbnail">
				<Link href={PRODUCT(product.productId)}>
					<a>{getImage(product)}</a>
				</Link>
			</div>
			<div className="ps-product__content">{title(product)}</div>
		</div>
	);
};

export default ProductWishList;
