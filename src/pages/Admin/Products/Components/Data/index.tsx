import React from 'react';
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import ImageAdmin from '../../../../../components/Image';
import { ITypeBanner } from '../../../../../api/Banner/type';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import { ActionAdmin } from '../../../../../components/style/style';
import { TypeFormProducts } from '../../../../../api/Products/type';




const DataProducts: React.FC<any> = ({ data, deleteData, onSubmitEditData }) => {



    const columns: ColumnsType<TypeFormProducts> = [
        {
            title: 'Id',
            dataIndex: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Price',
            dataIndex: 'price',
        },
        {
            title: 'Sales',
            dataIndex: 'sales',
        },
        {
            title: 'PriceToPay',
            dataIndex: 'priceToPay',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            render: (image) => {
                console.log("imageimage", image);

                return (
                    <ImageAdmin width={100} src={image} height={100} />
                )
            }
        },
        // {
        //     title: 'Slug',
        //     dataIndex: 'slug',
        // },
        {
            title: 'Like',
            dataIndex: 'like',
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
        },
        {
            title: 'Sold',
            dataIndex: 'sold',
        },
        {
            title: 'Point',
            dataIndex: 'point',
        },
        {
            title: "Action",
            render: (e) => {

                return (
                    <ActionAdmin>
                        <DeleteOutlined style={{ color: "red" }} onClick={() => deleteData(e.id)} />
                        <FormOutlined style={{ color: "blue" }} onClick={() => onSubmitEditData(e)} />
                    </ActionAdmin>
                )
            }
        }
    ];
    return (
        <Table style={{ width: "100%" }} columns={columns} dataSource={data} />
    )
};

export default DataProducts;