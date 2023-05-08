import styled from "styled-components"
import { CategoryBlog } from "./Components/CategoryBlog"
import { ContentBlog } from "./Components/ContentBlog"
import { RelatedProjects } from "../../components/RelateProducts"

export const BlogDetail = () => {

    return (
        <BlogDetailContainer>
            <ContentBlogContainer>
                <CategoryBlog />
                <ContentBlog />
            </ContentBlogContainer>
            <RelatedProjects />
        </BlogDetailContainer>
    )
}

const BlogDetailContainer = styled.div `
    
    padding: 150px 50px;
`

const ContentBlogContainer = styled.div`
    display: flex;
    gap: 30px;
    margin-bottom: 50px;
`