import React  from 'react';
import { observer } from 'mobx-react-lite';

import cartStore from "data/stores/cartStore"
import { IProduct } from 'domain/interfaces/IProduct';

interface IModuleDetailActionsMobile{
    product: IProduct
}

const ModuleDetailActionsMobile = observer(({ product } : IModuleDetailActionsMobile) => {
    const handleAddItemToCart = (e) => {
        e.preventDefault();
        cartStore.addToCart(product.id, 1)
    };

    return (
        <div className="ps-product__actions-mobile">
            <a
                className="ps-btn ps-btn--black"
                href="#"
                onClick={(e) => handleAddItemToCart(e)}>
                Добавить в корзину
            </a>
            <a
                className="ps-btn"
                href="#"
                onClick={(e) => handleAddItemToCart(e)}>
                Купить
            </a>
        </div>
    );
});

export default ModuleDetailActionsMobile;
