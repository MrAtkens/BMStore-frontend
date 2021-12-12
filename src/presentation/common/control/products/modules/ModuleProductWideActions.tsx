import React from 'react';
import { Modal } from 'antd';
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

    function handleAddItemToCart(e : any) {
        e.preventDefault();
        cartStore.addToCart(product, 1)
    }

    function handleAddItemToWishlist(e : any) {
        e.preventDefault();
        productStore.addToWishList(product);
        const modal = Modal.success({
            centered: true,
            title: 'Успешно!',
            content: `Вы добавили товар ${product.info.title} в избранное`,
        });
        modal.update;
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
