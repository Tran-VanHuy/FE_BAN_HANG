import { transformDataBrands } from './transform';
import axios from "axios"
import { DOMAIN_API } from "../api"

export const getApiBrands = async (pageNo: number, pageSize: number) => {

    const res = await axios.get(`${DOMAIN_API.BRANDS}?pageNo=${pageNo}&pageSize=${pageSize}`);
    if(res.status === 200){
        transformDataBrands(res.data.data)
    }

    return res?.data?.data;
}