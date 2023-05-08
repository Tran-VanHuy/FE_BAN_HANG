import React, { useEffect, useState } from 'react';
import { Form, Input, message } from 'antd';
import { Button, Drawer, Space } from 'antd';
import { TypeFormProducts } from '../../../../../api/Products/type';

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
                    // fields={[
                    //     {
                    //         name: ["image"],
                    //         value: props.valueProducts?.name,
                    //     }
                    // ]}
                >
                    <Form.Item
                        name="image"
                        label="Image"
                        rules={[{ required: true }, { type: 'string' }]}
                    >
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item
                        name="content"
                        label="Content"
                        rules={[{ required: true }, { type: 'string' }]}
                    >
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item
                        name="button"
                        label="Button"
                        rules={[{ required: true }, { type: 'string' }]}
                    >
                        <Input placeholder="input placeholder" />
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