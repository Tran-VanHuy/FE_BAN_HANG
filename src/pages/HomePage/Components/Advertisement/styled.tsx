import styled from "styled-components";

export const AdvertisementContainer = styled.div`
    
    padding: 30px 0px;
    overflow: hidden;
    position: relative;
`

export const AdvertisementContent = styled.div`
    
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 30%;
    h1{

        color: #ffffff;
        font-size: 50px;
        margin-block-end: 0 !important;
        margin-block: 0 !important;
    }
    p {
        color: #ffffff;
        font-size: 60px;
        margin-block: 0 !important;
    }
    span {
        color: gray;
        margin-bottom: 20px;
    }
    button {

        padding: 10px;
        border: none;
        font-weight: bold;
        cursor: pointer;
    }
    
`