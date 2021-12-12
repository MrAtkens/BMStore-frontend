import React from 'react';
import Link from 'next/link';
import useProduct from 'presentation/hook/useProduct';
import { PRODUCT } from 'constant/routes';
import { IProduct } from 'domain/interfaces/IProduct';

interface IProductOnCart{
    product: IProduct,
    children: any,
    quantity: number
}

const ProductOnCart = ({ product, children, quantity } : IProductOnCart) => {
    const { getImage, title } = useProduct();

    return (
        <div className="ps-product--cart-mobile">
            <div className="ps-product__thumbnail">
                <Link href={PRODUCT(product.id)}>
                    <a>{getImage(product)}</a>
                </Link>
            </div>
            <div className="ps-product__content">
                {title(product)}
                <p>
                    <small>
                        ${product.price} x {quantity}
                    </small>
                </p>{' '}
                {children}
            </div>
        </div>
    );
};

export default ProductOnCart;
