//Common --- without authentication
export const HOME = '/';
export const SHOP = '/shop';
export const PRODUCT = (id: string) => `/product/${id}`;
export const CATEGORY = (id: string) => `/category/${id}`;
export const PAYMENT = '/payment'
export const CART = '/cart'
export const CHECKOUT = '/checkout'
export const WISHLIST = '/wishlist'
export const RECENTLY_VIEWED_PRODUCTS = '/recently'
export const CONTACTS = '/contacts'
export const ABOUT_US = '/about'


//User --- with authentication
export const USER = '/account'
export const LOGIN = '/account/login';
export const REGISTER = '/account/registration';
export const PAYMENTS = '/account/payments'
export const ORDERS = '/account/orders'

