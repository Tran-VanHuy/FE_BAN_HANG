import { BaseInfo } from "../../interface/base";

export interface ITypeAdver extends BaseInfo {

    id?: number
    image: string
    content: string
    button: string
    link: string
}