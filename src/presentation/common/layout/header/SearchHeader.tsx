import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';

import { SHOP_PAGE } from 'constant/routes';
import { editParamFromUrl } from 'helper/commons/products';

const SearchHeader = () => {
    const inputEl = useRef(null);
    const [keyword, setKeyword] = useState('');
    const Router = useRouter()
    const { searchText } = Router.query

    function handleSubmit(e : any) {
        e.preventDefault();
        if(searchText?.includes("searchText")){
            //Удаление параметра из url и переадресация на новый без данного параметра
            Router.push(editParamFromUrl(Router.asPath, "searchText", keyword))
        }
        else {
            Router.push(SHOP_PAGE(undefined, keyword))
        }
    }

    return (
        <form
            className="ps-form--quick-search"
            method="get"
            action="/"
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
            <button onClick={handleSubmit}>Поиск</button>
        </form>
    );
};

export default SearchHeader;
