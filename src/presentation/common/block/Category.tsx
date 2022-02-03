import React  from 'react';
import Link from 'next/link';
import Image from 'next/image'

import { SHOP_PAGE } from 'constant/routes';
import {ICategory} from "domain/interfaces/ICategory";
import Slider from 'react-slick';

interface ICategoryBlock{
    categories: Array<ICategory>
}

const Category = ({categories} : ICategoryBlock) => {

    const carouselSetting = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    let count = 0
    const list : any = []
    let listBuffer : any = []
    categories.map((category) => {
        if(category.imageUrl !== null && category.imageUrl !== undefined) {
            count++;
            if(count === 6){
                const categoryItem = (
                    <Link
                        passHref
                        href={SHOP_PAGE('category', category.id)}
                        key={category.id}>
                        <div className='image-container'>
                            <Image
                                loading='lazy'
                                layout='responsive'
                                width={600}
                                height={600}
                                src={category.imageUrl}
                                alt={category.name}
                            />
                            <span className='category-title'>{category.name}</span>
                        </div>
                    </Link>
                )
                listBuffer.push(categoryItem)
                list.push(listBuffer)
                listBuffer = []
                count = 0;
            }
            else{
                const categoryItem = (
                    <Link
                        passHref
                        href={SHOP_PAGE('category', category.id)}
                        key={category.id}>
                        <div className='image-container'>
                            <Image
                                loading='lazy'
                                layout='responsive'
                                width={600}
                                height={600}
                                src={category.imageUrl}
                                alt={category.name}
                            />
                            <span className='category-title'>{category.name}</span>
                        </div>
                    </Link>
                )
                listBuffer.push(categoryItem)
            }
        }
    })

    return (
        <div className="ps-search-trending">
            <div className="container">
                <div className="ps-section__header">
                    <h3>
                        Категории <span>популярных товаров</span>
                    </h3>
                </div>
                <div className="ps-section__content">
                    <div className="ps-block--categories-tabs ps-tab-root">
                        <div className="ps-block__header">
                            <Slider {...carouselSetting} fade={true} className="ps-carousel">
                                {list.map((item) => (
                                    <div key={item.id} className="ps-block__item">
                                        {item}
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Category;
