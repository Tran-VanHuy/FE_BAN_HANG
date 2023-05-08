import axios from "axios"
import { TransFormDataBanner } from "./tranform";
import { DOMAIN_API } from "../api";
import { ITypeBanner } from "./type";

export const getApiBanner = async (pageNo?: number, pageSize?: number) => {

    const paging = pageNo && pageSize ? `?pageNo=${pageNo}&pageSize=${pageSize}` : "";
    const res = await  axios.get(`${DOMAIN_API.BANNER}${paging}`);
    const tranFormData = TransFormDataBanner(res);
    return tranFormData;
}

export const createApiBanner = async (formData: ITypeBanner | undefined) => {

    const res = await  axios.post(`${DOMAIN_API.BANNER}`, formData);
    const tranFormData = TransFormDataBanner(res);
    return tranFormData;
}

export const deleteApiBanner =async (id:string) => {
    
    const res = await  axios.delete(`${DOMAIN_API.BANNER}/${id}`,);
    return res;
}

export const updateApiBanner =async (id: number | undefined ,formData: ITypeBanner) => {
    const res = await  axios.put(`${DOMAIN_API.BANNER}/${id}`, formData);
    const tranFormData = TransFormDataBanner(res);
    return tranFormData;
    
}