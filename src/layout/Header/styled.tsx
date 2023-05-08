import styled from "styled-components";

export const HeaderContainer = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 0px 100px;
    position: fixed;
    width: 100%;
    z-index: 999;
    background-color: #ffffff;

    a {
        text-decoration: solid;
        color : none;
    }
`;

export const HeaderCenter = styled.div`
    
    display: flex;
    gap: 50px;
    font-size: 18px;
`

export const HeaderLeft = styled.div`
    
    display: flex;
    gap: 50px;
    font-size: 20px;
`