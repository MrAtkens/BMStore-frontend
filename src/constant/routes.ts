//Common --- without authentication
import { Filter } from 'domain/interfaces/IFilter';

export const HOME = '/';
export const PRODUCT = (id: string) => `/product/${id}`;
export const PAYMENT = '/payment'
export const CART = '/cart'
export const CHECKOUT = '/checkout'
export const WISHLIST = '/wishlist'
export const RECENTLY_VIEWED_PRODUCTS = '/recently'
export const CONTACTS = '/contacts'
export const ABOUT_US = '/about'

//Products catalog
export function SHOP_PAGE(page?: number, searchText?: string, category?: string, filter?: Array<Filter>, price_min?: number, price_max?: number) : string {
	let shopUrl = '/shop'

	if(page !== undefined){
		shopUrl += `?page=${page}`
	}
	if(searchText !== undefined){
		shopUrl += `?searchText=${searchText}`
	}
	if(category !== undefined){
		shopUrl += `?category=${category}`
	}
	if(filter !== undefined){
		filter.map(filter => {
			shopUrl += `?${filter.slug}=${filter.name}`
		})
	}
	if(price_min !== undefined || price_max !== undefined){
		shopUrl += `?price_min=${price_min}` + `?price_max=${price_max}`
	}
	return shopUrl
}


//User --- with authentication
export const USER = '/account'
export const LOGIN = '/account/login';
export const REGISTER = '/account/registration';
export const PAYMENTS = '/account/payments'
export const ORDERS = '/account/orders'

