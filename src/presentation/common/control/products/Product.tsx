import React from 'react';
import Link from 'next/link';
import ModuleProductActions from './modules/ModuleProductActions';
import useProduct from 'presentation/hook/useProduct';
import { IProduct } from 'domain/interfaces/IProduct';
import { PRODUCT } from 'constant/routes';

interface IProductComponent{
    product : IProduct
}

const Product = ({product} : IProductComponent) => {
    const { getImage, price, badge, title } = useProduct();
    return (
        <div className="ps-product">
            <div className="ps-product__thumbnail">
                <Link href={PRODUCT(product.id)}>
                    <a>{getImage(product)}</a>
                </Link>
                {badge(product)}
                <ModuleProductActions product={product} />
            </div>
            <div className="ps-product__container">
                <div className="ps-product__content">
                    {title(product)}
                    <div className="ps-product__rating">
                        {/*<Rating />*/}
                        {/*<span>02</span>*/}
                    </div>
                    {price(product)}
                </div>
                <div className="ps-product__content hover">
                    {title(product)}
                    {price(product)}
                </div>
            </div>
        </div>
    );
};

export default Product;
