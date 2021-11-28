import {ReactElement} from "react";

export interface ISocialLink{
    icon: ReactElement,
    url: string,
    tooltip: string
}

export interface IAboutPage{
    title: string,
    description: string,
    subTitle: string,
    subDescription: string,
    socialLinks: Array<ISocialLink>
}
