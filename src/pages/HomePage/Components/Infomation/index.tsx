import { getApiInformaiton } from "../../../../api/Infomation/api";
import { IInformatiron } from "../../../../api/Infomation/type";
import { Content, Icon, InfomationContainer, InfomationItems } from "./styled"
import { CarOutlined, PhoneOutlined, ReloadOutlined, SettingOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
export const Infomation = () => {

    const [listData, setListData] = useState<IInformatiron[] | any>([]);

    const getListInformation = async () => {

        const listInformation = await getApiInformaiton();
        setListData(listInformation);

    }

    useEffect(() => {
        getListInformation()
    }, [])
    return (
        <InfomationContainer>
            {listData && listData.length > 0 ? listData.map((item: any, index: number) => (
                <InfomationItems key = {index}>
                    <Icon>{item.icon}</Icon>
                    <div>
                        <h2>{item.name}</h2>
                        <Content>{item.content}</Content>
                    </div>
                </InfomationItems>
            )) : <div>aaaaaaaaaa</div>}


            {/* <InfomationItems>
                <Icon> <PhoneOutlined /></Icon>
                <div>
                    <h2>Hot Line</h2>
                    <Content>0327448785</Content>
                </div>
            </InfomationItems>

            <InfomationItems>
                <Icon> <ReloadOutlined /></Icon>
                <div>
                    <h2>Free Shipping</h2>
                    <Content>Lorem Ipsum is simply</Content>
                </div>
            </InfomationItems>

            <InfomationItems>
                <Icon> <SettingOutlined /></Icon>
                <div>
                    <h2>Free Shipping</h2>
                    <Content>Lorem Ipsum is simply</Content>
                </div>
            </InfomationItems> */}
        </InfomationContainer>
    )
}