import React from 'react';
import Link from 'next/link';

import { ICartProduct } from 'domain/interfaces/ICartProduct';
import { PRODUCT } from 'constant/routes';

import useCartProduct from 'presentation/hook/useCartProduct';

interface ProductCart {
	product: ICartProduct;
}

const ProductCart = ({ product }: ProductCart) => {
	const { getImage, badge, title } = useCartProduct();
	return (
		<div className="ps-product--cart">
			<div className="ps-product__thumbnail">
				<Link href={PRODUCT(product.productId)}>
					<a>{getImage(product)}</a>
				</Link>
				{badge(product)}
			</div>
			<div className="ps-product__content">{title(product)}</div>
		</div>
	);
};

export default ProductCart;
