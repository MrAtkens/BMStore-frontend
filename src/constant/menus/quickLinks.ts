import {
	ADDRESS,
	CONTACTS,
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
	}
];

export const accountLinks = [
	{
		text: 'Аккаунт',
		url: USER
	},
	{
		text: 'Aдреса',
		url: ADDRESS
	},
	{
		text: 'Штрафы',
		url: PENALTIES
	},
	{
		text: 'Заказы',
		url: ORDERS
	}
];
