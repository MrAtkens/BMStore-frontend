import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';

import { SHOP_PAGE } from 'constant/routes';
import CustomMenu from "presentation/common/typography/menu/CustomMenu"
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
                    <CustomMenu mode={'inline'} source={categories} className="menu--dropdown" />
                </div>
                <div className="ps-section__center">
                    <Slider {...carouselSettings}>
                        <div className="item">
                            <Link passHref href={SHOP_PAGE()}>
                                <img src="/static/img/slider/home-5/1.jpg" alt="CATS" />
                            </Link>
                        </div>
                        <div className='item'/>
                    </Slider>
                    <Link passHref href={SHOP_PAGE()}>
                        <img src="/static/img/slider/home-5/promotion-6.jpg" alt="CATS" />
                    </Link>
                </div>
                <div className="ps-section__right">
                    <Link passHref href={SHOP_PAGE()}>
                        <Image width={191} height={193} src="/static/img/slider/home-5/promotion-1.jpg" alt="CATS" />

                    </Link>
                    <Link passHref href={SHOP_PAGE()}>
                        <Image width={191} height={193} src="/static/img/slider/home-5/promotion-2.jpg" alt="CATS" />
                    </Link>
                    <Link passHref href={SHOP_PAGE()}>
                        <Image width={382} height={194} src="/static/img/slider/home-5/promotion-3.jpg" alt="CATS" />
                    </Link>
                    <Link passHref href={SHOP_PAGE()}>
                        <Image width={191} height={193} src="/static/img/slider/home-5/promotion-4.jpg" alt="CATS" />
                    </Link>
                    <Link passHref href={SHOP_PAGE()}>
                        <Image width={191} height={193} src="/static/img/slider/home-5/promotion-5.jpg" alt="CATS" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Banners;
