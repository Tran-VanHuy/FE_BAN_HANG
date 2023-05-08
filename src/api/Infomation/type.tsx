import { BaseInfo } from "../../interface/base";

export interface TypeFormInfomation extends BaseInfo {
    id?: number
    icon: string;
    name: string;
    content: string;
}

export type IInformatiron = Pick<
TypeFormInfomation,
"id" | "icon" | "name" | "content"
>