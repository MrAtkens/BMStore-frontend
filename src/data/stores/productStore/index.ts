import {makeAutoObservable} from "mobx";
import { Modal } from 'antd';

import { IProduct } from 'domain/interfaces/IProduct';
import { getRelatedItemsFromStorage } from 'helper/stores/productsHelper';
import { wishListApiService } from "data/API";
import { getUserId } from '../../../helper/stores/userHelper';

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
        this.wishList = await wishListApiService.getWishList(getUserId())
    }

    async addToWishList(product: IProduct) {
        let isHas = false
        this.wishList.map(item => {
            if (item.id === product.id)
                isHas = true
        })

        if (isHas) {
            const modal = Modal.success({
                centered: true,
                title: `Данный товар уже есть в списке избранных ${product.title}`,
            });
            modal.update;
        } else {
            this.wishList = await wishListApiService.addToWishList(product.id, getUserId())
            const modal = Modal.success({
                centered: true,
                title: 'Успешно!',
                content: `Вы добавили товар ${product.title} в избранное`,
            });
            modal.update;
        }
    }

    async removeFromWishList(product: IProduct) {
        const index = this.wishList.indexOf(product)
        let currentWishList = this.wishList
        currentWishList.splice(index, 1)
        this.wishList = await wishListApiService.removeWishList(product.id, getUserId())
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
