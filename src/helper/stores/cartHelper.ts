import { IProduct } from 'domain/interfaces/IProduct';
import { CART } from 'constant/storageNames';

export function getCartItemsFromStorage() {
	const cartItems = localStorage.getItem(CART);
	if (cartItems) {
		return JSON.parse(cartItems);
	} else {
		return [];
	}
}

export function updateCartToStorage(products : Array<IProduct>) {
	localStorage.setItem(CART, JSON.stringify(products));
}

export function addItemToCartHelper(product: IProduct) {
	let cart;
	let cookieCart = getCartItemsFromStorage();
	if (cookieCart) {
		cart = cookieCart;
		const existItem = cart.items.find((item : IProduct) => item.id === product.id);
		if (existItem) {
			existItem.quantity += product.quantity;
		} else {
			/* if (!product.quantity) {
				product.quantity = 1;
			}*/
			cart.items.push(product);
		}
	} else {
		cart = {
			items: [] as Array<IProduct>
		};
		cart.items.push(product);
	}
	updateCartToStorage(cart);
	return cart;
}

export function increaseQtyCartItemHelper(product : IProduct) {
	let cart;
	let cookieCart = getCartItemsFromStorage();
	if (cookieCart) {
		cart = cookieCart;
		const selectedItem = cart.items.find((item : IProduct) => item.id === product.id);

		if (selectedItem) {
			selectedItem.quantity = selectedItem.quantity + 1;
		}
		updateCartToStorage(cart);
		return cart;
	}
}

export function decreaseQtyCartItemHelper(product : IProduct) {
	let cart;
	let cookieCart = getCartItemsFromStorage();
	if (cookieCart) {
		cart = cookieCart;
		const selectedItem = cart.items.find((item : IProduct) => item.id === product.id);

		if (selectedItem) {
			selectedItem.quantity = selectedItem.quantity - 1;
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
		const index = cart.items.findIndex((item : IProduct) => item.id === productId);
		cart.items.splice(index, 1);
		updateCartToStorage(cart);
		return cart;
	}
}

export function calculateAmount(obj : Array<IProduct>) {
	return Object.values(obj)
		.reduce((acc, { quantity, price }) => acc + quantity * price, 0)
		.toFixed(2);
}

export function calculateCartQuantity(obj : IProduct) {
	return Object.values(obj).reduce((acc, { quantity }) => acc + quantity, 0);
}

export function calculateArrayQuantity(obj : IProduct) {
	return Object.values(obj).reduce((acc) => acc + 1, 0);
}
