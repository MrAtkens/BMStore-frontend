//Common --- without authentication
export const HOME = '/';
export const WISHLIST = '/wishlist';
export const CONTACTS = '/contacts';
export const ABOUT_US = '/about';
export const PRODUCT = (id: string) => `/product/${id}`;

//Products catalog
export function SHOP_PAGE(name?: string, value?: string): string {
	let shopUrl = '/shop';

	if (name !== undefined && value !== undefined)
		shopUrl += `?${name}=${value}`;
	return shopUrl;
}

//User --- with authentication
export const USER = '/account/user';
export const CART = '/account/cart';
export const RESET = '/account/reset-password';
export const ORDERS = '/account/orders';
export const ADDRESS = '/account/address';
export const INVOICES = '/account/invoices';
export const PENALTIES = '/account/penalties';
export const CHECKOUT = '/account/checkout';
export const LOGIN = '/account/login';
export const REGISTER = '/account/registration';
