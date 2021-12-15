import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { IProduct } from 'domain/interfaces/IProduct';
import cartStore from "data/stores/cartStore"
import productStore from "data/stores/productStore"

interface IModuleDetailShoppingActions{
    product: IProduct,
    extended?: boolean
}

const ModuleDetailShoppingActions = observer(({
    product,
    extended = false
} : IModuleDetailShoppingActions) => {
    const [quantity, setQuantity] = useState(1);
    function handleAddItemToCart(e) {
        e.preventDefault();
        cartStore.addToCart(product, 1)
    }

    function handleBuyNow(e) {
        e.preventDefault();
        cartStore.addToCart(product, 1)
        // setTimeout(function () {
        //     Router.push('/account/checkout');
        // }, 1000);
    }

    const handleAddItemToWishlist = (e) => {
        e.preventDefault();
        productStore.addToWishList(product)
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
    if (!extended) {
        return (
            <div className="ps-product__shopping">
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
            </div>
        );
    } else {
        return (
            <div className="ps-product__shopping extend">
                <div className="ps-product__btn-group">
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
                    <div className="ps-product__actions">
                        <a href="#" onClick={(e) => handleAddItemToWishlist(e)}>
                            <i className='icon-heart'/>
                        </a>
                    </div>
                </div>
                <a className="ps-btn" href="#" onClick={(e) => handleBuyNow(e)}>
                    Купить
                </a>
            </div>
        );
    }
})

export default ModuleDetailShoppingActions;
