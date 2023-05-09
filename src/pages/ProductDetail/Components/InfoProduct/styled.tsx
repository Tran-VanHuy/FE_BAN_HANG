import styled from "styled-components";

export const ImageProductContainer = styled.div`
    
    display: flex;
    gap: 50px;
    margin-bottom: 50px;
`

export const InfoProductsLeft = styled.div`
    
   width: 30%;
   overflow: hidden;
`

export const ImageProduct = styled.img`
    width: 100%;
    height: 500px;
    object-fit: contain;
`
export const ItemProducts = styled.div`
    
    display: flex;
    gap: 20px;
    img {
        width: 100px;
        height: 100px;
        cursor: pointer;
    }
`

export const TitleProducts = styled.div`
    margin-bottom: 20px;
    h1 {
        font-size: 22px;
        margin-block: unset;
    }
`

export const ContentProducts = styled.div`
    
    border-bottom: 2px solid #DCDCDC;
    border-top: 2px solid #DCDCDC;
    padding: 30px 0px;
    margin-bottom: 10px;

`
export const InfoRightProductContainer = styled.div`
    
    width: 60%;
`

export const ItemContentProduct = styled.div`
    
    margin-bottom: 20px;
`
export const PriceProduct =  styled.strong`
    
    font-size: 30px;
    margin-bottom: 20px;
    padding-right: 30px;
    text-decoration-line: ${(props: any) => props.title === "true" ? "line-through" : null };
    color: ${(props: any) => props.title === "true" ? "#696969	" : null };
`

export const ButtonProducts = styled.div`
    
    padding: 20px 0px 30px 0px;
    display: flex;
    gap: 20px;
    button {
        font-size: 20px;
        padding: 10px 20px;
        border: none;
        color: white;
        cursor: pointer;
    }

    border-bottom: 2px solid #DCDCDC;
`
export const BuyNowProducts = styled.button`
    
    background-color: red;
`

export const AddToCardProducts = styled.button`
    
    background-color: black;
`
export const LikeAndShareProductsContaier = styled.div`
    
    display: flex;
    padding: 20px 0px;
    gap: 30px;
`
export const LikeProducts = styled.div`
    
    padding: 5px 25px;
    background-color: blue;
    border-radius: 5px;
    color: white;
    cursor: pointer;
`

export const ShareProducts = styled.div`
    
    padding: 5px 25px;
    background-color: orange;
    border-radius: 5px;
    color: white;
    display: flex;
    gap: 5px;
    align-items: center;
    cursor: pointer;
    
`