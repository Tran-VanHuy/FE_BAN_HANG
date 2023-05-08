import { Carousel } from "antd"
import { BannerContainer } from "./styled"
import {useState, useEffect} from "react";
import { getApiBanner } from "../../api/Banner/api";
import { Link } from "react-router-dom";

type TypeBanner = {

    image: string,
    link: string,
}
export const Banner = () => {

    const [listData, setListData] = useState<any>();
    
    const getListBanner = async () => {

        const listBanner =  await getApiBanner();
        setListData(listBanner.data.data)
    }

    useEffect(() => {
        getListBanner()
    },[])
    return (
        <div>
            {listData  ?
             <Carousel effect="fade">
                   {listData.map((item: any, index: number)=> (
                    <div key = {index}>
                        <Link to={item.link}>
                        <BannerContainer src={item.image} key = {index} />
                        </Link>
                    </div>
                ))}
             </Carousel>
             
            :   
            <Carousel effect="fade">
                <div>
                    <BannerContainer src="https://capricathemes.com/opencart/OPC02/OPC020033/image/cache/catalog/main-banner-1-1903x975.jpg" />
                </div>
                <div>
                    <BannerContainer src="https://capricathemes.com/opencart/OPC02/OPC020033/image/cache/catalog/main-banner-1-1903x975.jpg" />
                </div>
                <div>
                    <BannerContainer src="https://capricathemes.com/opencart/OPC02/OPC020033/image/cache/catalog/main-banner-1-1903x975.jpg" />
                </div>
                <div>
                    <BannerContainer src="https://capricathemes.com/opencart/OPC02/OPC020033/image/cache/catalog/main-banner-1-1903x975.jpg" />
                </div>
             </Carousel>}
           
        </div>
    )
}