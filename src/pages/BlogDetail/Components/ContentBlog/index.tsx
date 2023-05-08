import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ITypeBlog } from "../../../../api/Blog/type";
import { getApiSlugBlog } from "../../../../api/Blog/api";
import parserHtml from "react-html-parser"

export const ContentBlog = () => {

    const { slug } = useParams();

    const [blogDetail, setBlogDetail] = useState<ITypeBlog>();
    console.log("blogDetail", blogDetail);
    

    const getBlogDetail = async (slug: string | undefined) => {

        try {
            const datablogDetail = await getApiSlugBlog(slug)
            setBlogDetail(datablogDetail)
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getBlogDetail(slug)
    }, [])


    return (
        <div>
            {blogDetail ? parserHtml(blogDetail?.content) : null}
        </div>
    )
}