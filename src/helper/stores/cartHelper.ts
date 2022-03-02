import { ICartProduct } from 'domain/interfaces/ICartProduct';

export function calculateAmount(obj: Array<ICartProduct>) {
	return Object.values(obj)
		.reduce(
			(acc, { count, price, discountPrice }) =>
				acc +
				count *
					(discountPrice < price && discountPrice !== null
						? discountPrice
						: price),
			0
		)
		.toFixed(2);
}

export function calculateCartQuantity(obj: ICartProduct) {
	return Object.values(obj).reduce(
		(acc, { productQuantity }) => acc + productQuantity,
		0
	);
}

export function calculateArrayQuantity(obj: ICartProduct) {
	return Object.values(obj).reduce((acc) => acc + 1, 0);
}
