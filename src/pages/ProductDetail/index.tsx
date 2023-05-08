import styled from "styled-components"
import { InfoProducts } from "./Components/InfoProduct"
import { DescProduct } from "./Components/DescProduct"
import { RelatedProjects } from "../../components/RelateProducts"
import { useParams } from "react-router-dom"
import { useState } from "react"

export const ProductDetail = () => {

    const [descProducts, setDescProducts] = useState();
    console.log("descProducts", descProducts);
    

    return (
        <WrapperPageProduct>
            <InfoProducts setDescProducts = {setDescProducts}/>
            <DescProduct descProducts = {descProducts}/>
            <RelatedProjects />
        </WrapperPageProduct>
    )
}

const WrapperPageProduct = styled.div`
    
    padding: 120px 150px;
`