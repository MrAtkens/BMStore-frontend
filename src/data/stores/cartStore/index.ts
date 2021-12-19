import {makeAutoObservable} from "mobx";

import { cartApiService } from 'data/API';
import { ICartProduct } from 'domain/interfaces/ICartProduct';

interface ICartStore{
	cart : Array<ICartProduct>,
}

const userId = "3fa85f64-5717-4562-b3fc-2c963f66afa6"

class CartStore implements ICartStore{
	cart = [] as Array<ICartProduct>;

	constructor() {
		makeAutoObservable(this)
	}

	async getCartFromApi() {
		const response = await cartApiService.getCart(userId)
		if (response.data !== undefined)
			this.setCart(response.data.data)
	}

	async editProductCount(productId: string, productQuantity: number) {
		if(productQuantity <= 0){
			const response = await cartApiService.removeFromCart(productId, userId)
			if (response.data !== undefined)
				this.setCart(response.data.data)
		}
		else {
			const response = await cartApiService.addExistProductToCart(productId, userId, productQuantity)
			if (response.data !== undefined)
				this.setCart(response.data.data)
		}
	}

	async addToCart(productId: string, productQuantity: number){
		const response = await cartApiService.addToCart(productId, userId, productQuantity)
		if(response.data !== undefined)
			this.setCart(response.data.data)
	}

	async removeFromCart(productId: string) {
		const response = await cartApiService.removeFromCart(productId, userId)
		if (response.data !== undefined)
			this.setCart(response.data.data)
	}


	setCart(cart : Array<ICartProduct>){
		this.cart = cart;
	}
}


export default new CartStore();
