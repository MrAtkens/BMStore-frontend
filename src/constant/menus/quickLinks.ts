import {
	ABOUT_US,
	ADDRESS,
	CONTACTS,
	INVOICES,
	ORDERS,
	PENALTIES,
	SHOP_PAGE,
	USER
} from '../routes';

export const menuLinks = [
	{
		text: 'Магазин',
		url: SHOP_PAGE()
	},
	{
		text: 'Контакты',
		url: CONTACTS
	},
	{
		text: 'О нас',
		url: ABOUT_US
	}
];

export const accountLinks = [
	{
		text: 'Аккаунт',
		url: USER
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
	}
];
