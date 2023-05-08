import axios from "axios"
import { DOMAIN_API } from "../api"
import { transformDataCategoryProducts } from "./transform"
import { TypeFormCategoryProducts } from "./type"

export const getApiCategoryProducts = async (pageNo?: number, pageSize?: number) => {

    const res = await axios.get(`${DOMAIN_API.CATEGORY_PRODUCTS}?pageNo=${pageNo || 0}&pageSize=${pageSize || 1000}`)
    if(res.status === 200){
        const transform = transformDataCategoryProducts(res.data)
        return transform;
    }
    return res.data;
}

export const createApiCategoryProducts = async (data: TypeFormCategoryProducts) => {

    const res = await axios.post(`${DOMAIN_API.CATEGORY_PRODUCTS}`, data)
    if(res.status === 200){
        const transform = transformDataCategoryProducts(res.data.data)
        return transform;
    }
    return res.data.data;
}

export const deleteApiCategoryProducts = async (id: number) => {

    const res = await axios.delete(`${DOMAIN_API.CATEGORY_PRODUCTS}/${id}`)
    if(res.status === 200){
        const transform = transformDataCategoryProducts(res.data.data)
        return transform;
    }
    return res.data.data;
}

export const updateApiCategoryProducts = async (id: number | undefined, data: TypeFormCategoryProducts) => {

    const res = await axios.put(`${DOMAIN_API.CATEGORY_PRODUCTS}/${id}`, data)
    if(res.status === 200){
        const transform = transformDataCategoryProducts(res.data.data)
        return transform;
    }
    return res.data.data;
}