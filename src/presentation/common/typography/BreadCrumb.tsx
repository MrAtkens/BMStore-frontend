import React from 'react';
import Link from 'next/link';
import { IBread } from 'domain/interfaces/system/IBread';

interface IBreadCrumb{
    breadcrumb: Array<IBread>,
    layout: string
}

const BreadCrumb = ({ breadcrumb, layout = "not" } : IBreadCrumb) => {
    return (
        <div className="ps-breadcrumb">
            <div
                className={
                    layout === 'fullwidth' ? 'ps-container' : 'container'
                }>
                <ul className="breadcrumb">
                    {breadcrumb.map((item) => {
                        if (item.url === null) {
                            return <li key={item.text}>{item.text}</li>;
                        } else {
                            return (
                                <li key={item.text}>
                                    <Link passHref href={item.url}>
                                        <a>{item.text}</a>
                                    </Link>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        </div>
    );
};

export default BreadCrumb;
