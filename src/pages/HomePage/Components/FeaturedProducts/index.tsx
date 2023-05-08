import React, { useEffect, useState } from 'react';
import { FeaturedProductsContainer, IconProducts, Items, Sales, TitleTab, WrapperIconProducts, WrapperImageProducts, WrapperInfoProducts } from './styled';
import { HeartOutlined, EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import { getApiCategoryProducts } from '../../../../api/CategoryProducts/api';
import { TypeFormCategoryProducts } from '../../../../api/CategoryProducts/type';
import { getApiProducts } from '../../../../api/Products/api';
import { TypeFormProducts } from '../../../../api/Products/type';
import { formatCurrency } from '../../../../components/FormatCurrency';
import SkeletonLoadding from '../../../../components/Skeleton';

export const FeaturedProjects: React.FC = () => {

    const [listDataCategory, setListDataCatepgory] = useState<TypeFormCategoryProducts[]>([])
    const [listDataProducts, setListDataProducts] = useState<TypeFormProducts[]>([])
    const [defaultcategoryProduct, setDefaultCategoryProducts] = useState("");
    const [loadding, setLoadding] = useState<Boolean>(false)
    const getListCategoryProducts = async () => {

        const listCategoryProducts = await getApiCategoryProducts();
        setListDataCatepgory(listCategoryProducts.data)
    }

    const getListProducts = async () => {

        try {
            const listProducts = await getApiProducts(defaultcategoryProduct, 0, 8);
            console.log("listProducts", listProducts);
            setListDataProducts(listProducts.data);
            setLoadding(true)
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getListCategoryProducts()

    }, [])

    useEffect(() => {
        getListProducts()
    }, [defaultcategoryProduct])
    return (
        <FeaturedProductsContainer>
            <h2>Featured Products</h2>
            <TitleTab>
                {listDataCategory && listDataCategory.length > 0 ? listDataCategory.map((item: TypeFormCategoryProducts, index: number) => (
                    <p key={index} onClick={() => setDefaultCategoryProducts(item.name)}>{item.name}</p>
                )) : null}
            </TitleTab>
            {loadding === false ? <SkeletonLoadding /> : <Items>
                {listDataProducts && listDataProducts.length > 0 ? listDataProducts.map((item, index) => (
                    <Link to={`/product/${item.slug}`}>
                        <WrapperInfoProducts key={index}>
                            {item.sales === 0 || <Sales>{item.sales}% Off</Sales>}
                            <WrapperImageProducts>
                                <img src={item.image} alt="" />
                                <WrapperIconProducts className='icon_products'>
                                    <IconProducts><HeartOutlined /></IconProducts>
                                    <IconProducts><EyeOutlined /></IconProducts>
                                    <IconProducts><ShoppingCartOutlined /></IconProducts>
                                </WrapperIconProducts>
                            </WrapperImageProducts>

                            <h4>{item.name}</h4>
                            <p>{formatCurrency(item.price)}</p>

                        </WrapperInfoProducts>
                    </Link>
                )) : null}

            </Items>}

        </FeaturedProductsContainer>
    )
};
