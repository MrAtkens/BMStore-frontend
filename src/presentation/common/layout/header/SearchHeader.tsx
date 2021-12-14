import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

import { generateShopUrl, removeParamFromUrl } from 'helper/commons/products';

const SearchHeader = () => {
    const inputEl = useRef(null);
    const [keyword, setKeyword] = useState("");
    const Router = useRouter()
    const { filters, category, searchText, price_min, price_max, page } = Router.query

    useEffect(() => {
        if(searchText !== undefined)
            setKeyword(searchText.toString())
    }, [searchText])

    function handleSubmit(e : any) {
        e.preventDefault();
        if (keyword === '' && searchText !== undefined)
            Router.push(removeParamFromUrl(Router.asPath, "searchText"))
        else
            Router.push({pathname: '/shop', query: generateShopUrl(category, filters, keyword,
                price_min, price_max, page)}, undefined, {shallow: false, scroll: false})
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
};

export default SearchHeader;
