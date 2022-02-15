import React from 'react';
import Link from 'next/link';
import useProduct from 'presentation/hook/useProduct';
import { IProduct } from 'domain/interfaces/IProduct';
import { PRODUCT } from 'constant/routes';

const ProductHorizontal = (product: IProduct) => {
	const { getImage, price, badge, title } = useProduct();
	return (
		<div className="ps-product--horizontal">
			<div className="ps-product__thumbnail">
				<Link href={PRODUCT(product.id)}>
					<a>{getImage(product)}</a>
				</Link>
				{badge(product)}
			</div>
			<div className="ps-product__content">
				{title(product)}
				{/*<div className="ps-product__rating">*/}
				{/*    <Rating />*/}
				{/*</div>*/}
				{price(product)}
			</div>
		</div>
	);
};

export default ProductHorizontal;
