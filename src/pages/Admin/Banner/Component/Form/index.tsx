import React, { useEffect, useState } from 'react';
import {  Form, Input,  message } from 'antd';
import { Button, Drawer , Space } from 'antd';
import { ITypeBanner } from '../../../../../api/Banner/type';

const DrawerRight: React.FC<any> = (props) => {

    const [open, setOpen] = useState(false);
    
    const onClose = () => {
        setOpen(false);
        props.setDrawer(false)
    };

    const [form] = Form.useForm();

    const onFinish = (e: ITypeBanner) => {
        message.success('Update Data Success!');
        props.createData(e)
        form.resetFields();
    };

    const onFinishFailed = () => {
        message.error('Submit failed!');
    };

    useEffect(() => {
        setOpen(props.drawer)
    },[props.drawer])

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
                          name: ["image"],
                          value: props.valueBanner?.image,
                        },
                        {
                            name: ["link"],
                            value: props.valueBanner?.link,
                          },
                      ]}
                >
                    <Form.Item
                        name="image"
                        label="Image"
                        rules={[{ required: true }, { type: 'string'}]}
                    >
                        <Input placeholder="input placeholder1" value="aaaa" />
                    </Form.Item>
                    <Form.Item
                        name="link"
                        label="Link"
                        rules={[{ required: true }, { type: 'string'}]}
                    >
                        <Input placeholder="input placeholder"  value="aaaa"/>
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