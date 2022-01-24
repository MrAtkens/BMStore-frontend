import { ABOUT_US, CART, CHECKOUT, CONTACTS, SHOP_PAGE, USER, WISHLIST } from '../routes';

export const accountLinks = [
	{
		text: 'Кабинет',
		url: USER,
	},
	{
		text: 'Корзина',
		url: CART,
	},
	{
		text: 'Избранные',
		url: WISHLIST,
	},
	{
		text: 'Оплата',
		url: CHECKOUT,
	},
	{
		text: 'Магазин',
		url: SHOP_PAGE(),
	},
	{
		text: 'О нас',
		url: ABOUT_US,
	},
	{
		text: 'Контакты',
		url: CONTACTS,
	},
];
