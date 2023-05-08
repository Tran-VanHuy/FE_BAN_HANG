import axios from "axios"
import { DOMAIN_API, PAGING } from "../api"
import { transformDataBlog } from "./transform"

export const getApiBlog =  async (pageNo: number, pageSize: number) => {

    const res = await axios.get(`${DOMAIN_API.BLOG}?${PAGING(pageNo, pageSize)}`)
    if(res.status === 200){

        transformDataBlog(res.data.data)
    }
    return res?.data?.data;
}

export const getApiSlugBlog =  async (slug: string | undefined) => {

    const res = await axios.get(`${DOMAIN_API.BLOG}/${slug}`)
    if(res.status === 200){

        transformDataBlog(res.data.data)
    }
    return res?.data?.data;
}