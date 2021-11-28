import React from 'react';
import { router } from 'next/client';

import { ACTIVE_LANGUAGE_KEY } from 'constant/storageNames';

const LanguageSwitcher = () => {

    const handleFeatureWillUpdate = async (e : any, value : string) => {
        e.preventDefault();
        localStorage.setItem(ACTIVE_LANGUAGE_KEY, value)
        await router.push("/", undefined, {locale: value})
    }

    return (
        <div className="ps-dropdown language">
            <a href="#" onClick={() => handleFeatureWillUpdate}>
                <img src="/static/img/flag/en.png" alt="martfury" />
                Русский
            </a>
            <ul className="ps-dropdown-menu">
                <li>
                    <a
                        href="#"
                        onClick={() => handleFeatureWillUpdate}>
                        <img src="/static/img/flag/germany.png" alt="martfury" />
                        English
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        onClick={() => handleFeatureWillUpdate}>
                        <img src="/static/img/flag/germany.png" alt="martfury" />
                        Казахский
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default LanguageSwitcher;
