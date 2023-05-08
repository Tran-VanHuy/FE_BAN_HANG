import { BaseInfo } from "../../interface/base";

export interface ITypeBlog extends BaseInfo {

    id?: number
    title: string
    shortContent: string
    content: string
    image: string
    slug: string
}