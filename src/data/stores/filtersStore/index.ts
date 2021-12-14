import {makeAutoObservable} from "mobx";
import { IFilter } from 'domain/interfaces/IFilter';

interface ICategoryStore{
    filters : Array<IFilter>
}

class FilterStore implements ICategoryStore {
    filters = [] as Array<IFilter>;
    activeFilters = [] as Array<string>;

    constructor() {
        makeAutoObservable(this)
    }

    setFilters(filters: Array<IFilter>) {
        this.filters = filters
    }

    setActiveFilters(target){
        let filters = this.activeFilters
        if(target.checked === true)
            filters.push(target.value)
        else{
            const index = filters.indexOf(target.value)
            filters.splice(index, 1)
        }
        this.activeFilters = filters
    }

    setActiveFiltersFromUrl(filters){
        this.activeFilters = filters
    }
}

export default new FilterStore();
