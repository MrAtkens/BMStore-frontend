import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import LazyLoad from 'react-lazyload';

import { IImage, IProduct } from 'domain/interfaces/IProduct';
import { PRODUCT } from 'constant/routes';

function getImageURL(images : Array<IImage>) {
    let imageURL;
    let isMainNotFound = true;
    if (images) {
        images.map(image => {
            if(image.isMain) {
                if(image.url === null)
                    imageURL = `/static/img/not-found.webp`;
                else
                    imageURL = image.url;
                isMainNotFound = false
            }
        })
    } else {
        imageURL = `/static/img/not-found.webp`;
    }
    if(isMainNotFound)
        imageURL = `/static/img/not-found.webp`;
    return imageURL;
}

export default function useProduct() {
    return {
        getImage: (product : IProduct) => {
            return (
                <LazyLoad>
                    <Image
                        layout='responsive'
                        width={250}
                        height={250}
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
                    {filter.filterGroupName} : {filter.name}
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
