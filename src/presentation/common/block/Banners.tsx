import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

import NextArrow from '../typography/NextArrow';
import PrevArrow from '../typography/PrevArrow';

const Banners = () => {
    const [size, setSize] = useState(0)
    const [height, setHeight] = useState(500)

    const [bannerItems, setBannerItems] = useState([
        {id: 1, imageUrl: "/static/img/slider/slide-1.webp"},
        {id: 2, imageUrl: "/static/img/slider/slide-2.webp"},
        {id: 3, imageUrl: "/static/img/slider/slide-3.webp"}
    ])

    const updateWidth = () => {
        if(typeof window !== 'undefined')
            setSize(window.innerWidth)
    }

    useEffect(() => {
        if(typeof window !== 'undefined')
            updateWidth()
    }, [])

    useEffect(() => {
        if(typeof window !== 'undefined') {
            window.addEventListener("resize", updateWidth);
            if(window.innerWidth < 700) {
                setBannerItems([
                    { id: 1, imageUrl: "/static/img/slider/1.jpg" },
                    { id: 2, imageUrl: "/static/img/slider/2.jpg" },
                    { id: 3, imageUrl: "/static/img/slider/3.jpg" }
                ])
                setHeight(800)
            }
            else {
                setBannerItems([
                    { id: 1, imageUrl: "/static/img/slider/slide-1.webp" },
                    { id: 2, imageUrl: "/static/img/slider/slide-2.webp" },
                    { id: 3, imageUrl: "/static/img/slider/slide-3.webp" }
                ])
                setHeight(500)
            }
            return () => window.removeEventListener("resize", updateWidth);
        }
        else
            return () => null
    }, [size])


    useEffect(() => {
        if(typeof window !== 'undefined')
            if(window.innerWidth < 600)
                setHeight(800)
                setBannerItems([
                    {id: 1, imageUrl: "/static/img/slider/1.jpg"},
                    {id: 2, imageUrl: "/static/img/slider/2.jpg"},
                    {id: 3, imageUrl: "/static/img/slider/3.jpg"}
                ])
    }, [])

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
                        <Image key={item.id} loading="lazy" width={1200} height={height} priority objectFit={'cover'} src={item.imageUrl} alt="CATS" />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Banners;
