import { ContentDescProducts, DescProductContainer, TitleDescContainer } from "./styled"
import parserHtml from "react-html-parser"
type ITypeProps = {
    descProducts: string
}
export const DescProduct = (props: ITypeProps) => {
    const {descProducts} = props;
    return (
        <DescProductContainer>
            {descProducts ? 
            <>
             <TitleDescContainer>Description</TitleDescContainer>
            <ContentDescProducts>
                {parserHtml(props.descProducts)}
            </ContentDescProducts>
            </> : null}
           
        </DescProductContainer>
    )
}