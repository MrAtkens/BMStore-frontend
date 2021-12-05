import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Link from 'next/link';

import { calculateAmount } from "helper/stores/cartHelper";
import ProductOnCart from 'presentation/common/control/products/ProductOnCart';
import {CART, CHECKOUT} from 'constant/routes';

import cartStore from "data/stores/cartStore"

const MiniCart = observer(() => {

    function handleRemoveItem(e : any, productId : string) {
        e.preventDefault();
        cartStore.removeFromCart(productId);
    }

    useEffect(() => {
        cartStore.getFromStorage()
    }, []);

    let cartItemsView;
    if (cartStore.carts && cartStore.carts.length > 0) {
        const amount = calculateAmount(cartStore.carts);
        const productItems = cartStore.carts.map((item) => {
            return (
                <ProductOnCart product={item} key={item.id}>
                    <a
                        className="ps-product__remove"
                        onClick={(e) => handleRemoveItem(e, item.id)}>
                        <i className='icon-cross'/>
                    </a>
                </ProductOnCart>
            );
        });
        cartItemsView = (
            <div className="ps-cart__content">
                <div className="ps-cart__items">{productItems}</div>
                <div className="ps-cart__footer">
                    <h3>
                        Стоимость:
                        <strong>{amount ? amount : 0} тг</strong>
                    </h3>
                    <figure>
                        <Link href={CART}>
                            <a className="ps-btn">Посмотреть</a>
                        </Link>
                        <Link href={CHECKOUT}>
                            <a className="ps-btn">Купить</a>
                        </Link>
                    </figure>
                </div>
            </div>
        );
    } else {
        cartItemsView = (
            <div className="ps-cart__content">
                <div className="ps-cart__items">
                    <span>В корзине нет товаров</span>
                </div>
            </div>
        );
    }

    return (
        <div className="ps-cart--mini">
            <a className="header__extra" href="#">
                <i className='icon-bag2'/>
                <span>
                    <i>{cartStore.carts ? cartStore.carts.length : 0}</i>
                </span>
            </a>
            {cartItemsView}
        </div>
    );
})

export default MiniCart;
