import React, { FormEvent, useState } from 'react';
import Router from 'next/router';
import { HOME } from 'constant/routes';

const PanelSearch = () => {
    const [keyword, setKeyword] = useState('');

    async function handleSubmit(e : FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (keyword !== '') {
            await Router.push(`/search?keyword=${keyword}`);
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
