import {makeAutoObservable} from "mobx";
import { ICategory } from 'domain/interfaces/ICategory';

interface ICategoryStore{
    categories : Array<ICategory>
    activeCategory: ICategory
}

class CategoryStore implements ICategoryStore {
    categories = [] as Array<ICategory>;
    activeCategory = {
        id: "",
        imageUrl: "",
        children: [],
        name: "",
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
            id: "",
            imageUrl: "",
            children: [],
            name: "",
            slug: "",
        }
    }
}

export default new CategoryStore();
