import styled from "styled-components"
import { InfoProducts } from "./Components/InfoProduct"
import { DescProduct } from "./Components/DescProduct"
import { RelatedProjects } from "../../components/RelateProducts"

export const ProductDetail = () => {

    return (
        <WrapperPageProduct>
            <InfoProducts />
            <DescProduct />
            <RelatedProjects />
        </WrapperPageProduct>
    )
}

const WrapperPageProduct = styled.div`
    
    padding: 120px 150px;
`