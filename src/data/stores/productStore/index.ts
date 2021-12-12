import {makeAutoObservable} from "mobx";

import { productsApiService } from "data/API"
import { IProduct } from 'domain/interfaces/IProduct';
import { getRelatedItemsFromStorage } from 'helper/stores/productsHelper';
import { getWishListItemsFromStorage, updateWishListToStorage } from 'helper/stores/wishListHelper';

interface IProductStore{
    products : Array<IProduct>,
    relatedProducts: Array<IProduct>,
    product: IProduct,
    productCountPage: number,
    pageNumber: number,
    activeCategory: string,
    activeFilter: string,
    priceMin: number,
    priceMax: number
}

class ProductStore implements IProductStore{
    products = [] as Array<IProduct>;
    relatedProducts = [] as Array<IProduct>;
    wishList = [] as Array<IProduct>;

    product = {
        id: "",
        price : 0,
        info: {
            title: "",
            description: ""
        },
        category: "",
        slug: "",
        images : [],
        filters : [],
    };

    productCountPage = 8;
    pageNumber = 0;
    activeCategory = "";
    activeFilter = "";
    priceMin = 0;
    priceMax = 10000;

    constructor() {
        makeAutoObservable(this)
    }

    async getProducts(){
        const response = await productsApiService.getProducts();
        this.products = response.data;
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

    setProducts(products : Array<IProduct>){
        this.products = products;
    }
}

export default new ProductStore();
