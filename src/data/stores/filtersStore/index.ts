import {makeAutoObservable} from "mobx";
import { IFilter } from 'domain/interfaces/IFilter';

interface ICategoryStore{
    filters : Array<IFilter>
}

class FilterStore implements ICategoryStore {
    filters = [] as Array<IFilter>;

    constructor() {
        makeAutoObservable(this)
    }

    setFilters(filters: Array<IFilter>) {
        this.filters = filters
    }
}

export default new FilterStore();
