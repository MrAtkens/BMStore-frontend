import { ADDRESS, ORDERS, PENALTIES, USER, WISHLIST } from 'constant/routes';

export const accountLinks = [
	{
		text: 'Аккаунт',
		url: USER,
		icon: 'icon-user'
	},
	{
		text: 'Aдреса',
		url: ADDRESS,
		icon: 'icon-apartment'
	},
	{
		text: 'Штрафы',
		url: PENALTIES,
		icon: 'icon-tag'
	},
	{
		text: 'Заказы',
		url: ORDERS,
		icon: 'icon-cart'
	},
	{
		text: 'Избранные',
		url: WISHLIST,
		icon: 'icon-papers'
	}
];
