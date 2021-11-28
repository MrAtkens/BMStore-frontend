import {ReactElement} from "react";
import {ISocialLink} from "./IAbout";

export interface IPost{
    id: string,
    title: string,
    url: string,
    image: string,
    description: string,
    date: string,
}

export interface IIntro{
    authorTitle: ReactElement,
    authorImage: string,
    authorDescription: string,
    socialLinks: Array<ISocialLink>
}

export interface IHome {
    posts: Array<IPost>,
    intro: IIntro
}
