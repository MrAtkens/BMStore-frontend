import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Image from 'next/image'
import Link from 'next/link'

import { CART, CHECKOUT, PRODUCT, SHOP_PAGE } from 'constant/routes';
import cartStore from 'data/stores/cartStore'

import { calculateAmount } from 'helper/stores/cartHelper';

const PanelCartMobile = observer(() => {

    function handleRemoveCartItem(e : any, productId : string) {
        e.preventDefault();
        cartStore.removeFromCart(productId)
    }

    useEffect(() => {
        cartStore.getCartFromApi()
    }, []);
    //view
    let cartItemsView, footerView;

    if (cartStore.cart && cartStore.cart.length > 0) {
        const amount = calculateAmount(cartStore.cart);
        const items = cartStore.cart.map((item) => (
            <div className="ps-product--cart-mobile" key={item.productId}>
                <div className="ps-product__thumbnail">
                    <Link href={PRODUCT(item.productId)}>
                        <Image alt={item.title} src={item.imageUrl} width={100} height={100}/>
                    </Link>
                </div>
                <div className="ps-product__content">
                    <a
                        className="ps-product__remove"
                        onClick={(e) => handleRemoveCartItem(e, item.productId)}>
                        <i className='icon-cross'/>
                    </a>
                    {item.title}
                    <Link href={PRODUCT(item.productId)}>
                        <a className="ps-product__title">{item.title}</a>
                    </Link>
                    <small>
                        {item.count} x ${item.price}
                    </small>
                </div>
            </div>
        ));
        cartItemsView = <div className="ps-cart__items">{items}</div>;
        footerView = (
            <div className="ps-cart__footer">
                <h3>
                    Сумма:<strong>${amount}</strong>
                </h3>
                <figure>
                    <Link href={CART}>
                        <a className="ps-btn">Просмотреть корзину</a>
                    </Link>
                    <Link href={CHECKOUT}>
                        <a className="ps-btn">Купить</a>
                    </Link>
                </figure>
            </div>
        );
    } else {
        cartItemsView = <p>Корзина пуста</p>;
        footerView = (
            <div className="ps-cart__footer">
                <Link href={SHOP_PAGE()}>
                    <a className="ps-btn ps-btn--fullwidth">Купить сейчас</a>
                </Link>
            </div>
        );
    }
    return (
        <div className="ps-cart--mobile">
            <div className="ps-cart__content">
                {cartItemsView}
                {footerView}
            </div>
        </div>
    );
})

export default PanelCartMobile;
