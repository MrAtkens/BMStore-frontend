import React  from 'react';
import Link from 'next/link';
import Image from 'next/image'

import { SHOP_PAGE } from 'constant/routes';
import {ICategory} from "domain/interfaces/ICategory";

interface ICategoryBlock{
    categories: Array<ICategory>
}

const Category = ({categories} : ICategoryBlock) => {
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
                            {categories.map((category) => {
                                if(category.imageUrl !== null && category.imageUrl !== undefined)
                                    return(
                                        <div className="ps-block__item">
                                            <Link
                                                passHref
                                                href={SHOP_PAGE("category", category.id)}
                                                key={category.id}>
                                                <div className="image-container">
                                                    <Image
                                                        layout='responsive'
                                                        width={600}
                                                        height={600}
                                                        src={category.imageUrl}
                                                        alt={category.name}
                                                    />
                                                    <span className="category-title">{category.name}</span>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                else
                                    return null;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Category;
