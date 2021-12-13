import {makeAutoObservable} from "mobx";
import { IProduct } from 'domain/interfaces/IProduct';
import { getRelatedItemsFromStorage } from 'helper/stores/productsHelper';
import { getWishListItemsFromStorage, updateWishListToStorage } from 'helper/stores/wishListHelper';

interface IProductStore{
    products : Array<IProduct>,
    productCount: number,
    relatedProducts: Array<IProduct>,
    product: IProduct,
    productCountPage: number,
    pageNumber: number,
    productsLoading: boolean
}

class ProductStore implements IProductStore{
    products = [] as Array<IProduct>;
    productCount = 0;
    relatedProducts = [] as Array<IProduct>;
    wishList = [] as Array<IProduct>;

    product = {
        id: "",
        price : 0,
        title: "",
        description: "",
        slug: "",
        images : [],
    };

    productCountPage = 8;
    pageNumber = 0;

    productsLoading = false

    constructor() {
        makeAutoObservable(this)
    }

    // async getProductById(){
    //     const response = await productsApiService.getProductById();
    //     this.product = response.data;
    //     if(this.relatedProducts.length === 10){
    //         this.relatedProducts.shift()
    //     }
    //     this.relatedProducts.push(this.product)
    //     updateRelatedToStorage(this.relatedProducts)
    // }

    setRelatedProducts(){
       this.relatedProducts = getRelatedItemsFromStorage()
    }

    setWishList(){
        this.wishList = getWishListItemsFromStorage()
    }

    addToWishList(product : IProduct){
        this.wishList.push(product)
        updateWishListToStorage(this.wishList)
    }

    removeFromWishList(product : IProduct){
        const index = this.wishList.indexOf(product)
        this.wishList = this.wishList.slice(index, index)
        updateWishListToStorage(this.wishList)
    }

    setProductLoading(state : boolean){
        this.productsLoading = state;
    }

    setProducts(products : Array<IProduct>, count){
        this.products = products
        this.productCount = count
        this.productsLoading = true
    }
}

export default new ProductStore();
