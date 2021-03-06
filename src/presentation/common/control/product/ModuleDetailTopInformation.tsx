import React from 'react';
import Link from 'next/link';
import { SHOP_PAGE } from 'constant/routes';
import { IProduct } from 'domain/interfaces/IProduct';
// import Rating from '~/components/elements/Rating';

interface IModuleDetailTopInformation {
	product: IProduct;
}

const ModuleDetailTopInformation = ({
	product
}: IModuleDetailTopInformation) => {
	// Views
	let priceView;

	if (product.discountPrice < product.price) {
		priceView = (
			<h4 className="ps-product__price sale">
				<del className="mr-2">{product.price}</del>
				{product.discountPrice} тг
			</h4>
		);
	} else {
		priceView = <h4 className="ps-product__price">{product.price} тг</h4>;
	}

	return (
		<header>
			<h5 className="ps-product__articul">Артикул: {product.articul}</h5>
			<h1 className="ps-product__name">{product.title}</h1>
			<div className="ps-product__meta">
				<p>
					Категория:
					<Link href={SHOP_PAGE('category', product.categoryId)}>
						<a className="ml-2 text-capitalize">
							{product.categoryName}
						</a>
					</Link>
				</p>
				{/*   <div className="ps-product__rating">
                    <Rating />
                    <span>(1 review)</span>
                </div>*/}
			</div>
			{priceView}
		</header>
	);
};

export default ModuleDetailTopInformation;
