import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';

import { generateShopUrl, removeParamFromUrl } from 'helper/commons/products';
import { SHOP_PAGE } from 'constant/routes';
import productStore from 'data/stores/productStore';

const SearchHeader = observer(() => {
    const inputEl = useRef(null);
    const [keyword, setKeyword] = useState("");
    const Router = useRouter()
    const { filters, category, searchText, price_min, price_max, page } = Router.query

    useEffect(() => {
        if(searchText !== undefined)
            setKeyword(searchText.toString())
    }, [searchText])

    async function handleSubmit(e: any) {
        e.preventDefault();
        productStore.setProductLoading(false)
        if (keyword === '') {
            await Router.push(SHOP_PAGE(), undefined, { scroll: false })
        } else {
            if (keyword === '' && searchText !== undefined)
                await Router.push(removeParamFromUrl(Router.asPath, "searchText"))
            else
                await Router.push({
                    pathname: '/shop', query: generateShopUrl(category, filters, keyword,
                        price_min, price_max, page)
                }, undefined, { shallow: false, scroll: false })
        }
    }

    return (
        <form
            className="ps-form--quick-search"
            onSubmit={handleSubmit}>
            <div className="ps-form__input">
                <input
                    ref={inputEl}
                    className="form-control"
                    type="text"
                    value={keyword}
                    placeholder="Я ищу..."
                    onChange={(e) => setKeyword(e.target.value)}
                />
            </div>
            <button type='submit'>Поиск</button>
        </form>
    );
});

export default SearchHeader;
