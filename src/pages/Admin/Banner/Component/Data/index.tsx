import React from 'react';
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import ImageAdmin from '../../../../../components/Image';
import { ITypeBanner } from '../../../../../api/Banner/type';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import { ActionAdmin } from '../../../../../components/style/style';

interface DataType {
  key: React.Key;
  link: string;
  createdAt: string;
  updatedAt: string;
}



const data: DataType[] = [
  {
    key: '1',
    link: "string",
    createdAt: "string",
    updatedAt: "string",
  }
];

const DataBanner: React.FC<any> = ({data, deleteData, onSubmitEditData}) => {
    
   
    
    const columns: ColumnsType<ITypeBanner> = [
        {
          title: 'Image',
          dataIndex: 'image',
          render : (image) => {
            console.log("imageimage", image);
            
               return (
                <ImageAdmin width={100} src = {image} />
              )
          }
        },
        {
          title: 'Link',
          dataIndex: 'link',
        },
        {
          title: 'Created At',
          dataIndex: 'createdAt',
        },
        {
          title: 'Updated At',
          dataIndex: 'updatedAt',
        },
        {
            title: "Action",
            render : (e) => {
                
                   return (
                    <ActionAdmin>
                        <DeleteOutlined style = {{color: "red"}} onClick={() => deleteData(e.id)}/>
                        <FormOutlined style = {{color: "blue"}} onClick={() => onSubmitEditData(e)}/>
                    </ActionAdmin>
                  )
              }
        }
      ];
    return (
        <Table style={{width: "100%"}} columns={columns}  dataSource={data} />
    )
};

export default DataBanner;