import { CART, CHECKOUT, ORDERS, SHOP_PAGE, USER, WISHLIST } from '../routes';

export const menuLinks = [
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

export const accountLinks = [
	{
		text: "Аккаунт",
		url: USER
	},
	{
		text: "Заказы",
		url: ORDERS
	}
]