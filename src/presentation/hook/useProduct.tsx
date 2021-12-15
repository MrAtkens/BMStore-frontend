import React from 'react';
import LazyLoad from 'react-lazyload';
import Link from 'next/link';
import { IImage, IProduct } from 'domain/interfaces/IProduct';
import { PRODUCT } from 'constant/routes';

function getImageURL(images : Array<IImage>) {
    let imageURL;

    if (images) {
        images.map(image => {
            if(image.isMain)
                imageURL = image.url;
        })
    } else {
        imageURL = `/static/img/not-found.jpg`;
    }
    return imageURL;
}

export default function useProduct() {
    return {
        getImage: (product : IProduct) => {
            return (
                <LazyLoad>
                    <img
                        src={getImageURL(product.images)}
                        alt={product.title}
                    />
                </LazyLoad>
            )
        },
        price: (product : IProduct) => {
            // Для скидок
            // let view;
            // if (product.sale_price) {
            //     view = (
            //         <p className="ps-product__price sale">
            //             <span>$</span>
            //             {formatCurrency(payload.sale_price)}
            //             <del className="ml-2">
            //                 <span>$</span>
            //                 {formatCurrency(payload.price)}
            //             </del>
            //         </p>
            //     );
            // } else {
            //     view = (
            //         <p className="ps-product__price">
            //             {product.price}
            //             <span>тг</span>
            //         </p>
            //     );
            // }
            // return view;
            return(
                <p className="ps-product__price">
                    {product.price}
                    <span>тг</span>
                </p>
            )
        },
        filters: (product: IProduct) => {
            return product.filters.map(filter => (
                <a key={filter.filterId} className='text-capitalize'>
                    {filter.filterGroupId} : {filter.name}
                </a>
            ));
        },
        title: (product: IProduct) => {
            return (
                <Link href={PRODUCT(product.id)}>
                    <a className="ps-product__title">{product.title}</a>
                </Link>
            );
        },
    };
}
