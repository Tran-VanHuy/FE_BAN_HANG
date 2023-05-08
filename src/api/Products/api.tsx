import axios from "axios"
import { DOMAIN_API, PAGING } from "../api"
import { transformDataProducts, transformDataProductsDetail } from "./transform";
import { TypeCreateFormOrder, TypeFormProducts } from "./type";

export const getApiProducts = async (category: string, pageNo: number, pageSize: number) => {

    const res = await axios.get(`${DOMAIN_API.PRODUCTS}?category=${category}&${PAGING(pageNo, pageSize)}`);
    if(res.status === 200){
        const transform = transformDataProducts(res.data)
        return transform;
    }

    return res?.data?.data;
}

export const getApiProductsDetail = async (slug: string | undefined) => {

    const res = await axios.get(`${DOMAIN_API.PRODUCTS}/${slug}`);
    if(res.status === 200){
        const transform = transformDataProductsDetail(res.data.data)
        return transform;
    }

    return res?.data?.data;
}


export const getApiLikeProducts = async (id: number | undefined) => {

    const res = await axios.get(`${DOMAIN_API.LIKE_PRODUCTS}/${id}`);
    if(res.status === 200){
        const transform = transformDataProductsDetail(res.data.data)
        return transform;
    }

    return res?.data?.data;
}

export const postApiCreateOrderProducts =  async (data: TypeCreateFormOrder) => {

    const res = await axios.post(`${DOMAIN_API.CREATE_ORDER}`, data)
    return res
}

export const deleteApiProducts = async (id: number) => {

    const res = await axios.delete(`${DOMAIN_API.PRODUCTS}/${id}`)
    if(res.status === 0){
        transformDataProducts(res.data.data)
    }
    return res?.data?.data;
}

export const createApiProducts = async (data: TypeFormProducts) => {

    const res = await axios.post(`${DOMAIN_API.PRODUCTS}`, data)
    if(res.data === 200){
        transformDataProducts(res.data.data)
    }
    return res?.data?.data;
}

export const updateApiProducts = async (id: number | undefined,data: TypeFormProducts) => {

    const res = await axios.put(`${DOMAIN_API.PRODUCTS}/${id}`, data)
    if(res.data === 200){
        transformDataProducts(res.data.data)
    }
    return res?.data?.data;
}