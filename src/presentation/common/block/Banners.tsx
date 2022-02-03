import React, {useState} from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import Promotion from 'presentation/common/block/Promotion';
import NextArrow from '../typography/NextArrow';
import PrevArrow from '../typography/PrevArrow';
import { SHOP_PAGE } from 'constant/routes';

const Banners = () => {
    const [bannerItems] = useState([
        {id: 1, imageUrl: "/static/img/slider/slide-1.webp"},
        {id: 2, imageUrl: "/static/img/slider/slide-2.webp"},
        {id: 3, imageUrl: "/static/img/slider/slide-3.webp"}
    ])
    const carouselSetting = {
        dots: false,
        infinite: true,
        speed: 750,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    // Views
    let mainCarouselView;
    if (bannerItems) {
        const carouseItems = bannerItems.map((item) => (
            <div key={item.id} className="item">
                <Link passHref href={SHOP_PAGE()}>
                    <a
                        className="ps-banner-item--default bg--cover"
                        style={{
                            backgroundImage: `url(${item.imageUrl})`,
                        }}
                    />
                </Link>
            </div>
        ));
        mainCarouselView = (
            <Slider {...carouselSetting} className="ps-carousel">
                {carouseItems}
            </Slider>
        );
    }
    return (
        <div className="ps-home-banner ps-home-banner--1">
            <div className="ps-container">
                <div className="ps-section__left">{mainCarouselView}</div>
                <div className="ps-section__right">
                    <Promotion
                        link={SHOP_PAGE()}
                        image={"/static/img/promotions/promotion-1.webp"}
                    />
                    <Promotion
                        link={SHOP_PAGE()}
                        image={"/static/img/promotions/promotion-2.webp"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Banners;
