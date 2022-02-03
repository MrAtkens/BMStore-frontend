import React, {useState} from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

import NextArrow from '../typography/NextArrow';
import PrevArrow from '../typography/PrevArrow';

const Banners = () => {
    const [bannerItems] = useState([
        {id: 1, imageUrl: "/static/img/slider/slide-1.webp"},
        {id: 2, imageUrl: "/static/img/slider/slide-2.webp"},
        {id: 3, imageUrl: "/static/img/slider/slide-3.webp"}
    ])
    const carouselSetting = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <div className="ps-shop-banner">
            <div className="container">
                <Slider {...carouselSetting} className="ps-carousel">
                    {bannerItems.map((item) => (
                        <Image key={item.id} loading="lazy" width={1200} height={500} priority objectFit={'cover'} src={item.imageUrl} alt="CATS" />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Banners;
