import {makeAutoObservable} from "mobx";

import { cartApiService } from 'data/API';
import { ICartProduct } from 'domain/interfaces/ICartProduct';
import { getUserId } from 'helper/stores/userHelper';

interface ICartStore{
	cart : Array<ICartProduct>,
}

class CartStore implements ICartStore{
	cart = [] as Array<ICartProduct>;

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

	async addToCart(productId: string, productQuantity: number){
		const response = await cartApiService.addToCart(productId, getUserId(), productQuantity)
		if(response.data !== undefined)
			this.setCart(response.data.data)
	}

	async removeFromCart(productId: string) {
		const response = await cartApiService.removeFromCart(productId, getUserId())
		if (response.data !== undefined)
			this.setCart(response.data.data)
	}


	setCart(cart : Array<ICartProduct>){
		this.cart = cart;
	}
}


export default new CartStore();
