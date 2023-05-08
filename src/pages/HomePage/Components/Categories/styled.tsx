import styled from "styled-components";

export const CategoryContainer = styled.div`
    
    display: flex;
    justify-content: center;
    position: relative;  
    padding: 30px 0px;
  
`

export const CategoryItem = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    background-color: #DDDDDD;
    padding: 10px;
    
    h3{
        position: absolute;
        color: #ffffff;
        /* z-index: 999; */
    }
    
`

export const CategoryImage = styled.img`
width: 350px;
       transition: .3s ease-in-out;

    &:hover {
         
            transform: scale(1.5);
        
    }
`