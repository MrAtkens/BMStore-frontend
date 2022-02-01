import {makeAutoObservable} from "mobx";

import { cartApiService } from 'data/API';
import { ICartProduct } from 'domain/interfaces/ICartProduct';
import { getUserId } from 'helper/stores/userHelper';
import { productAddToCart, productRemoveFromCart } from 'helper/responseStatus';

interface ICartStore{
	cart : Array<ICartProduct>,
	isMobileCartOpen: boolean
}

class CartStore implements ICartStore{
	cart = [] as Array<ICartProduct>;
	isMobileCartOpen = false

	constructor() {
		makeAutoObservable(this)
	}

	async getCartFromApi() {
		const response = await cartApiService.getCart(getUserId())
		if (response.data !== undefined)
			this.setCart(response.data.data)
	}

	async editProductCount(productId: string, productQuantity: number) {
		if(productQuantity <= 0){
			const response = await cartApiService.removeFromCart(productId, getUserId())
			if (response.data !== undefined)
				this.setCart(response.data.data)
		}
		else {
			const response = await cartApiService.addExistProductToCart(productId, getUserId(), productQuantity)
			if (response.data !== undefined)
				this.setCart(response.data.data)
		}
	}

	async addToCart(productId: string, productQuantity: number, title: string){
		const response = await cartApiService.addToCart(productId, getUserId(), productQuantity)
		if(response.data !== undefined) {
			this.setCart(response.data.data)
			productAddToCart(response.status, title)
		}
	}

	async removeFromCart(productId: string, title: string) {
		const response = await cartApiService.removeFromCart(productId, getUserId())
		if (response.data !== undefined) {
			this.setCart(response.data.data)
			productRemoveFromCart(response.status, title)
		}
	}


	setCart(cart : Array<ICartProduct>){
		this.cart = cart;
	}

	setIsMobileCartOpen(status: boolean){
		this.isMobileCartOpen = status
	}
}


export default new CartStore();
