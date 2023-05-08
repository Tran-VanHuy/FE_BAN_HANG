import { SearchOutlined, UserOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import { HeaderCenter, HeaderContainer, HeaderLeft } from "./styled"

export const Header = () => {

    return (
        <HeaderContainer>
          <a href="/">
            <h1>
                ARTCRAFT.
            </h1>
          </a>
            <HeaderCenter>
                <p>Sculpture</p>
                <p>Frames</p>
                <p>Relief</p>
                <p>Statue</p>
                <p>More</p>
            </HeaderCenter>
            <HeaderLeft>
                <SearchOutlined />
                <UserOutlined />
                <ShoppingCartOutlined />
            </HeaderLeft>
        </HeaderContainer>
    )
}