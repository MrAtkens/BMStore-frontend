import React from 'react';
import { IProduct } from 'domain/interfaces/IProduct';

interface IPartialSpecification{
    product : IProduct
}

const PartialSpecification = ({ product } : IPartialSpecification) => (
    <div className="table-responsive">
        <table className="table table-bordered ps-table ps-table--specification">
            <tbody>
            {product.filters.map(item =>(
                <tr key={item.filterId}>
                    <td>{item.filterGroupName}</td>
                    <td>{item.name}</td>
                </tr>
            ))}

            </tbody>
        </table>
    </div>
);

export default PartialSpecification;
