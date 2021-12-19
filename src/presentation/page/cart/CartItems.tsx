import React from 'react';
import { Result } from 'antd';
import { observer } from 'mobx-react-lite';

import ProductCart from 'presentation/common/control/products/ProductCart';
import { ICartProduct } from 'domain/interfaces/ICartProduct';
import cartStore from 'data/stores/cartStore'

const CartItems = observer(() => {

    const handleRemoveItem = async (e, item : ICartProduct) => {
        e.preventDefault();
        await cartStore.removeFromCart(item.productId)
    }

    const handleIncreaseItemQty = async (e, item : ICartProduct) =>  {
        e.preventDefault();
        let count = item.count
        count += 1
        await cartStore.editProductCount(item.productId, count)
    }

    const handleDecreaseItemQty = async(e, item : ICartProduct) => {
        e.preventDefault();
        let count = item.count
        count -= 1
        await cartStore.editProductCount(item.productId, count)
    }

    // View
    let cartItemsViews;
    if (cartStore.cart && cartStore.cart.length > 0) {
        const items = cartStore.cart.map((item) => (
            <tr key={item.productId}>
                <td>
                    <ProductCart product={item} />
                </td>
                <td data-label="price" className="price">
                    {item.price} тг
                </td>
                <td data-label="quantity">
                    <div className="form-group--number">
                        <button
                            className="up"
                            onClick={(e) => handleIncreaseItemQty(e, item)}>
                            +
                        </button>
                        <button
                            className="down"
                            onClick={(e) => handleDecreaseItemQty(e, item)}>
                            -
                        </button>
                        <input
                            className="form-control"
                            type="text"
                            placeholder={item.count.toString()}
                            disabled={true}
                        />
                    </div>
                </td>
                <td data-label="total">
                    <strong>{(item.price * item.count).toFixed(2)} тг</strong>
                </td>
                <td>
                    <a href="#" onClick={(e) => handleRemoveItem(e, item)}>
                        <i className='icon-cross'/>
                    </a>
                </td>
            </tr>
        ));

        cartItemsViews = (
            <>
                <table className="table ps-table--shopping-cart ps-table--responsive">
                    <thead>
                        <tr>
                            <th>Продукт</th>
                            <th>Цена</th>
                            <th>Количество</th>
                            <th>Сумма</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>{items}</tbody>
                </table>
            </>
        );
    } else {
        cartItemsViews = (
            <Result status="warning" title="Ваша корзина пуста" />
        );
    }
    return <>{cartItemsViews}</>;
});

export default CartItems;
