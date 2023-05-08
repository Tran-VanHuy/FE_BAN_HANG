import  { useEffect, useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { postApiCreateOrderProducts } from '../../api/Products/api';

const ModalComponent = (props: any) => {
    
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(props.openModal);

  const [form] = Form.useForm<{userName: string, phone: string, address: string}>();
  const nameValue: string = Form.useWatch('name', form);
  const phoneValue: string = Form.useWatch('phone', form);
  const addressValue: string = Form.useWatch('address', form);
    useEffect(() => {
        setOpen(props.openModal)
    },[props.openModal])


  const handleOk = async () => {
 
    setLoading(true);
    setTimeout(async () => {
        const format = {
            userName: nameValue,
            phone: phoneValue,
            address: addressValue,
             products: {id : props.idProducts }
         }
         
        await postApiCreateOrderProducts(format);
      setLoading(false);
      setOpen(false);
      props.setOpenModal(false)

    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
    props.setOpenModal(false)
  };

  return (
    <>
      <Modal
        open={open}
        title="Nhập thông tin giao hàng"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Submit
          </Button>
        ]}
      >
        <Form form={form}  layout="vertical" autoComplete="off">
            <Form.Item name="name" label="Username">
            <Input />
            </Form.Item>
            <Form.Item name="phone" label="Phone">
            <Input />
            </Form.Item>
            <Form.Item name="address" label="Address">
            <Input />
            </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalComponent;