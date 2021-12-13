import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Image from 'next/image'
import Link from 'next/link'

import { CART, CHECKOUT, PRODUCT, SHOP_PAGE } from 'constant/routes';
import { IProduct } from 'domain/interfaces/IProduct';
import cartStore from 'data/stores/cartStore'
import { calculateAmount } from 'helper/stores/cartHelper';

const PanelCartMobile = observer(() => {

    function handleRemoveCartItem(e : any, product : IProduct) {
        e.preventDefault();
        cartStore.removeFromCart(product.id)
    }

    useEffect(() => {
        cartStore.getFromStorage()
    }, []);
    //view
    let cartItemsView, footerView;

    if (cartStore.carts && cartStore.carts.length > 0) {
        const amount = calculateAmount(cartStore.carts);
        const items = cartStore.carts.map((item) => (
            <div className="ps-product--cart-mobile" key={item.product.id}>
                <div className="ps-product__thumbnail">
                    <Link href={PRODUCT(item.product.id)}>
                        <Image src={item.product.images.map((item) => {
                            if(item.isMain)
                                return item.url
                            return "/static/img/not-found.jpg"
                        })} width={100} height={100}/>
                    </Link>
                </div>
                <div className="ps-product__content">
                    <a
                        className="ps-product__remove"
                        onClick={(e) => handleRemoveCartItem(e, item.product)}>
                        <i className='icon-cross'/>
                    </a>
                    {item.product.title}
                    <Link href={PRODUCT(item.product.id)}>
                        <a className="ps-product__title">{item.product.title}</a>
                    </Link>
                    <small>
                        {item.productQuantity} x ${item.product.price}
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
