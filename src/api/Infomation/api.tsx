import axios from "axios"
import { DOMAIN_API } from "../api"
import { transFormDataInformation } from "./transform";
export const getApiInformaiton = async () => {

    const res = await axios.get(`${DOMAIN_API.INFORMAITON}`);
    const transform = transFormDataInformation(res.data.data);
    return transform;

}