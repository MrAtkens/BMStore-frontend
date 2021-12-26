import React from 'react';

import { IProduct } from 'domain/interfaces/IProduct';

import ThumbnailDefault from 'presentation/common/control/product/ThumbnailDefault';
import ModuleDetailTopInformation from 'presentation/common/control/product/ModuleDetailTopInformation';
import ModuleProductDetailDescription from 'presentation/common/control/product/ModuleProductDetailDescription';
import ModuleDetailShoppingActions from 'presentation/common/control/product/ModuleDetailShoppingActions';
import ModuleProductDetailSharing from 'presentation/common/control/product/ModuleProductDetailSharing';
import DescriptionBox from 'presentation/common/control/product/description/DescriptionBox';

interface IProductDetailBox{
    product : IProduct
}

const ProductDetailBox = ({ product } : IProductDetailBox) => (
    <div className="ps-product--detail ps-product--box">
        <div className="ps-product__header ps-product__box">
            <ThumbnailDefault product={product} vertical={false} />
            <div className="ps-product__info">
                <ModuleDetailTopInformation product={product} />
                <ModuleProductDetailDescription product={product} />
                <ModuleDetailShoppingActions product={product} />
                <ModuleProductDetailSharing />
            </div>
        </div>
        <div className="ps-product__content">
            <div className="row">
                <div className="col-xl-12">
                    <DescriptionBox product={product} />
                </div>
            </div>
        </div>
    </div>
);

export default ProductDetailBox;
