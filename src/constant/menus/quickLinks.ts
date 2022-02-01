import { CART, CHECKOUT, SHOP_PAGE, WISHLIST } from '../routes';

export const accountLinks = [
	{
		text: 'Избранные',
		url: WISHLIST,
	},
	{
		text: 'Корзина',
		url: CART,
	},
	{
		text: 'Оплата',
		url: CHECKOUT,
	},
	{
		text: 'Магазин',
		url: SHOP_PAGE(),
	},
];
