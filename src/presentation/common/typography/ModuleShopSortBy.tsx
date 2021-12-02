import React from 'react';

const ModuleShopSortBy = () => {
    return (
        <select
            className="ps-select form-control"
            data-placeholder="Sort Items">
            <option>Сначала дешевле</option>
            <option>Сначала дороже</option>
            <option>По новизне</option>
            <option>По названию</option>
            <option>По количеству</option>
        </select>
    );
};

export default ModuleShopSortBy;
