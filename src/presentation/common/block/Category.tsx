import React  from 'react';
import { Tabs } from 'antd';
import Link from 'next/link';
import Image from 'next/image'

import { SHOP_PAGE } from 'constant/routes';
import {ICategory} from "domain/interfaces/ICategory";

const { TabPane } = Tabs;

interface ICategoryBlock{
    categories: Array<ICategory>
}

const Category = ({categories} : ICategoryBlock) => {
    return (
        <div className="ps-search-trending">
            <div className="container">
                <div className="ps-section__header">
                    <h3>
                        Категорий <span>популярных товаров</span>
                    </h3>
                </div>
                <div className="ps-section__content">
                    <div className="ps-block--categories-tabs ps-tab-root">
                        <div className="ps-block__header">
                            <Tabs>
                                {categories.map((category) => (
                                    <TabPane
                                        tab={
                                            <div className="ps-block__tab-list">
                                                <div className="tab-container">{category.name}</div>
                                            </div>
                                        }
                                        key={category.id}>
                                        <div className="ps-block__item">
                                            {category.imageUrl !== null && category.imageUrl !== undefined ? (
                                                <Link
                                                    href={SHOP_PAGE(undefined, undefined, category.id)}
                                                    key={category.name}>
                                                    <div className="image-container">
                                                        <Image
                                                            layout='responsive'
                                                            width={600}
                                                            height={600}
                                                            src={category.imageUrl}
                                                            alt={category.name}
                                                        />
                                                        <span>{category.name}</span>
                                                    </div>
                                                </Link>
                                            ) : null}
                                        </div>
                                    </TabPane>
                                ))}
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
