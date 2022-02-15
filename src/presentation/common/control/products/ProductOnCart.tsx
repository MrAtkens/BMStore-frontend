import React from 'react';
import Link from 'next/link';
import useCartProduct from 'presentation/hook/useCartProduct';
import { PRODUCT } from 'constant/routes';
import { ICartProduct } from 'domain/interfaces/ICartProduct';

interface IProductOnCart {
	product: ICartProduct;
	children: any;
	quantity: number;
}

const ProductOnCart = ({ product, children, quantity }: IProductOnCart) => {
	const { getImage, badge, title } = useCartProduct();

	return (
		<div className="ps-product--cart-mobile">
			<div className="ps-product__thumbnail">
				<Link href={PRODUCT(product.productId)}>
					<a>{getImage(product)}</a>
				</Link>
				{badge(product)}
			</div>
			<div className="ps-product__content">
				{title(product)}
				<p>
					<small>
						{product.price} x {quantity} тг
					</small>
				</p>{' '}
				{children}
			</div>
		</div>
	);
};

export default ProductOnCart;
