import React from 'react';
import { IProduct } from 'domain/interfaces/IProduct';

interface IModuleProductDetailDescription{
    product: IProduct
}

const ModuleProductDetailDescription = ({ product } : IModuleProductDetailDescription) => (
    <div className="ps-product__desc">
        <p>{product.description}</p>
        <ul className="ps-list--dot">
            {product.filters.map(item => (
                <li key={item.filterId}>{item.filterGroupName} : {item.name}</li>
            ))}
        </ul>
    </div>
);

export default ModuleProductDetailDescription;
