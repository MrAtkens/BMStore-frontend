import React from 'react';
import { IProduct } from 'domain/interfaces/IProduct';

interface IPartialDescription{
    product: IProduct
}

const PartialDescription = ({product} : IPartialDescription) => (
    <div className="ps-document">
        <h3>{product.title}</h3>
        <p><pre>{product.description}</pre></p>
    </div>
);

export default PartialDescription;
