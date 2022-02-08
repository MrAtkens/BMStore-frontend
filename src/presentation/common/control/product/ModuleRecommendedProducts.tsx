import React from 'react';
import Slider from 'react-slick';

import {
    carouselFullwidth,
    carouselStandard,
} from 'helper/carousel-helpers';
import { IProduct } from 'domain/interfaces/IProduct';
import { generateTempArray } from 'helper/commons/header';
import Product from 'presentation/common/control/products/Product';
import SkeletonProduct from 'presentation/common/block/skeletons/SkeletonProduct';

interface IModuleRecommendedProducts{
    productItems: Array<IProduct>,
    boxed: boolean,
    layout: string
}

const ModuleRecommendedProducts = ({ productItems, boxed, layout} : IModuleRecommendedProducts) => {

    // Views
    let carouselView;
    if (productItems !== undefined) {
        if (productItems.length > 0) {
            if (layout == 'fullwidth') {
                carouselView = (
                    <Slider {...carouselFullwidth} className="ps-carousel outside">
                        {productItems.map((item : IProduct) => {
                            return <Product product={item} key={item.id} />;
                        })}
                    </Slider>
                );
            } else {
                carouselView = (
                    <Slider {...carouselStandard} className="ps-carousel outside">
                        {productItems.map((item : IProduct) => {
                            return <Product product={item} key={item.id} />;
                        })}
                    </Slider>
                );
            }
        }
        else {
            carouselView = <p>Продукты не найдены.</p>
        }
    }
    else {
        carouselView = carouselView = (
            <Slider {...carouselStandard} className="ps-carousel outside">
                {generateTempArray(8).map((item) => (
                    <SkeletonProduct key={item} />
                ))}
            </Slider>
        );
    }

    return (
        <div
            className={`ps-section--default ps-customer-bought ${
                boxed ? 'boxed' : ''
            }`}>
            <div className="ps-section__header">
                <h3>Покупатели также часто покупают данные товары</h3>
            </div>
            <div className="ps-section__content">{carouselView}</div>
        </div>
    );
};

export default ModuleRecommendedProducts;
