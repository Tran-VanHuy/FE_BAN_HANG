import axios from "axios"
import { DOMAIN_API } from "../api"
import { transformDataAdver } from "./transform"

export const getApiAdver = async () => {

    const res = await axios.get(`${DOMAIN_API.ADVER}`)
    if(res.status === 200){
        transformDataAdver(res.data)
    }
    return res?.data;
}