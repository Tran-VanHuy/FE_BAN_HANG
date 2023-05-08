import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import { ActionAdmin } from '../../../../../components/style/style';
import { TypeFormProducts } from '../../../../../api/Products/type';
import { TypeFormCategoryProducts } from '../../../../../api/CategoryProducts/type';




const DataProducts: React.FC<any> = ({ data, deleteData, onSubmitEditData }) => {



    const columns: ColumnsType<TypeFormCategoryProducts> = [
        {
            title: 'Id',
            dataIndex: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
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