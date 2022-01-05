import React from 'react';
import { observer } from 'mobx-react-lite';

import useProduct from 'presentation/hook/useProduct';
import cartStore from 'data/stores/cartStore';
import productStore from 'data/stores/productStore';
import { IProduct } from 'domain/interfaces/IProduct';

interface IModuleProductWideActions{
    product : IProduct
}

const ModuleProductWideActions = observer(({ product } : IModuleProductWideActions) => {
    const { price } = useProduct();

    const handleAddItemToCart = async (e: any) => {
        e.preventDefault();
        await cartStore.addToCart(product.id, 1, product.title)
    }

    const handleAddItemToWishlist = async (e: any) => {
        e.preventDefault();
        await productStore.addToWishList(product)
    }

    return (
        <div className="ps-product__shopping">
            {price(product)}
            <a
                className="ps-btn"
                href="#"
                onClick={(e) => handleAddItemToCart(e)}>
                Добавить в корзину
            </a>
            <ul className="ps-product__actions">
                <li>
                    <a href="#" onClick={(e) => handleAddItemToWishlist(e)}>
                        <i className='icon-heart'/> Избранное
                    </a>
                </li>
            </ul>
        </div>
    );
});

export default ModuleProductWideActions;
