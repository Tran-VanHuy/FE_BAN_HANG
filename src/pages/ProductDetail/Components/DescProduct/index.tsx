import { ContentDescProducts, DescProductContainer, TitleDescContainer } from "./styled"
import parserHtml from "react-html-parser"

export const DescProduct = (props: any) => {

    return (
        <DescProductContainer>
            {props?.descProducts ? 
            <>
             <TitleDescContainer>Description</TitleDescContainer>
            <ContentDescProducts>
                {parserHtml(props.descProducts)}
            </ContentDescProducts>
            </> : null}
           
        </DescProductContainer>
    )
}