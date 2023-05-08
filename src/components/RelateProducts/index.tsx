import React from 'react';
import { FeaturedProductsContainer, IconProducts, Items, Sales, TitleTab, WrapperIconProducts, WrapperImageProducts, WrapperInfoProducts } from './styled';
import { HeartOutlined, EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';

export const RelatedProjects: React.FC = () => {
    const listData = [{
        "id": 0,
        "image": "https://capricathemes.com/opencart/OPC02/OPC020033/image/cache/catalog/03-278x320.jpg",
        "name": "Aliquam Quaerat",
        "price": 108.80,
        "sales": 8,
        "slug": "aliquam-quaerat"
    },
    {
        "id": 0,
        "image": "https://capricathemes.com/opencart/OPC02/OPC020033/image/cache/catalog/03-278x320.jpg",
        "name": "Aliquam Quaerat",
        "price": 108.80,
        "sales": 8,
        "slug": "aliquam-quaerat"
    },
    {
        "id": 0,
        "image": "https://capricathemes.com/opencart/OPC02/OPC020033/image/cache/catalog/03-278x320.jpg",
        "name": "Aliquam Quaerat",
        "price": 108.80,
        "sales": 8,
        "slug": "aliquam-quaerat"
    },  
    ]

    return (
        <FeaturedProductsContainer>
            <h2>Featured Products</h2>
            <Items>
                {listData.map((item, index) => (
                   <Link to={`/product/${item.slug}`}>
                    <WrapperInfoProducts key={index}>
                        {item.sales !== 0 ? <Sales>{item.sales}% Off</Sales> : null}
                        <WrapperImageProducts>
                            <img src={item.image} alt="" />
                            <WrapperIconProducts className='icon_products'>
                                <IconProducts><HeartOutlined /></IconProducts>
                                <IconProducts><EyeOutlined /></IconProducts>
                                <IconProducts><ShoppingCartOutlined /></IconProducts>
                            </WrapperIconProducts>
                        </WrapperImageProducts>

                        <h4>{item.name}</h4>
                        <p>{item.price} $ </p>

                    </WrapperInfoProducts>
                   </Link>
                ))}
            </Items>
        </FeaturedProductsContainer>
    )
};
