import React, { useRef, useState } from 'react';
import Router from 'next/router';

import {ICategory} from "domain/interfaces/ICategory";

interface ISearchHeader{
    categories: Array<ICategory>
}

const SearchHeader = ({ categories }: ISearchHeader) => {
    const inputEl = useRef(null);
    const [isSearch, setIsSearch] = useState(false);
    const [keyword, setKeyword] = useState('');
    const [resultItems, setResultItems] = useState(null);
    const [loading, setLoading] = useState(false);

    function handleClearKeyword() {
        setKeyword('');
        setIsSearch(false);
        setLoading(false);
    }

    function handleSubmit(e : any) {
        e.preventDefault();
        Router.push(`/search?keyword=${keyword}`);
    }

    const selectOptionView = categories.map((category) => (
        <option value={category.slug} key={category.slug}>
            {category.name}
        </option>
    ));


    return (
        <form
            className="ps-form--quick-search"
            method="get"
            action="/"
            onSubmit={handleSubmit}>
            <div className="ps-form__categories">
                <select className="form-control">{selectOptionView}</select>
            </div>
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
            <div
                className={`ps-panel--search-result${
                    isSearch ? ' active ' : ''
                }`}>
                <div className='ps-panel__content'/>
            </div>
        </form>
    );
};

export default SearchHeader;
