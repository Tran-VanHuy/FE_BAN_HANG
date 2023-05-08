import { useEffect, useState } from "react"
import { AdvertisementContainer, AdvertisementContent } from "./styled"
import { ITypeAdver } from "../../../../api/Adver/type"
import { getApiAdver } from "../../../../api/Adver/api";
import ReactHtmlParser, { processNodes, convertNodeToElement } from 'react-html-parser';
import { Link } from "react-router-dom";
import { Carousel } from "antd";
export const Advertisement = () => {

    const [listAdver, setListAdver] = useState<ITypeAdver[]>();
    console.log("listAdverlistAdver", listAdver);

    const getListAdver = async () => {

        try {
            const listData = await getApiAdver()
            setListAdver(listData);
        } catch (error) {
            console.log("error", error);

        }
    }

    useEffect(() => {
        getListAdver()
    }, [])

    return (
        <AdvertisementContainer>
            <Carousel>
                {listAdver && listAdver.length > 0 ? listAdver.map((item, index) => (
                    <Link to={`${item.link}`} target="_blank">
                        <div key={index}>
                            <img src={item.image} alt="" />
                            <AdvertisementContent>
                                {ReactHtmlParser(item.content)}

                                <div>
                                    <button>
                                        {item.button}
                                    </button>
                                </div>
                            </AdvertisementContent>
                        </div>
                    </Link>
                )) : null}
            </Carousel>


        </AdvertisementContainer>
    )
}