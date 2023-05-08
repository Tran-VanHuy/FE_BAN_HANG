import { useEffect, useState } from "react"
import { TypeFormProducts } from "../../../api/Products/type"
import { ContainerAdmin, ContainerRightAdmin } from "../../../components/style/style"
import MenuAdmin from "../Layout/Menu"
import DataProducts from "./Components/Data"
import { createApiProducts, deleteApiProducts, getApiProducts, updateApiProducts } from "../../../api/Products/api"
import { Button, Pagination, Space } from "antd"
import DrawerRight from "./Components/Form"
import { TypeFormCategoryProducts } from "../../../api/CategoryProducts/type"
import { getApiCategoryProducts } from "../../../api/CategoryProducts/api"

export const ProductsAdmin = () => {

    const [dataProducts, setDataProducts] = useState<TypeFormProducts[]>();
    const [dataCategoryProducts, setDataCategoryProducts] = useState<TypeFormCategoryProducts>();
    const [action, setAction] = useState<boolean>(true);
    const [drawer, setDrawer] = useState<boolean>(false);
    const [id, setId] = useState<number | undefined>();
    const [valueProducts, setValueProducts] = useState<TypeFormProducts>();

    const getDataProducts =async () => {
        try {
            const resProducts = await getApiProducts("", 0, 3);
            setDataProducts(resProducts.data);
            
            const resCategoryProducts = await getApiCategoryProducts();
            setDataCategoryProducts(resCategoryProducts.data)
        } catch (error) {
            console.log(error);
            
        }
    }

    const createData = async (formData: TypeFormProducts) => {
        const itemImage = [{name: formData.image1}, {name: formData.image2}, {name: formData.image3}, {name: formData.image4}]
        const formatData: TypeFormProducts = {...formData, categoryProductsId: {id: formData?.categoryProductsId, name: null}, like: 0, itemImage}  
        console.log("formDataformData", formData);
        
        if(action === true){
            const res = await createApiProducts(formatData)
            if(res){
                getDataProducts()
            }
        }else{
            const res = await updateApiProducts(id, formatData)
            if(res){
                setValueProducts({
                    name: "",
                    price: 0,
                    sales: 0,
                    image: "",
                    slug: "string",
                    itemImage: [],
                    like: 0,
                    brand: "",
                    sold: false,
                    priceToPay: 0,
                    point: 0,
                    content: ""
                    });
                getDataProducts()
            }
        }
    }

    const onSubmitEditData = (formData: TypeFormProducts) => {
        setId(formData.id);
        setValueProducts(formData);
        setAction(false)
        setDrawer(true)        
    }

    const deleteData = async (id: number) => {
        console.log(id);
        try {
            const res = await deleteApiProducts(id);
            if(res){
                getDataProducts()
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getDataProducts()
    },[])
    return (
        <ContainerAdmin>
            <MenuAdmin />
            <ContainerRightAdmin>
            <Space style={{marginBottom: "30px"}} >
                <Button type="primary" onClick={() => (setAction(true), setDrawer(true))}>
                    Thêm mới
                </Button>
            </Space>
                <DrawerRight valueProducts = {valueProducts} createData = {createData} setAction = {setAction} drawer = {drawer} setDrawer = {setDrawer} dataCategoryProducts = {dataCategoryProducts}/>
                <DataProducts data = {dataProducts} deleteData = {deleteData} onSubmitEditData = {onSubmitEditData}/>
            </ContainerRightAdmin>
        </ContainerAdmin>
    )
}