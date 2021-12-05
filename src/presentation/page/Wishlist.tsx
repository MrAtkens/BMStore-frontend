import React  from 'react';
import { observer } from 'mobx-react-lite';

import ProductCart from 'presentation/common/control/products/ProductCart';
import cartStore from "data/stores/cartStore"
import productStore from "data/stores/productStore"

const Wishlist = observer(() => {

    function handleAddItemToCart(e, product) {
        e.preventDefault();
        cartStore.addToCart(product)
    }

    function handleRemoveWishlistItem(e, product) {
        e.preventDefault();
        productStore.removeFromWishList(product)
    }

    // views
    let wishlistItemsView;
    if (productStore.wishList && productStore.wishList.length > 0) {
        wishlistItemsView = (
            <div className="table-responsive">
                <table className="table ps-table--whishlist">
                    <thead>
                        <tr>
                            <th/>
                            <th>Название продукта</th>
                            <th>Категория</th>
                            <th>Цена</th>
                            <th/>
                        </tr>
                    </thead>
                    <tbody>
                        {productStore.wishList.map((product) => (
                            <tr key={product.id}>
                                <td>
                                    <a
                                        href="#"
                                        onClick={(e) =>
                                            handleRemoveWishlistItem(e, product)
                                        }>
                                        <i className='icon-cross'/>
                                    </a>
                                </td>
                                <td>
                                    <ProductCart product={product} />
                                </td>
                                <td>{product.category}</td>
                                <td className="price">{product.price} тг</td>
                                <td>
                                    <a
                                        className="ps-btn"
                                        onClick={(e) =>
                                            handleAddItemToCart(e, product)
                                        }>
                                        Добавить в корзину
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    } else {
        return(
            <div className="alert alert-danger" role="alert">
                Ваш список пуст
            </div>
        )
    }
    return (
        <div className="ps-section--shopping ps-whishlist">
            <div className="container">
                <div className="ps-section__header">
                    <h1>Избранное</h1>
                </div>
                <div className="ps-section__content">{wishlistItemsView}</div>
            </div>
        </div>
    );
});

export default Wishlist;
