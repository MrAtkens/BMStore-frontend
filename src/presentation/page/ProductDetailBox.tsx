import React from 'react';

import { IProduct } from 'domain/interfaces/IProduct';

import ThumbnailDefault from 'presentation/common/block/product/ThumbnailDefault';
import ModuleDetailTopInformation from 'presentation/common/block/product/ModuleDetailTopInformation';
import ModuleProductDetailDescription from 'presentation/common/block/product/ModuleProductDetailDescription';
import ModuleDetailShoppingActions from 'presentation/common/block/product/ModuleDetailShoppingActions';
import ModuleProductDetailSharing from 'presentation/common/block/product/ModuleProductDetailSharing';
import ModuleDetailActionsMobile from 'presentation/common/block/product/ModuleDetailActionsMobile';
import DescriptionBox from 'presentation/common/block/product/description/DescriptionBox';

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
                <ModuleDetailActionsMobile product={product}/>
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
