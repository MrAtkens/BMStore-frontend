import React  from 'react';
import { IProduct } from 'domain/interfaces/IProduct';
import { observer } from 'mobx-react-lite';

import cartStore from "data/stores/cartStore"
import productStore from "data/stores/productStore"

interface IModuleProductActions{
    product : IProduct
}

const ModuleProductActions = observer(({ product } : IModuleProductActions) => {

    function handleAddItemToCart(e : any) {
        e.preventDefault();
        cartStore.addToCart(product, 1)
    }

    function handleAddItemToWishlist(e : any) {
        e.preventDefault();
        productStore.addToWishList(product)
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
