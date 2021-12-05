import React, { useRef, useState } from 'react';
import Router from 'next/router';

// interface ISearchHeader{
//     categories: Array<ICategory>
// }

const SearchHeader = () => {
    const inputEl = useRef(null);
    const [keyword, setKeyword] = useState('');


    function handleSubmit(e : any) {
        e.preventDefault();
        Router.push(`/search?keyword=${keyword}`);
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
