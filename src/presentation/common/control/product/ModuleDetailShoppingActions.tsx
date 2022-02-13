import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';

import { IProduct } from 'domain/interfaces/IProduct';
import cartStore from "data/stores/cartStore"
import productStore from "data/stores/productStore"
import { CHECKOUT } from 'constant/routes';

interface IModuleDetailShoppingActions{
    product: IProduct,
    extended?: boolean
}

const ModuleDetailShoppingActions = observer(({
    product,
    extended = false
} : IModuleDetailShoppingActions) => {
    const [quantity, setQuantity] = useState(1);
    const Router = useRouter()

    async function handleAddItemToCart(e) {
        e.preventDefault();
        await cartStore.addToCart(product.id, quantity, product.title)
    }

    async function handleBuyNow(e) {
        e.preventDefault();
        await cartStore.addToCart(product.id, quantity, product.title).then(() => {
            Router.push(CHECKOUT);
        })
    }

    const handleAddItemToWishlist = async (e) => {
        e.preventDefault();
        await productStore.addToWishList(product)
    };

    function handleIncreaseItemQty(e) {
        e.preventDefault();
        setQuantity(quantity + 1);
    }

    function handleDecreaseItemQty(e) {
        e.preventDefault();
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    let actionsView
    if(product.isDeleted)
        actionsView = <h3 className="ps-product__deleted">Продукт удален</h3>
    else
        if(product.isActive)
            actionsView = <>
                <figure>
                    <figcaption>Количество</figcaption>
                    <div className="form-group--number">
                        <button
                            className="up"
                            onClick={(e) => handleIncreaseItemQty(e)}>
                            <i className='fa fa-plus'/>
                        </button>
                        <button
                            className="down"
                            onClick={(e) => handleDecreaseItemQty(e)}>
                            <i className='fa fa-minus'/>
                        </button>
                        <input
                            className="form-control"
                            type="text"
                            placeholder={quantity.toString()}
                            disabled
                        />
                    </div>
                </figure>
                <a
                    className="ps-btn ps-btn--black"
                    href="#"
                    onClick={(e) => handleAddItemToCart(e)}>
                    Добавить в корзину
                </a>
                <a className="ps-btn" href="#" onClick={(e) => handleBuyNow(e)}>
                    Купить
                </a>
                <div className="ps-product__actions">
                    <a href="#" onClick={(e) => handleAddItemToWishlist(e)}>
                        <i className='icon-heart'/>
                    </a>
                </div>
            </>
        else
            actionsView = <h3 className="ps-product__deleted">Нет в наличии</h3>


    return (
        <div className="ps-product__shopping">
            {actionsView}
        </div>
    );
})

export default ModuleDetailShoppingActions;
