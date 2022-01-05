import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { HOME, SHOP_PAGE } from 'constant/routes';
import productStore from 'data/stores/productStore';
import { generateShopUrl, removeParamFromUrl } from 'helper/commons/products';

const PanelSearch = () => {
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
        productStore.setProductLoading(false)
        if(keyword === ''){
            Router.push(SHOP_PAGE(), undefined, { scroll: false })
        }
        else {
            if (keyword === '' && searchText !== undefined)
                Router.push(removeParamFromUrl(Router.asPath, "searchText"))
            else
                Router.push({
                    pathname: '/shop', query: generateShopUrl(category, filters, keyword,
                        price_min, price_max, page)
                }, undefined, { shallow: false, scroll: false })
        }
    }

    return (
        <div className="ps-panel__search-results">
            <form
                className="ps-form--search-mobile"
                action={HOME}
                method="get"
                onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group--nest">
                    <input
                        ref={inputEl}
                        value={keyword}
                        className="form-control"
                        type="text"
                        placeholder="Поиск..."
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button>
                        <i className='icon-magnifier'/>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PanelSearch;
