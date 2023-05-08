import { CategoriesContainer } from "./styled"


export const CategoryBlog = () => {

    const categories = [
        {
            id: 0,
            name: "category 1",
            slug: "cateogry-1"
        },
        {
            id: 1,
            name: "category 1",
            slug: "cateogry-1"
        },
        {
            id: 2,
            name: "category 1",
            slug: "cateogry-1"
        },
        {
            id: 3,
            name: "category 1",
            slug: "cateogry-1"
        },
        {
            id: 4,
            name: "category 1",
            slug: "cateogry-1"
        }
    ]
    return (
        <div>
            <CategoriesContainer>
                <h4>Categories</h4>
                {categories.map((item, index) => (
                    <div key = {index}>
                        <p>{item.name}</p>
                    </div>
                ))}
            </CategoriesContainer>
            <div>
                <img src="https://capricathemes.com/opencart/OPC02/OPC020033/image/cache/catalog/left-banner-1-277x320.jpg" alt="" />
            </div>
        </div>
    )
}