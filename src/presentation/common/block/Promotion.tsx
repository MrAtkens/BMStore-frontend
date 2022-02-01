import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { HOME } from 'constant/routes';

const Promotion = () => (
    <div className="ps-promotion-footer">
        <div className="container">
            <Link passHref href={HOME}>
                <Image width={1200} height={245} src="/static/img/promotions/simple.jpg" alt="martfury" />
            </Link>
        </div>
    </div>
);

export default Promotion;
