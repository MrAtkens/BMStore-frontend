//Common --- without authentication
export const HOME = '/';
export const PRODUCT = (id: string) => `/product/${id}`;
export const WISHLIST = '/wishlist'
export const CONTACTS = '/contacts'
export const ABOUT_US = '/about'
export const ORDERS = '/orders'

//Products catalog
export function SHOP_PAGE(name?: string, value?: string) : string {
	let shopUrl = '/shop'

	if(name !== undefined && value !== undefined)
		shopUrl += `?${name}=${value}`
	return shopUrl
}


//User --- with authentication
export const USER = '/account/user'
export const CART = '/account/cart'
export const LOGIN = '/account/login';
export const CHECKOUT = '/account/checkout'
export const REGISTER = '/account/registration';

