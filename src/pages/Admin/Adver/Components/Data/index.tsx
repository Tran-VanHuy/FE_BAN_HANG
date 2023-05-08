import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import { ActionAdmin } from '../../../../../components/style/style';
import { TypeFormProducts } from '../../../../../api/Products/type';
import { TypeFormCategoryProducts } from '../../../../../api/CategoryProducts/type';
import { ITypeAdver } from '../../../../../api/Adver/type';
import parserHtml from "react-html-parser"
import ImageAdmin from '../../../../../components/Image';




const DataProducts: React.FC<any> = ({ data, deleteData, onSubmitEditData }) => {



    const columns: ColumnsType<ITypeAdver> = [
        {
            title: 'Id',
            dataIndex: 'id',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            render: (content) => {
                return <ImageAdmin src={content} width={100} height={100}/>;
            }
        },
        {
            title: 'Content',
            dataIndex: 'content',
            render: (content) => {
                return parserHtml(content);
            }
        },
        {
            title: 'Button',
            dataIndex: 'button',
        },
        {
            title: 'Link',
            dataIndex: 'link',
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