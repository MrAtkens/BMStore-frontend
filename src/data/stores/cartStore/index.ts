import {makeAutoObservable} from "mobx";
import { IProduct } from 'domain/interfaces/IProduct';
import {
	addItemToCartHelper,
	decreaseQtyCartItemHelper, getCartItemsFromStorage,
	increaseQtyCartItemHelper,
	removeCartItemHelper
} from 'helper/stores/cartHelper';

interface ICartStore{
	carts : Array<IProduct>
}

class CartStore implements ICartStore{
	carts = [] as Array<IProduct>;

	constructor() {
		makeAutoObservable(this)
	}

	get getCartsProduct(){
		return this.carts
	}

	increaseFromCart(product: IProduct){
		this.setCart(increaseQtyCartItemHelper(product))
	}

	decreaseFromCart(product: IProduct){
		this.setCart(decreaseQtyCartItemHelper(product))
	}

	addToCart(product: IProduct){
		this.setCart(addItemToCartHelper(product))
	}

	removeFromCart(productId: string){
		this.setCart(removeCartItemHelper(productId))
	}

	getFromStorage(){
		this.carts = getCartItemsFromStorage();
	}

	setCart(carts : Array<IProduct>){
		this.carts = carts;
	}
}


export default new CartStore();
