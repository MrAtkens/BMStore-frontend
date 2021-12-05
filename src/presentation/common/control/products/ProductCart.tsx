import React from 'react';
import Link from 'next/link';

import useProduct from 'presentation/hook/useProduct';
import { IProduct } from 'domain/interfaces/IProduct';
import { PRODUCT } from 'constant/routes';

interface IProductCart{
    product : IProduct
}

const ProductCart = ({product} : IProductCart) => {
    const { getImage, title } = useProduct();
    return (
        <div className="ps-product--cart">
            <div className="ps-product__thumbnail">
                <Link href={PRODUCT(product.id)}>
                    <a>{getImage(product)}</a>
                </Link>
            </div>
            <div className="ps-product__content">{title(product)}</div>
        </div>
    );
};

export default ProductCart;
