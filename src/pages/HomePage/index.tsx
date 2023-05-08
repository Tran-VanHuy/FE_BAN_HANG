import { Banner } from "../../components/Banner"
import { Blog } from "../../components/Blog"
import { Advertisement } from "./Components/Advertisement"
import { Brands } from "./Components/Brands"
import { Categories } from "./Components/Categories"
import { FeaturedProjects } from "./Components/FeaturedProducts"
import { Infomation } from "./Components/Infomation"

export const HomePage = () => {

    return (
        <div>
            <Banner />
            <Infomation />
            <Categories />
            <FeaturedProjects />
            <Advertisement />
            <Blog />
            <Brands />
        </div>
    )
}