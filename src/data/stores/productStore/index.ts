import {makeAutoObservable} from "mobx";
import { Modal } from 'antd';

import { IProduct } from 'domain/interfaces/IProduct';
import { IWishProduct } from 'domain/interfaces/IWishProduct';
import { getRelatedItemsFromStorage } from 'helper/stores/productsHelper';
import { getUserId } from 'helper/stores/userHelper';
import { wishListApiService } from "data/API";

interface IProductStore{
    products : Array<IProduct>,
    productCount: number,
    relatedProducts: Array<IProduct>,
    wishList: Array<IWishProduct>
    product: IProduct,
    productCountPage: number,
    pageNumber: number,
    productsLoading: boolean
}

class ProductStore implements IProductStore{
    products = [] as Array<IProduct>;
    productCount = 0;
    relatedProducts = [] as Array<IProduct>;
    wishList = [] as Array<IWishProduct>;

    product = {
        id: "",
        price : 0,
        title: "",
        description: "",
        slug: "",
        images : [],
        categoryId: "",
        categoryName: "",
        filters: []
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

    async setWishList() {
        const response = await wishListApiService.getWishList(getUserId())
        console.log(response)
        this.wishList = response.data.data
    }

    async addToWishList(product: IProduct) {
        let isHas = false
        console.log(product)
        console.log(this.wishList.length)
        if(this.wishList.length !== 0)
            this.wishList.map(item => {
                if (item.productId === product.id)
                    isHas = true
            })

        if (isHas) {
            const modal = Modal.success({
                centered: true,
                title: `Данный товар уже есть в списке избранных ${product.title}`,
            });
            modal.update;
        } else {
            const response = await wishListApiService.addToWishList(product.id, getUserId())
            console.log(response)
            this.wishList = response.data.value.data
            const modal = Modal.success({
                centered: true,
                title: 'Успешно!',
                content: `Вы добавили товар ${product.title} в избранное`,
            });
            modal.update;
        }
    }

    async removeFromWishList(productId: string) {
        const response = await wishListApiService.removeWishList(productId, getUserId())
        console.log(response)
        this.wishList = response.data.value.data
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
