import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';

import { addParamToUrl, editParamFromUrl, removeParamFromUrl } from 'helper/commons/products';

const SearchHeader = () => {
    const inputEl = useRef(null);
    const [keyword, setKeyword] = useState('');
    const Router = useRouter()
    const { searchText } = Router.query

    function handleSubmit(e : any) {
        e.preventDefault();
        console.log(searchText)
        console.log(searchText === '')
        if(keyword !== '') {
            if (keyword === '' && searchText !== undefined) {
                Router.push(removeParamFromUrl(Router.asPath, "searchText"))
            } else {
                if (Router.asPath?.includes("searchText")) {
                    //Удаление параметра из url и переадресация на новый без данного параметра
                    Router.push(editParamFromUrl(Router.asPath, "searchText", keyword))
                } else {
                    Router.push(addParamToUrl(Router.asPath, "searchText", keyword))
                }
            }
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
            <button onClick={handleSubmit}>Поиск</button>
        </form>
    );
};

export default SearchHeader;
