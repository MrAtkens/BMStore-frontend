import React from 'react';
import { observer } from 'mobx-react-lite';
import Link from 'next/link';

import { calculateAmount } from 'helper/stores/cartHelper';
import cartStore from 'data/stores/cartStore';
import { PRODUCT } from 'constant/routes';

const ModulePaymentOrderSummary = observer(() => {
	// view
	let listItemsView;
	let amount;
	if (cartStore.cart && cartStore.cart.length > 0) {
		amount = calculateAmount(cartStore.cart);
		listItemsView = cartStore.cart.map((item) => (
			<Link key={item.productId} href={PRODUCT(item.productId)}>
				<a>
					<strong>
						{item.title}
						<span>x{item.count}</span>
					</strong>
					<small className="ps-checkout--price-container">
						{item.count *
							(item.discountPrice < item.price
								? item.discountPrice
								: item.price)}
						&nbsp; тг
					</small>
				</a>
			</Link>
		));
	} else {
		listItemsView = <p>Нет продукта</p>;
	}
	// if (shipping === true) {
	//     shippingView = (
	//         <figure>
	//             <figcaption>
	//                 <strong>Shipping Fee</strong>
	//                 <small>$20.00</small>
	//             </figcaption>
	//         </figure>
	//     );
	//     totalView = (
	//         <figure className="ps-block__total">
	//             <h3>
	//                 Total
	//                 <strong>${parseInt(amount) + 20}.00</strong>
	//             </h3>
	//         </figure>
	//     );
	// } else {
	//     totalView = (
	//         <figure className="ps-block__total">
	//             <h3>
	//                 Сумма
	//                 <strong>${parseInt(amount)}.00</strong>
	//             </h3>
	//         </figure>
	//     );
	// }
	return (
		<div className="ps-block--checkout-order">
			<div className="ps-block__content">
				<figure>
					<figcaption>
						<strong>Продукт</strong>
						<strong>сумма</strong>
					</figcaption>
				</figure>
				<figure className="ps-block__items">{listItemsView}</figure>
				<figure>
					<figcaption>
						<strong>Общая сумма</strong>
						<small>{amount}&nbsp;тг</small>
					</figcaption>
				</figure>
				{/*{shippingView}*/}
				{/*{totalView}*/}
			</div>
		</div>
	);
});

export default ModulePaymentOrderSummary;
