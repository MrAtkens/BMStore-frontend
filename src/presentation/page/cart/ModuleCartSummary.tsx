import React from 'react';
import Link from 'next/link';
import { calculateAmount } from 'helper/stores/cartHelper';
import { PRODUCT } from 'constant/routes';
import { observer } from 'mobx-react-lite';

import cartStore from 'data/stores/cartStore';

const ModuleCartSummary = observer(() => {
	// View
	let productItemsView, amount;
	if (cartStore.cart && cartStore.cart.length > 0) {
		amount = calculateAmount(cartStore.cart);
		productItemsView = cartStore.cart.map((item) => (
			<li key={item.productId}>
				<span className="ps-block__estimate">
					<Link passHref href={PRODUCT(item.productId)}>
						<a className="ps-product__title">
							{item.title}
							<br />
							<a className="ps-product__price-container">
								{item.count} x{' '}
								{item.discountPrice < item.price ? (
									<p className="ps-product__price sale">
										{item.discountPrice}&nbsp;
										<span>тг </span>
										<del className="ml-2">
											{item.price}&nbsp;<span>тг </span>
										</del>
									</p>
								) : (
									<p className="ps-product__price">
										{item.price}&nbsp;<span>тг </span>
									</p>
								)}
							</a>
						</a>
					</Link>
				</span>
			</li>
		));
	}

	return (
		<>
			<div className="ps-block--shopping-total">
				<div className="ps-block__content">
					<ul className="ps-block__product">{productItemsView}</ul>
					<h3>
						Сумма <span>{amount}&nbsp;тг</span>
					</h3>
				</div>
			</div>
		</>
	);
});

export default ModuleCartSummary;
