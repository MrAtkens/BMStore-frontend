import { WISH_LIST } from 'constant/storageNames';
import { IProduct } from 'domain/interfaces/IProduct';

export function getWishListItemsFromStorage() {
	const wishList = localStorage.getItem(WISH_LIST);
	if (wishList) {
		return JSON.parse(wishList);
	} else {
		return [];
	}
}

export function updateWishListToStorage(products : Array<IProduct>) {
	localStorage.setItem(WISH_LIST, JSON.stringify(products));
}
