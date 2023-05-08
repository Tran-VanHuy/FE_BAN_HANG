import { useEffect, useState } from "react";
import { BlogContainer, ContentBlog, ItemsBlog, WrapperInfoBlog } from "./styled"
import {CalendarOutlined} from "@ant-design/icons";
import { ITypeBlog } from "../../api/Blog/type";
import { getApiBlog } from "../../api/Blog/api";
import moment from "moment";
import { Link } from "react-router-dom";

export const Blog = () => {

    const [listBlog, setListBlog] = useState<ITypeBlog[]>([]);
    
    const getListBlog = async () => {

        try {
            const listData = await getApiBlog(0, 3)
            setListBlog(listData);
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {

        getListBlog()
    },[])

    return (

        <BlogContainer>
            <h2>
                Latest Blog
            </h2>
            <WrapperInfoBlog>
                {listBlog && listBlog.length > 0 ? listBlog.map((item, index) => (
                    <ItemsBlog>
                        <img src={item.image} alt="" />
                        <ContentBlog>
                            <div>
                                <CalendarOutlined /> {item.createdAt  && moment(item.createdAt).format("DD-MM-YYYY")}
                            </div>
                            <Link to={`/blog/${item.slug}`}>
                                <h4>{item.title}</h4>
                            </Link>
                            <p>{item.shortContent}</p>
                        </ContentBlog>
                    </ItemsBlog>
                )) : null}
            </WrapperInfoBlog>
        </BlogContainer>
    )
}