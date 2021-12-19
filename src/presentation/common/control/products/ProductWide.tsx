import React from 'react';
import Link from 'next/link';
import useProduct from 'presentation/hook/useProduct';
import ModuleProductWideActions from './modules/ModuleProductWideActions';

import { IProduct } from 'domain/interfaces/IProduct';
import { PRODUCT } from 'constant/routes';

interface IProductWide{
    product : IProduct
}


const ProductWide = ({product} : IProductWide) => {
    const { getImage, title } = useProduct();
    return (
        <div className="ps-product ps-product--wide">
            <div className="ps-product__thumbnail">
                <Link href={PRODUCT(product.id)}>
                    <a>{getImage(product)}</a>
                </Link>
            </div>
            <div className="ps-product__container">
                <div className="ps-product__content">
                    {title(product)}
                    <ul className="ps-product__desc">
                        {product.filters.map(item => (
                            <li key={item.filterId}>{item.filterGroupName} : {item.name}</li>
                        ))}
                    </ul>
                </div>
                <ModuleProductWideActions product={product} />
            </div>
        </div>
    );
};

export default ProductWide;
