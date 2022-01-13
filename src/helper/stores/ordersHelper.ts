import { ORDERS_NOT_AUTH } from 'constant/storageNames';
import { IProduct } from 'domain/interfaces/IProduct';

export function getOrdersStorage() {
	const orders = localStorage.getItem(ORDERS_NOT_AUTH);
	if (orders) {
		return JSON.parse(orders);
	} else {
		return [];
	}
}

export function updateOrders(products : Array<IProduct>) {
	localStorage.setItem(ORDERS_NOT_AUTH, JSON.stringify(products));
}
