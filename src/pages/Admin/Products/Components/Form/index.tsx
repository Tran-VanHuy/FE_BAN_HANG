import React, { useEffect, useState } from 'react';
import { Form, Input, Select, message } from 'antd';
import { Button, Drawer, Space } from 'antd';
import { TypeFormProducts } from '../../../../../api/Products/type';
import { TypeFormCategoryProducts } from '../../../../../api/CategoryProducts/type';
import ReactQuill from 'react-quill';

const DrawerRight: React.FC<any> = (props) => {

    const [open, setOpen] = useState(false);

    const onClose = () => {
        form.resetFields();
        setOpen(false);
        props.setDrawer(false)
    };

    const [form] = Form.useForm();

    const onFinish = (e: TypeFormProducts) => {
        message.success('Update Data Success!');
        props.createData(e)
        form.resetFields();
    };

    const onFinishFailed = () => {
        message.error('Submit failed!');
    };

    useEffect(() => {
        setOpen(props.drawer)
    }, [props.drawer])

    return (
        <>

            <Drawer
                title="Thêm mới"
                placement={"right"}
                closable={false}
                onClose={onClose}
                open={open}
                key={"right"}
            >
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={e => onFinish(e)}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    fields={[
                        {
                            name: ["name"],
                            value: props.valueProducts?.name,
                        },
                        {
                            name: ["price"],
                            value: props.valueProducts?.price,
                        },
                        {
                            name: ["sales"],
                            value: props.valueProducts?.sales,
                        },
                        {
                            name: ["image"],
                            value: props.valueProducts?.image,
                        },
                        {
                            name: ["image1"],
                            value: props?.valueProducts?.itemImage[0]?.name,
                        },
                        {
                            name: ["image2"],
                            value: props?.valueProducts?.itemImage[1]?.name,
                        },
                        {
                            name: ["image3"],
                            value: props.valueProducts?.itemImage[2]?.name,
                        },
                        {
                            name: ["image4"],
                            value: props.valueProducts?.itemImage[3]?.name,
                        },
                        {
                            name: ["brand"],
                            value: props.valueProducts?.brand,
                        },
                        {
                            name: ["categoryProductsId"],
                            value: props.valueProducts?.categoryProductsId?.id,
                        },
                        {
                            name: ["content"],
                            value: props.valueProducts?.content,
                        },
                    ]}
                >
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{ required: true }, { type: 'string' }]}
                    >
                        <Input placeholder="input placeholder1" />
                    </Form.Item>
                    <Form.Item
                        name="price"
                        label="Price"
                        rules={[{ required: true }]}
                    >
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item
                        name="sales"
                        label="Sales (%)"
                        rules={[{ required: true }]}
                    >
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item
                        name="image"
                        label="Image"
                        rules={[{ required: true }, { type: 'string' }]}
                    >
                        <Input placeholder="default image" />
                    </Form.Item>
                    <Form.Item
                        name="image1"
                        rules={[{ required: false }]}
                    >
                        <Input placeholder="item image 1" />
                    </Form.Item>
                    <Form.Item
                        name="image2"
                        rules={[{ required: false }]}
                    >
                        <Input placeholder="item image 2" />
                    </Form.Item>
                    <Form.Item
                        name="image3"
                        rules={[{ required: false }]}
                    >
                        <Input placeholder="item image 3" />
                    </Form.Item>
                    <Form.Item
                        name="image4"
                        rules={[{ required: false }]}
                    >
                        <Input placeholder="item image 4" />
                    </Form.Item>
                    <Form.Item
                        name="content"
                        label="Content"
                    >
                        <ReactQuill theme="snow" />
                    </Form.Item>
                    <Form.Item
                        name="brand"
                        label="Brand"
                        rules={[{ required: true }, { type: 'string' }]}
                    >
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item label="CategoryProductsId" name="categoryProductsId" rules={[{ required: true }, { type: 'number' }]}>
                        <Select>
                            {props.dataCategoryProducts && props.dataCategoryProducts.length > 0 ? props?.dataCategoryProducts.map((item: TypeFormCategoryProducts) => (
                                <Select.Option value={item.id}>{item.name}</Select.Option>
                            )) : null}
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Space>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Drawer>
        </>
    );
};

export default DrawerRight;