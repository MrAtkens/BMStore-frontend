import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';

import { SHOP_PAGE } from 'constant/routes';
import CategoryMenu from "presentation/common/typography/menu/CategoryMenu"
import {ICategory} from "domain/interfaces/ICategory";

interface IBanners{
    categories: Array<ICategory>
}

const Banners = ({categories} : IBanners) => {
    const carouselSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className="ps-home-banner">
            <div className="container">
                <div className="ps-section__left">
                    <CategoryMenu mode={'inline'} source={categories} className="menu--dropdown" />
                </div>
                <div className="ps-section__center">
                    <Slider {...carouselSettings}>
                        <div className="item">
                            <Link passHref href={SHOP_PAGE()}>
                                <img src="/static/img/slider/home-5/1.webp" alt="CATS" />
                            </Link>
                        </div>
                        <div className='item'>
                            <Link passHref href={SHOP_PAGE()}>
                                <img src="/static/img/slider/home-5/2.webp" alt="CATS" />
                            </Link>
                        </div>
                        <div className='item'>
                            <Link passHref href={SHOP_PAGE()}>
                                <img src="/static/img/slider/home-5/3.webp" alt="CATS" />
                            </Link>
                        </div>
                    </Slider>
                    <Link passHref href={SHOP_PAGE()}>
                        <img src="/static/img/slider/home-5/promotion-6.webp" alt="CATS" />
                    </Link>
                </div>
                <div className="ps-section__right">
                    <Link passHref href={SHOP_PAGE()}>
                        <div className="image-container">
                            <Image src="/static/img/slider/home-5/promotion-1.webp" alt="CATS" />
                        </div>
                    </Link>
                    <Link passHref href={SHOP_PAGE()}>
                        <div className="image-container">
                            <Image src="/static/img/slider/home-5/promotion-2.webp" alt="CATS" />
                        </div>
                    </Link>
                    <Link passHref href={SHOP_PAGE()}>
                        <div className="image-container-full">
                            <Image src="/static/img/slider/home-5/promotion-3.webp" alt="CATS" />
                        </div>
                    </Link>
                    <Link passHref href={SHOP_PAGE()}>
                        <div className="image-container">
                            <Image src="/static/img/slider/home-5/promotion-4.webp" alt="CATS" />
                        </div>
                    </Link>
                    <Link passHref href={SHOP_PAGE()}>
                        <div className="image-container">
                            <Image src="/static/img/slider/home-5/promotion-5.webp" alt="CATS" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Banners;
