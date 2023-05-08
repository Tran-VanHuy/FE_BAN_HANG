import { FacebookOutlined, HeartFilled, LikeOutlined, ShareAltOutlined } from "@ant-design/icons"
import { AddToCardProducts, ButtonProducts, BuyNowProducts, ContentProducts, ImageProduct, ImageProductContainer, InfoProductsLeft, InfoRightProductContainer, ItemContentProduct, ItemProducts, LikeAndShareProductsContaier, LikeProducts, PriceProduct, ShareProducts, TitleProducts } from "./styled"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TypeFormProducts } from "../../../../api/Products/type";
import { getApiLikeProducts, getApiProductsDetail } from "../../../../api/Products/api";
import { formatCurrency } from "../../../../components/FormatCurrency";
import ModalComponent from "../../../../components/Modal";
type ITypeDefaultImage = {

    id?: number;
    image?: string;
}
export const InfoProducts = () => {

    const {slug} = useParams();


    const [listImage, setListImage] = useState([
        {
            id: 0,
            image: "https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg"
        },
        {
            id: 1,
            image: "https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg"
        },
        {
            id: 2,
            image: "https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg"
        },
        {
            id: 3,
            image: "https://i.pinimg.com/736x/56/86/03/568603cbd1860c67bf8f6776cbe7f885.jpg"
        },
    ]);

  

    const [dataProductDetail, setDataProductDetail] = useState<TypeFormProducts>();
    const [defaultImage, setDefaultImage] = useState<ITypeDefaultImage>();
    const [changeColorHeart, setChangeColorHeart] = useState("white")
    const [openModal, setOpenModal] = useState(false);
            console.log("openModalopenModal", openModal);
            
    const onClickImage = (image: ITypeDefaultImage) => {
        console.log(image);

        setDefaultImage(image);
    }

    const getProductDetail = async (slug : string | undefined) => {
        const productDetail =  await getApiProductsDetail(slug);
        setDataProductDetail(productDetail);
    }

    const likeProducts = async (id: number | undefined) => {

        await getApiLikeProducts(id)
        setChangeColorHeart("red")
    }

    const buyNow = (status: boolean) => {
        
        setOpenModal(status)
    }

    useEffect(() => {
        getProductDetail(slug)
    }, [])

    return (
        <ImageProductContainer>
            <InfoProductsLeft>
                <div>
                    <ImageProduct src={defaultImage ? defaultImage.image : dataProductDetail?.image} alt="" />
                </div>
                <ItemProducts>
                    {listImage.map((item, index) => (
                        <img src={item.image} alt="" key={index} onClick={() => onClickImage(item)} />
                    ))}
                </ItemProducts>
            </InfoProductsLeft>

            <InfoRightProductContainer>
                <TitleProducts>
                    <h1>{dataProductDetail?.name}</h1>
                </TitleProducts>
                <ContentProducts>
                    <ItemContentProduct>
                        <strong>Brand: </strong>
                        <span>{dataProductDetail?.brand}</span>
                    </ItemContentProduct>
                    <ItemContentProduct>
                        <strong>Product Code: </strong>
                        <span>Product 16</span>
                    </ItemContentProduct>
                    <ItemContentProduct>
                        <strong>Reward Points: </strong>
                        <span>{dataProductDetail?.point}</span>
                    </ItemContentProduct>
                    <ItemContentProduct>
                        <strong>Availability: </strong>
                        <span>In Stock</span>
                    </ItemContentProduct>
                </ContentProducts>
                <PriceProduct title={dataProductDetail && dataProductDetail?.sales > 0 ? "true" : "false"}>{formatCurrency(dataProductDetail?.price)}</PriceProduct>
                <PriceProduct title = {"false"}>{formatCurrency((dataProductDetail && (dataProductDetail?.price - (dataProductDetail?.sales / 100 * dataProductDetail?.price))) )}</PriceProduct>
                <ButtonProducts>
                    <BuyNowProducts onClick={() => buyNow(true)}>Buy now</BuyNowProducts>
                    <AddToCardProducts>Add to card</AddToCardProducts>
                    <AddToCardProducts onClick={() => likeProducts(dataProductDetail?.id)}><HeartFilled  style={{color: `${changeColorHeart}`}}/></AddToCardProducts>
                </ButtonProducts>
                <LikeAndShareProductsContaier>
                    <LikeProducts>
                        <LikeOutlined /> {dataProductDetail?.like}
                    </LikeProducts>
                    <ShareProducts>
                        <FacebookOutlined /> Facebook
                    </ShareProducts>
                </LikeAndShareProductsContaier>
            </InfoRightProductContainer>
            <ModalComponent openModal = {openModal} setOpenModal = {setOpenModal} idProducts = {dataProductDetail?.id}/>
        </ImageProductContainer>
    )
}