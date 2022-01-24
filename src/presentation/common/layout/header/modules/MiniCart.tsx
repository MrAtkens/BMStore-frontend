import React from 'react';
import { observer } from 'mobx-react-lite';
import Link from 'next/link';

import { calculateAmount } from "helper/stores/cartHelper";
import ProductOnCart from 'presentation/common/control/products/ProductOnCart';
import {CART, CHECKOUT} from 'constant/routes';

import cartStore from "data/stores/cartStore"

const MiniCart = observer(() => {

    const handleRemoveItem = async (e: any, productId: string, title: string) => {
        e.preventDefault();
        await cartStore.removeFromCart(productId, title);
    }

    let cartItemsView;
    if (cartStore.cart && cartStore.cart.length > 0) {
        const amount = calculateAmount(cartStore.cart);
        const productItems = cartStore.cart.map((item) => {
            return (
                <ProductOnCart product={item} key={item.productId} quantity={item.count}>
                    <a
                        className="ps-product__remove"
                        onClick={(e) => handleRemoveItem(e, item.productId, item.title)}>
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
            <Link href={CART}>
                <a className="header__extra" href="#">
                    <i className='icon-bag2'/>
                    <span>
                        {cartStore.cart ? cartStore.cart.length : 0}
                    </span>
                </a>
            </Link>
            {cartItemsView}
        </div>
    );
})

export default MiniCart;
