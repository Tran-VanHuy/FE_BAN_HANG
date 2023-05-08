import styled from "styled-components"
import MenuAdmin from "../Layout/Menu"
import { ContainerAdmin, ContainerRightAdmin } from "../../../components/style/style"
import DataBanner from "./Component/Data"
import { useEffect, useState } from "react"
import { ITypeBanner } from "../../../api/Banner/type"
import { createApiBanner, deleteApiBanner, getApiBanner, updateApiBanner } from "../../../api/Banner/api"
import DrawerRight from "./Component/Form"
import { Button, Space } from "antd"

export const BannerAdmin = () => {

    const [listDataBanner, setListDataBanner]= useState<ITypeBanner[]>([]);
    const [action, setAction] = useState<boolean>(true);
    const [drawer, setDrawer] = useState<boolean>(false);
    const [id, setId] = useState<number | undefined>();
    const [valueBanner, setValueBanner] = useState<ITypeBanner>();
    
    const getListBanner = async () => {

        const banner = await getApiBanner(0, 10);
        setListDataBanner(banner.data.data)
    }

    const createData = async (formData: ITypeBanner) => {
        if(action === true){
            const res = await createApiBanner(formData)
            setListDataBanner([...listDataBanner, res.data.data])
        }else{
            const res = await updateApiBanner(id, formData)
            if(res.status === 200){
                getListBanner()
            }
        }
    
    }

    const deleteData = async (id: string) => {
        console.log(id);
        const res =await deleteApiBanner(id);
        if(res.status === 200){
            getListBanner()
        }
    }

    const onSubmitEditData = (formData: ITypeBanner) => {
        setId(formData.id);
        setValueBanner(formData);
        setAction(false)
        setDrawer(true)        
    }

    useEffect(() => {
        getListBanner()
    }, [])
    return (
        <ContainerAdmin>
            <MenuAdmin />
            <ContainerRightAdmin>
            <Space style={{marginBottom: "30px"}} >
                <Button type="primary" onClick={() => (setAction(true), setDrawer(true), setValueBanner({image:"", link:""}))}>
                    Thêm mới
                </Button>
            </Space>
                <DrawerRight createData = {createData} setAction = {setAction} drawer = {drawer} setDrawer = {setDrawer} valueBanner = {valueBanner}/>
                <DataBanner data = {listDataBanner} deleteData = {deleteData} onSubmitEditData = {onSubmitEditData}/>
            </ContainerRightAdmin>
        </ContainerAdmin>
    )
       
}
