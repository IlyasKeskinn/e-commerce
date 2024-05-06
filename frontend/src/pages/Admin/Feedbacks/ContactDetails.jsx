import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {
    Form, Input, Button, Row, Col,
    Spin, message, Card, Select
} from "antd"
import useFetch from '../../../hooks/useFetch';
import useFetchWithToken from '../../../hooks/useFetchWithToken';

export const ContactDetails = () => {
    const id = useParams().id;
    const fetchURL = `/contact/get_contactById/${id}`;
    const token = localStorage.getItem("x-auth-token");
    const fecthData = useFetchWithToken(fetchURL, token,);
    const updateURL = `/contact/update_contact/${id}`;


    const { data, isLoading, error, updateData } = useFetch(updateURL, "PUT", token);

    const [form] = Form.useForm();

    const navigate = useNavigate();

    const onFinish = async (values) => {
        updateData(values);
    }

    useEffect(() => {
        if (error) {
            message.error(error);
        }
        if (data && data._id) {
            navigate("/admin/feedbacks/contacts")
        }
    }, [data, error])

    useEffect(() => {
        if (fecthData.error) {
            message.error(fecthData.error);
        }
        if (fecthData.data && fecthData.data._id) {
            form.setFieldsValue(fecthData.data)
        }
    }, [fecthData.data, fecthData.error])

    return (
        <Spin spinning={fecthData.isLoading}>
            <Form encType="multipart/form-data" style={{ padding: "20px" }}
                name='basic'
                layout='vertical'
                autoComplete='off'
                onFinish={onFinish}
                form={form}
            >
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="User Name"
                            name="name"
                        >
                            <Input disabled={true}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="User Mail"
                            name="mail"
                        >
                            <Input disabled={true}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item
                    name="status"
                    label="Status:"
                    rules={[
                        {
                            required: true,
                            message: 'Please select status!',
                        },
                    ]}
                >
                    <Select placeholder="Please select a status">
                        <Option value="new">New</Option>
                        <Option value="progress">Progress</Option>
                        <Option value="closed">Closed</Option>
                    </Select>
                </Form.Item>
                <Card
                    title="User Messeages"
                    bordered={false}
                    style={{
                        width: "100%",
                    }}
                >
                    <p>
                        {fecthData.data.msg}
                    </p>
                </Card>
                <Form.Item
                    label="msg"
                    name="msg"
                    style={{ visibility: "hidden" }}
                >
                    <Input disabled={true}
                    />
                </Form.Item>
                <Button disabled={isLoading} type="primary" htmlType="submit">
                    Submit
                </Button>

            </Form>
        </Spin >

    )
}


