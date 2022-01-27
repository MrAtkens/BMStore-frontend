import React from 'react';
import { observer } from 'mobx-react-lite';
import Image from 'next/image'
import Link from 'next/link'

import { CHECKOUT, PRODUCT, SHOP_PAGE } from 'constant/routes';
import cartStore from 'data/stores/cartStore'

import { calculateAmount } from 'helper/stores/cartHelper';

const PanelCartMobile = observer(() => {

    const handleRemoveCartItem = async (e: any, productId: string, title: string) => {
        e.preventDefault();
        await cartStore.removeFromCart(productId, title)
    }

    //view
    let cartItemsView, footerView;

    if (cartStore.cart && cartStore.cart.length > 0) {
        const amount = calculateAmount(cartStore.cart);
        const items = cartStore.cart.map((item) => (
            <div className="ps-product--cart-mobile" key={item.productId}>
                <div className="ps-product__thumbnail">
                    <Link passHref href={PRODUCT(item.productId)}>
                        <Image alt={item.title} src={item.imageUrl} width={100} height={100}/>
                    </Link>
                </div>
                <div className="ps-product__content">
                    <a
                        className="ps-product__remove"
                        onClick={(e) => handleRemoveCartItem(e, item.productId, item.title)}>
                        <i className='icon-cross'/>
                    </a>
                    <div className="display-1">
                        <Link href={PRODUCT(item.productId)}>
                            <a className="ps-product__title">{item.title}</a>
                        </Link>
                        <small>
                            {item.count} x {item.price} тг
                        </small>
                    </div>
                </div>
            </div>
        ));
        cartItemsView = <div className="ps-cart__items">{items}</div>;
        footerView = (
            <div className="ps-cart__footer">
                <h3>
                    Сумма:<strong>{amount} тг</strong>
                </h3>
                <figure>
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
