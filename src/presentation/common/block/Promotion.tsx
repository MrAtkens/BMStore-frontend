import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Promotion = ({ link, image }) => {
    if (image) {
        return (
            <Link href={link}>
                <a className="ps-collection">
                    <div className="image-container-promotion">
                        <Image src={image} alt="CATS" />
                    </div>
                </a>
            </Link>
        );
    } else {
        return (
            <Link href={link ? link : '/shop'}>
                <a className="ps-collection">
                    <div className="image-container-promotion">
                        <Image src={"/static/img/not-found.jpg"} alt="CATS" />
                    </div>
                </a>
            </Link>
        );
    }
};

export default Promotion;
