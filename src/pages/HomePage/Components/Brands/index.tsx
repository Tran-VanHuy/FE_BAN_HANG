import { useEffect, useState } from "react"
import { BrandsContainer } from "./styled"
import { ITypeBrands } from "../../../../api/Brands/type"
import { getApiBrands } from "../../../../api/Brands/api";
import { Link } from "react-router-dom";

export const Brands = () => {

    const [listDataBrands, setListDataBrands] = useState<ITypeBrands[]>([]);


    const getListBrands = async () => {

        try {

            const listBrands = await getApiBrands(0, 20);
            setListDataBrands(listBrands);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getListBrands()
    }, [])

    return (
        <BrandsContainer>
            {listDataBrands && listDataBrands.length > 0 ?
                listDataBrands.map((item, index) => (
                    <div key={index}>
                        <Link to={item.link} target="_blank">
                            <img src={item.image} alt="" />
                        </Link>
                    </div>
                )) : null}

        </BrandsContainer>
    )
}