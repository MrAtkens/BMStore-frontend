import {makeAutoObservable} from "mobx";
import { ICategory } from 'domain/interfaces/ICategory';

interface ICategoryStore{
    categories : Array<ICategory>
    activeCategory: ICategory
}

class CategoryStore implements ICategoryStore {
    categories = [] as Array<ICategory>;
    activeCategory = {
        name: "",
        imageUrl: "",
        slug: "",
    };

    constructor() {
        makeAutoObservable(this)
    }

    // setActive(category: ICategory) {
    //     this.activeCategory = category
    // }

    setActiveDefault(){
        this.activeCategory = {
            name: "",
            imageUrl: "",
            slug: "",
        }
    }
}

export default new CategoryStore();
