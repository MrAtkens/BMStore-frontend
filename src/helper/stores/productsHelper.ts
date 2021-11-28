import { RELATED_PRODUCTS } from 'constant/storageNames';
import { IProduct } from 'domain/interfaces/IProduct';

export function getRelatedItemsFromStorage() {
	const related = localStorage.getItem(RELATED_PRODUCTS);
	if (related) {
		return JSON.parse(related);
	} else {
		return [];
	}
}

export function updateRelatedToStorage(products : Array<IProduct>) {
	localStorage.setItem(RELATED_PRODUCTS, JSON.stringify(products));
}
