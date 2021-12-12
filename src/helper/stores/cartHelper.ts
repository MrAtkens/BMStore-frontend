import { ICartProduct } from 'domain/interfaces/ICartProduct';

import { CART } from 'constant/storageNames';

export function getCartItemsFromStorage() {
	const cartItems = localStorage.getItem(CART);
	if (cartItems) {
		return JSON.parse(cartItems);
	} else {
		return [];
	}
}

export function updateCartToStorage(products : Array<ICartProduct>) {
	localStorage.setItem(CART, JSON.stringify(products));
}

export function addItemToCartHelper(cartProduct: ICartProduct) {
	let cart;
	let cookieCart = getCartItemsFromStorage();
	if (cookieCart) {
		cart = cookieCart;
		const existItem = cart.items.find((item : ICartProduct) => item.product.id === cartProduct.product.id);
		if (existItem) {
			existItem.productQuantity += cartProduct.productQuantity;
		} else {
			if (!cartProduct.productQuantity) {
				cartProduct.productQuantity = 1;
			}
			cart.items.push(cartProduct);
		}
	} else {
		cart = {
			items: [] as Array<ICartProduct>
		};
		cart.items.push(cartProduct);
	}
	updateCartToStorage(cart);
	return cart;
}

export function increaseQtyCartItemHelper(cartProduct : ICartProduct) {
	let cart;
	let cookieCart = getCartItemsFromStorage();
	if (cookieCart) {
		cart = cookieCart;
		const selectedItem = cart.items.find((item : ICartProduct) => item.product.id === cartProduct.product.id);

		if (selectedItem) {
			selectedItem.productQuantity = selectedItem.productQuantity + 1;
		}
		updateCartToStorage(cart);
		return cart;
	}
}

export function decreaseQtyCartItemHelper(cartProduct : ICartProduct) {
	let cart;
	let cookieCart = getCartItemsFromStorage();
	if (cookieCart) {
		cart = cookieCart;
		const selectedItem = cart.items.find((item : ICartProduct) => item.product.id === cartProduct.product.id);

		if (selectedItem) {
			selectedItem.productQuantity = selectedItem.productQuantity - 1;
		}
		updateCartToStorage(cart);
		return cart;
	}
}

export function removeCartItemHelper(productId : string) {
	let cart;
	let cookieCart = getCartItemsFromStorage();
	if (cookieCart) {
		cart = cookieCart;
		const index = cart.items.findIndex((item : ICartProduct) => item.product.id === productId);
		cart.items.splice(index, 1);
		updateCartToStorage(cart);
		return cart;
	}
}

export function calculateAmount(obj : Array<ICartProduct>) {
	return Object.values(obj)
		.reduce((acc, { productQuantity, product }) => acc + productQuantity * product.price, 0)
		.toFixed(2);
}

export function calculateCartQuantity(obj : ICartProduct) {
	return Object.values(obj).reduce((acc, { productQuantity }) => acc + productQuantity, 0);
}

export function calculateArrayQuantity(obj : ICartProduct) {
	return Object.values(obj).reduce((acc) => acc + 1, 0);
}
