import styled from "styled-components";

export const BlogContainer = styled.div`
    
    h2 {
        text-align: center;
        font-size: 32px;
    }
`

export const WrapperInfoBlog = styled.div`
    
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 30px;
`

export const ItemsBlog = styled.div`
    position: relative;
   width: 25%;
    img {
        width: 100%;
        height: 100%;
    }
`

export const ContentBlog = styled.div`
    
    background-color: #000000;
    position: absolute;
    bottom: 10px;
    left: 5px;
    right: 5px;
    background: rgba(75, 74, 74, 0.5);
    color: #ffffff;
    padding: 10px 30px 0px 30px;
    h4 {
        font-size: 28px;
        margin-block: 0px;
        opacity: none !important;
        color: #ffffff;
    }
    a{
             text-decoration: none;
    }
`