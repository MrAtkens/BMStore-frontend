import React  from 'react';
import { IProduct } from 'domain/interfaces/IProduct';
import { observer } from 'mobx-react-lite';

import cartStore from "data/stores/cartStore"
import productStore from "data/stores/productStore"

interface IModuleProductActions{
    product : IProduct
}

const ModuleProductActions = observer(({ product } : IModuleProductActions) => {

    const handleAddItemToCart = async (e: any) => {
        e.preventDefault();
        await cartStore.addToCart(product.id, 1, product.title)
    }

    const handleAddItemToWishlist = async (e: any) => {
        e.preventDefault();
        await productStore.addToWishList(product)
    }

    return (
        <ul className="ps-product__actions">
            <li>
                <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="В корзину"
                    onClick={(e) => handleAddItemToCart(e)}>
                    <i className='icon-bag2'/>
                </a>
            </li>
            <li>
                <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="В избранные"
                    onClick={(e) => handleAddItemToWishlist(e)}>
                    <i className='icon-heart'/>
                </a>
            </li>

        </ul>
    );
})

export default ModuleProductActions;
