import React from 'react';
import Link from 'next/link';

import { HOME } from 'constant/routes';

const Promotion = () => (
    <div className="ps-home-promotions">
        <Link href={HOME}>
            <img src="/static/img/promotions/home-5/simple.jpg" alt="martfury" />
        </Link>
    </div>
);

export default Promotion;
