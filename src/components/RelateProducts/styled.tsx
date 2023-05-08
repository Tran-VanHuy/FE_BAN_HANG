import styled from "styled-components";

export const FeaturedProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    a {
        text-decoration: solid;
        color: unset
    }
`
export const Items = styled.div`
    
    display: flex;
    gap: 30px;
    padding: 0px 230px;
`

export const TitleTab = styled.div`
    
    display: flex;
    font-size: 16px;
    justify-items: center;
    gap: 30px;
    margin-bottom: 10px;
    p {
        cursor: pointer;
    }
`

export const WrapperInfoProducts = styled.div`
cursor: pointer;
       transition: 3s;
    position: relative;
    /* width: 22%; */
    &:hover{
        transition: 3s;
        .icon_products {
            display: flex;
        }
    }
`
export const Sales = styled.p`
    
    font-size: 16px;
    font-weight: bold;
    position: absolute;
    left: 20px;
    z-index: 1;
`


export const WrapperIconProducts = styled.div`
    display: none;
    /* display: flex; */
    justify-content: center;
    gap: 20px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    align-items: center;
    justify-content: center;
`

export const IconProducts = styled.div`
    
   background-color: #000000;
   color: #ffffff;
   padding: 10px;
   
`

export const WrapperImageProducts = styled.div`
    
    position: relative;
`