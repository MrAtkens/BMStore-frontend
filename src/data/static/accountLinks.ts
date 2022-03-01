import {
	ADDRESS,
	INVOICES,
	ORDERS,
	PENALTIES,
	USER,
	WISHLIST
} from 'constant/routes';

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
		icon: 'icon-bullhorn'
	},
	{
		text: 'Заказы',
		url: ORDERS,
		icon: 'icon-cart'
	},
	{
		text: 'Финансы',
		url: INVOICES,
		icon: 'icon-tag'
	},
	{
		text: 'Избранные',
		url: WISHLIST,
		icon: 'icon-papers'
	}
];
