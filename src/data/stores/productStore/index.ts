import {makeAutoObservable} from "mobx";

import { productAddToWishList, productNotAddToWishlist, productRemoveFromWishlist } from 'helper/responseStatus';
import { getUserId } from 'helper/stores/userHelper';

import { IProduct } from 'domain/interfaces/IProduct';
import { IWishProduct } from 'domain/interfaces/IWishProduct';
import { wishListApiService } from "data/API";

interface IProductStore{
    products : Array<IProduct>,
    productCount: number,
    wishList: Array<IWishProduct>
    product: IProduct,
    productCountPage: number,
    pageNumber: number,
    productsLoading: boolean
}

class ProductStore implements IProductStore{
    products = [] as Array<IProduct>;
    wishList = [] as Array<IWishProduct>;
    productCount = 0;

    product = {
        id: "",
        price : 0,
        title: "",
        description: "",
        slug: "",
        isActive: false,
        isDeleted: false,
        images : [],
        categoryId: "",
        categoryName: "",
        filters: [],
        productsSimilar: []
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

    async setWishList() {
        const response = await wishListApiService.getWishList(getUserId())
        this.wishList = response.data.data
    }

    async addToWishList(product: IProduct) {
        let isHas = false
        if(this.wishList.length !== 0)
            this.wishList.map(item => {
                if (item.productId === product.id)
                    isHas = true
            })
        if (isHas) {
            productNotAddToWishlist()
        } else {
            const response = await wishListApiService.addToWishList(product.id, getUserId())
            this.wishList = response.data.value.data
            productAddToWishList(response.status, product.title)
        }
    }

    async removeFromWishList(productId: string, title) {
        const response = await wishListApiService.removeWishList(productId, getUserId())
        this.wishList = response.data.value.data
        productRemoveFromWishlist(response.status, title)
    }

    setProductLoading(state : boolean){
        this.productsLoading = state;
    }

    setProducts(products : Array<IProduct>, count){
        this.products = products
        this.productCount = count
        this.productsLoading = true
    }

    get isProductsLoading(){
        return this.productsLoading
    }
}

export default new ProductStore();
