import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import { Pagination } from 'antd';

import Product from '~/components/elements/products/Product';
import ProductWide from '~/components/elements/products/ProductWide';
import ModuleShopSortBy from 'presentation/common/typography/ModuleShopSortBy';
import SkeletonProduct from 'presentation/common/block/skeletons/SkeletonProduct';

import productStore from "data/stores/productStore"
import { IProduct } from 'domain/interfaces/IProduct';
import { generateTempArray } from 'helper/commons/header';
import { SHOP_PAGE } from 'constant/routes';

interface IShopItems{
    columns: number,
    pageSize: number,
    initialProducts: Array<IProduct>
}

const ShopItems = observer(({ columns = 4, pageSize = 12, initialProducts } : IShopItems) => {
    const Router = useRouter();
    const { page } = Router.query;
    const { query } = Router;
    const [listView, setListView] = useState(true);
    const [total, setTotal] = useState(0);
    const [products, setProducts] = useState(initialProducts);

    const [classes, setClasses] = useState(
        'col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6'
    );

    function handleChangeViewMode(e : any) {
        e.preventDefault();
        setListView(!listView);
    }

    function handlePagination(page : number) {
        Router.push(SHOP_PAGE(page));
    }


    function handleSetColumns() {
        switch (columns) {
            case 2:
                setClasses('col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6');
                return 3;
                break;
            case 4:
                setClasses('col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6');
                return 4;
                break;
            case 6:
                setClasses('col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6');
                return 6;
                break;

            default:
                setClasses('col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6');
        }
    }

    useEffect(() => {
        if (query) {
            if (query.page) {

            }
        } else {

        }
        handleSetColumns();
    }, [query]);

    // Views
    let productItemsView;
    if (!products || products.length < 0) {
        if (products && products.length > 0) {
            if (listView) {
                const items = products.map((item) => (
                    <div className={classes} key={item.id}>
                        <Product product={item} />
                    </div>
                ));
                productItemsView = (
                    <div className="ps-shop-items">
                        <div className="row">{items}</div>
                    </div>
                );
            } else {
                productItemsView = products.map((item) => (
                    <ProductWide product={item} />
                ));
            }
        } else {
            productItemsView = <p>Продукты не найдены.</p>;
        }
    } else {
        const skeletonItems = generateTempArray(pageSize).map((item) => (
            <div className={classes} key={item}>
                <SkeletonProduct />
            </div>
        ));
        productItemsView = <div className="row">{skeletonItems}</div>;
    }

    return (
        <div className="ps-shopping">
            <div className="ps-shopping__header">
                <p>
                    <strong className="mr-2">{total}</strong>
                    Найденых продуктов
                </p>
                <div className="ps-shopping__actions">
                    <ModuleShopSortBy />
                    <div className="ps-shopping__view">
                        <p>Вид</p>
                        <ul className="ps-tab-list">
                            <li className={listView ? 'active' : ''}>
                                <a
                                    href="#"
                                    onClick={(e) => handleChangeViewMode(e)}>
                                    <i className='icon-grid'/>
                                </a>
                            </li>
                            <li className={!listView ? 'active' : ''}>
                                <a
                                    href="#"
                                    onClick={(e) => handleChangeViewMode(e)}>
                                    <i className='icon-list4'/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="ps-shopping__content">{productItemsView}</div>
            <div className="ps-shopping__footer text-center">
                <div className="ps-pagination">
                    <Pagination
                        total={total - 1}
                        pageSize={pageSize}
                        responsive={true}
                        showSizeChanger={false}
                        current={page !== undefined ? parseInt(page as string) : 1}
                        onChange={(e) => handlePagination(e)}
                    />
                </div>
            </div>
        </div>
    );
});

export default ShopItems;
