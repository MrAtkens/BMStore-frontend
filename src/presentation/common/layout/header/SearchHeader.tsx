import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

import { generateShopUrl, removeParamFromUrl } from 'helper/commons/products';

const SearchHeader = () => {
    const inputEl = useRef(null);
    const [keyword, setKeyword] = useState("");
    const Router = useRouter()
    const { filters, category, searchText, price_min, price_max, page } = Router.query

    useEffect(() => {
        console.log(searchText)
        if(searchText !== undefined)
            setKeyword(searchText.toString())
    }, [searchText])

    function handleSubmit(e : any) {
        e.preventDefault();
        if(keyword !== '')
            if (keyword === '' && searchText !== undefined)
                Router.push(removeParamFromUrl(Router.asPath, "searchText"))
        else
            Router.push({pathname: '/shop', query: generateShopUrl(category, filters, keyword.replace(' ', ''), price_min, price_max, page)}, undefined, {shallow: true, scroll: false})

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
