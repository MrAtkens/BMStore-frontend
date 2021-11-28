import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';

import { SHOP } from 'constant/routes';
import Menu from "presentation/common/typography/menu/Menu"
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
                    <Menu source={categories} className="menu--dropdown" />
                </div>
                <div className="ps-section__center">
                    <Slider {...carouselSettings}>
                        <div className="item">
                            <Link href={SHOP}>
                                <img src="/static/img/slider/home-5/1.jpg" alt="CATS" />
                            </Link>
                        </div>
                        <div className="item">
                            <Link href={SHOP}>
                                <img src="/static/img/slider/home-5/2.jpg" alt="CATS" />
                            </Link>
                        </div>
                        <div className="item">
                            <Link href={SHOP}>
                                <a>
                                    <img src="/static/img/slider/home-5/3.jpg" alt="CATS" />
                                </a>
                            </Link>
                        </div>
                        <div className='item'/>
                    </Slider>
                    <Link href={SHOP}>
                        <a>
                            <img src="/static/img/slider/home-5/promotion-6.jpg" alt="CATS" />
                        </a>
                    </Link>
                </div>
                <div className="ps-section__right">
                    <Link href={SHOP}>
                        <a>
                            <img src="/static/img/slider/home-5/promotion-1.jpg" alt="CATS" />
                        </a>
                    </Link>
                    <Link href={SHOP}>
                        <a>
                            <img src="/static/img/slider/home-5/promotion-2.jpg" alt="CATS" />
                        </a>
                    </Link>
                    <Link href={SHOP}>
                        <a className="wide">
                            <img src="/static/img/slider/home-5/promotion-3.jpg" alt="CATS" />
                        </a>
                    </Link>
                    <Link href={SHOP}>
                        <a>
                            <img src="/static/img/slider/home-5/promotion-4.jpg" alt="CATS" />
                        </a>
                    </Link>
                    <Link href={SHOP}>
                        <a>
                            <img src="/static/img/slider/home-5/promotion-5.jpg" alt="CATS" />
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Banners;
