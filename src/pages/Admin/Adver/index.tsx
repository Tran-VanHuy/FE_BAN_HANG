import { useEffect, useState } from "react"
import { TypeFormProducts } from "../../../api/Products/type"
import { ContainerAdmin, ContainerRightAdmin } from "../../../components/style/style"
import MenuAdmin from "../Layout/Menu"
import DataProducts from "./Components/Data"
import { Button, Space } from "antd"
import DrawerRight from "./Components/Form"
import { TypeFormCategoryProducts } from "../../../api/CategoryProducts/type"
import { createApiCategoryProducts, deleteApiCategoryProducts, getApiCategoryProducts, updateApiCategoryProducts } from "../../../api/CategoryProducts/api"
import { getApiAdver } from "../../../api/Adver/api"

export const AdverAdmin = () => {

    const [dataAdver, setDataAdver] = useState<TypeFormCategoryProducts>();
    const [action, setAction] = useState<boolean>(true);
    const [drawer, setDrawer] = useState<boolean>(false);
    const [id, setId] = useState<number | undefined>();
    const [valueCategortProducts, setValueCategoryProducts] = useState<TypeFormCategoryProducts>();

    const getDataCategoryProducts = async () => {
        try {
            const resProducts = await getApiAdver();
            setDataAdver(resProducts.data);

        } catch (error) {
            console.log(error);

        }
    }

    const createData = async (formData: TypeFormCategoryProducts) => {
        if (action === true) {
            const res = await createApiCategoryProducts(formData)
            if (res) {
                getDataCategoryProducts()
            }
        } else {
            const res = await updateApiCategoryProducts(id, formData)
            if (res) {
                setValueCategoryProducts({
                    name: ""
                });
                getDataCategoryProducts()
            }
        }
    }

    const onSubmitEditData = (formData: TypeFormProducts) => {
        setId(formData.id);
        setValueCategoryProducts(formData);
        setAction(false)
        setDrawer(true)
    }

    const deleteData = async (id: number) => {
        console.log(id);
        try {
            const res = await deleteApiCategoryProducts(id);
            if (res) {
                getDataCategoryProducts()
            }
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getDataCategoryProducts()
    }, [])
    return (
        <ContainerAdmin>
            <MenuAdmin />
            <ContainerRightAdmin>
                <Space style={{ marginBottom: "30px" }} >
                    <Button type="primary" onClick={() => (setAction(true), setDrawer(true))}>
                        Thêm mới
                    </Button>
                </Space>
                <DrawerRight valueProducts={valueCategortProducts} createData={createData} setAction={setAction} drawer={drawer} setDrawer={setDrawer}/>
                <DataProducts data={dataAdver} deleteData={deleteData} onSubmitEditData={onSubmitEditData} />
            </ContainerRightAdmin>
        </ContainerAdmin>
    )
}