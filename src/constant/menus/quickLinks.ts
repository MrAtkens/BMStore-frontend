import { CONTACTS, ORDERS, SHOP_PAGE, USER } from '../routes';

export const menuLinks = [
	{
		text: 'Магазин',
		url: SHOP_PAGE(),
	},
	{
		text: 'Контакты',
		url: CONTACTS,
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