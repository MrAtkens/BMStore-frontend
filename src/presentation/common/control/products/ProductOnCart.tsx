import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IProduct } from 'domain/interfaces/IProduct';

interface CartProduct{
	product : IProduct,
	children : any
}

const ProductOnCart = ({ product, children } : CartProduct) => {
	return (
		<div className="ps-product--cart-mobile">
		<div className="ps-product__thumbnail">
		<Link href={`/product/${product.id}`}>
			<Image src={product.imageUrl} width={60} height={60}/>
		</Link>
	</div>
		<div className="ps-product__content">
			{product.title}
			<p>
				<small>
					${product.price} x {product.quantity}
				</small>
			</p>{' '}
			{children}
		</div>
	</div>
);
};

export default ProductOnCart;
