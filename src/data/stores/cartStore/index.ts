import {makeAutoObservable} from "mobx";
import {
	addItemToCartHelper,
	decreaseQtyCartItemHelper, getCartItemsFromStorage,
	increaseQtyCartItemHelper,
	removeCartItemHelper
} from 'helper/stores/cartHelper';
import { ICartProduct } from 'domain/interfaces/ICartProduct';
import { IProduct } from '../../../domain/interfaces/IProduct';

interface ICartStore{
	carts : Array<ICartProduct>
}

class CartStore implements ICartStore{
	carts = [] as Array<ICartProduct>;

	constructor() {
		makeAutoObservable(this)
	}

	get getCartsProduct(){
		return this.carts
	}

	increaseFromCart(product: ICartProduct){
		this.setCart(increaseQtyCartItemHelper(product))
	}

	decreaseFromCart(product: ICartProduct){
		this.setCart(decreaseQtyCartItemHelper(product))
	}

	addToCart(product: IProduct, productQuantity: number){
		this.setCart(addItemToCartHelper({product, productQuantity}))
	}

	removeFromCart(productId: string){
		this.setCart(removeCartItemHelper(productId))
	}

	getFromStorage(){
		this.carts = getCartItemsFromStorage();
	}

	setCart(carts : Array<ICartProduct>){
		this.carts = carts;
	}
}


export default new CartStore();
