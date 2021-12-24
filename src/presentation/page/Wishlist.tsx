import React  from 'react';
import Link from 'next/link';
import { observer } from 'mobx-react-lite';

import cartStore from "data/stores/cartStore"
import productStore from "data/stores/productStore"

import ProductCartWishList from 'presentation/common/control/products/ProductWishList';
import { SHOP_PAGE } from 'constant/routes';

const Wishlist = observer(() => {

    async function handleAddItemToCart(e, productId :string) {
		e.preventDefault();
		await cartStore.addToCart(productId, 1)
	}

    async function handleRemoveWishlistItem(e, productId :string) {
		e.preventDefault();
		await productStore.removeFromWishList(productId)
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
                            <tr key={product.productId}>
                                <td>
                                    <a
                                        href="#"
                                        onClick={(e) =>
                                            handleRemoveWishlistItem(e, product.productId)
                                        }>
                                        <i className='icon-cross'/>
                                    </a>
                                </td>
                                <td>
                                    <ProductCartWishList product={product} />
                                </td>
                                <td className="wish-list-title">
                                    <Link href={SHOP_PAGE("category", product.categoryId)}>
                                        {product.categoryName}
                                    </Link>
                                </td>
                                <td className="price">{product.price} тг</td>
                                <td>
                                    <a
                                        className="ps-btn"
                                        onClick={(e) =>
                                            handleAddItemToCart(e, product.productId)
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
        wishlistItemsView = (
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
