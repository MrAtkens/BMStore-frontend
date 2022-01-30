import { ABOUT_US, CONTACTS, SHOP_PAGE, USER, WISHLIST } from '../routes';

export const accountLinks = [
	{
		text: 'Кабинет',
		url: USER,
	},
	{
		text: 'Избранные',
		url: WISHLIST,
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
